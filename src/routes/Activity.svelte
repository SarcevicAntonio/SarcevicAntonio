<script lang="ts">
	import type { LastFMData } from './lastfm/type'

	export let lastfm: LastFMData
</script>

<h2>Music</h2>
<p>top scrobbeled tracks last 7 days</p>
<ol>
	{#each lastfm.toptracks.track as track}
		{@const minutes = +track.duration * +track.playcount}
		<li>
			<a href={track.url}>
				{track.artist.name} – {track.name}
				{#if +track.duration}
					(~{minutes}
					{minutes === 1 ? 'minute' : 'minutes'})
				{/if}
			</a>
		</li>
	{/each}
</ol>

<style>
	h2 {
		font-size: var(--step-5);
		margin-block-end: 0.25em;
	}

	ol {
		font-size: var(--step-0);
		width: max-content;
		margin: auto;
		text-align: start;
	}
</style>
