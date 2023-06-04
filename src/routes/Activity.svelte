<script lang="ts">
	import type { LastFMData } from './lastfm/type'

	export let lastfm: LastFMData
</script>

<section>
	<h2>Music</h2>
	<h2>top tracks last 7 days</h2>
	<ol>
		{#each lastfm.toptracks.track as track}
			<li>
				{track.artist.name} – {track.name}
			</li>
		{/each}
	</ol>
</section>

<style>
	section,
	h2,
	ol {
		margin: auto;
	}
	section {
		max-width: max-content;
	}
</style>
