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
  # Nix
  nix.settings.experimental-features = [ "nix-command" ];
  nixpkgs.config.allowUnfree = true;
  nix.optimise = {
    automatic = true;
    dates = [ "23:00" ];
  };
  nix.gc = {
    options = "--delete-older-than 30d";
    automatic = true;
    dates = [ "22:30" ];
  };

  # Nix OS
  system.autoUpgrade.enable = true;
  # determines stateful settings like file locations and database versions
  # READ BEFORE CHANGING:
  # https://search.nixos.org/options?channel=25.11&show=system.stateVersion&query=system.stateVersion
  system.stateVersion = "22.11"; # first install on ex-tides

  # Boot
  boot.loader.efi.efiSysMountPoint = "/boot/efi";
  boot.loader.efi.canTouchEfiVariables = true;
  boot.loader.timeout = 2;
  boot.loader.systemd-boot.enable = true;
  boot.loader.systemd-boot.configurationLimit = 3;
  boot.kernelParams = [ "nvidia.NVreg_TemporaryFilePath=/var/tmp" ];
  boot.kernelModules = [
    "k10temp"
    "nct6775"
  ];

  # OS Basics
  networking.hostName = "nixos";
  networking.networkmanager.enable = true;
  services.printing.enable = true;
  services.xserver.enable = true;
  services.xserver.excludePackages = with pkgs; [ xterm ];
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
    open = true; # required for newer GPUs
    powerManagement.enable = true;
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
    gnome-system-monitor # replaced by resources
    gnome-console # replaced by ghostty
    gnome-connections # unneeded atm
    simple-scan # unneeded atm
    gnome-tour # unneeded
    # yelp # unneeded most of the time, but its nice to be able to access
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
    gnome-shell-extensions
    gnomeExtensions.caffeine
    gnomeExtensions.appindicator # steam forces tray icons ;(
    gnomeExtensions.copyous
    nixfmt
    vivaldi
    firefox
    nodejs
    pnpm
    vscodium
    flyctl
    vesktop # discord client w/o forced tray icons
    signal-desktop
    obsidian
    micro
    jellyfin
    jellyfin-web
    jellyfin-ffmpeg
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
    qbz
    eartag
    tuba
    nocturne
    cartridges
    ghostty
    # beets # CVE-2026-42052
    # installed via flatpack:
    # Flatseal
    # Laser
  ];
  programs.zoxide.enable = true;
  services.lact.enable = true;
  hardware.xone.enable = true;
  programs.git.enable = true;
  services.jotta-cli.enable = true;
  services.jellyfin = {
    enable = true;
    openFirewall = true;
    user = "sarcevic";
  };
  # services.mullvad-vpn = {
  #   enable = true;
  #   package = pkgs.mullvad-vpn; # also provide GUI tool
  # };
  programs.gamemode.enable = true;
  programs.steam = {
    enable = true;
    remotePlay.openFirewall = true;
    dedicatedServer.openFirewall = true;
  };

  # User Config
  users.users.sarcevic = {
    isNormalUser = true;
    description = "toni / link";
    extraGroups = [
      "networkmanager"
      "wheel"
    ];
  };
  # services.displayManager.autoLogin.enable = true;
  # services.displayManager.autoLogin.user = "sarcevic";

  # Environment
  environment.sessionVariables.NIXOS_OZONE_WL = "1"; # force Ozone Wayland in Chromium/Electron
}
