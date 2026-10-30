{
  config,
  lib,
  pkgs,
  ...
}:
let
  unstable = import <unstable> {
    config = {
      allowUnfree = true;
    };
  };
in
{
  imports = [ ./hardware-configuration.nix ];
  # Nix/NixOS
  # determines stateful settings like file locations and database versions
  # READ BEFORE CHANGING:
  # https://search.nixos.org/options?channel=25.11&show=system.stateVersion&query=system.stateVersion
  system.stateVersion = "22.11"; # first install on ex-tides
  nix.settings = {
    experimental-features = [ "nix-command" ];
    substituters = [ "https://cache.nixos-cuda.org" ];
    trusted-public-keys = [ "cache.nixos-cuda.org:74DUi4Ye579gUqzH4ziL9IyiJBlDpMRn9MBN8oNan9M=" ];
  };
  nixpkgs.config.allowUnfree = true;
  system.autoUpgrade = {
    enable = true;
    dates = "04:40";
    persistent = false;
  };
  nix.gc = {
    automatic = true;
    dates = "05:00";
    persistent = false;
  };
  nix.optimise = {
    automatic = true;
    dates = "05:15";
    persistent = false;
  };
  ## Boot
  boot.loader.efi.efiSysMountPoint = "/boot/efi";
  boot.loader.efi.canTouchEfiVariables = true;
  boot.loader.timeout = 1;
  boot.loader.systemd-boot.enable = true;
  boot.loader.systemd-boot.configurationLimit = 3;
  boot.kernelModules = [
    "sg" # cdrom and dvd
    "k10temp" # amd temp sensor
    "nct6775" # fan speed control
  ];

  # # Networking
  networking.hostName = "nixos";
  networking.networkmanager.enable = true;
  networking.firewall.allowedTCPPorts = [
    # 5173 # vite dev
    # 4173 # vite preview
  ];
  services.printing.enable = true;
  ## Localization
  services.localtimed.enable = true;
  console.keyMap = "de";
  i18n.defaultLocale = "de_DE.UTF-8";
  services.xserver.xkb = {
    layout = "de";
    variant = "mac_nodeadkeys";
  };
  ## Audio
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    jack.enable = true;
  };
  security.rtkit.enable = true; # required for PipeWire to acquire realtime priority
  ## Video
  hardware.graphics = {
    enable = true;
    enable32Bit = true;
  };
  services.xserver.videoDrivers = [ "nvidia" ];
  hardware.nvidia = {
    open = true;
    nvidiaSettings = false;
  };

  # Desktop Environment
  ## Gnome
  services.desktopManager.gnome.enable = true;
  services.displayManager.gdm.enable = true;
  services.gvfs.enable = true;
  environment.gnome.excludePackages = with pkgs; [
    epiphany # replaced by vivaldi
    gnome-music # replaced by nocturne + jellyfin
    # gnome-system-monitor # replaced by resources
    # gnome-console # replaced by ghostty
    gnome-connections
    simple-scan
    gnome-tour
  ];
  ### fix gnomes nautlis file browser media metadata display: https://github.com/NixOS/nixpkgs/issues/53631#issuecomment-3704189416
  environment.sessionVariables.GST_PLUGIN_SYSTEM_PATH_1_0 =
    lib.makeSearchPathOutput "lib" "lib/gstreamer-1.0"
      [
        pkgs.gst_all_1.gst-plugins-good
        pkgs.gst_all_1.gst-plugins-bad
        pkgs.gst_all_1.gst-plugins-ugly
        pkgs.gst_all_1.gst-libav
      ];

  # Software
  services.flatpak.enable = true;
  programs.appimage = {
    enable = true;
    binfmt = true;
  };
  environment.systemPackages = with pkgs; [
    nixfmt
    gnome-tweaks
    gnome-shell-extensions
    gnomeExtensions.appindicator # steam and discord force tray icons ;(
    gnomeExtensions.copyous
    vivaldi
    firefox
    nodejs_26
    pnpm
    vscodium
    flyctl
    discord
    signal-desktop
    obsidian
    micro
    handbrake
    makemkv
    vlc
    lutris
    rpcs3
    atlauncher # minecraft client
    obs-studio
    libreoffice
    hunspell
    hunspellDicts.de_DE
    hunspellDicts.en_US
    bella # "pastel" is nice too though
    resources
    gradia
    rclone
    pwvucontrol
    eartag
    tuba
    nocturne
    ghostty
    ivpn-ui
    qbittorrent
    # cool apps installed via flatpack:
    # Flatseal
    # Laser
    # Pins
  ];
  programs.zoxide.enable = true;
  programs.git.enable = true;
  programs.gamemode.enable = true;
  programs.steam = {
    enable = true;
    remotePlay.openFirewall = true;
    dedicatedServer.openFirewall = true;
  };
  programs.nautilus-open-any-terminal = {
    enable = true;
    terminal = "ghostty";
  };
  hardware.xone.enable = true;
  services.lact.enable = true;
  services.jotta-cli.enable = true;
  services.jellyfin = {
    enable = true;
    openFirewall = true;
    user = "sarcevic";
  };
  services.ivpn.enable = true;

  # User Config
  users.users.sarcevic = {
    isNormalUser = true;
    description = "toni / link";
    extraGroups = [
      "networkmanager"
      "wheel"
    ];
  };
  services.displayManager.gdm.autoSuspend = false;

  # Environment
  environment.sessionVariables.NIXOS_OZONE_WL = "1"; # force Ozone Wayland in Chromium/Electron
}
