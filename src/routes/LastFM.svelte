<script lang="ts">
	import RelativeTime from '@yaireo/relative-time'
	import MaterialSymbolsMusicNoteRounded from '~icons/material-symbols/music-note-rounded'
	import type { LastFMData } from './lastfm/type'

	export let lastfm: LastFMData
	const relativeTime = new RelativeTime()
</script>

<h2>Listening Activity</h2>
<a class="powered" href="https://www.last.fm/de/user/LinkPlay9">powered by last.fm</a>

<h3>Recent Tracks</h3>

<ol>
	{#each lastfm.recenttracks.track as track}
		<li>
			<a href={track.url}>
				{track.artist['#text']} – {track.name}
				<small>
					{#if track.date}
						{relativeTime.from(new Date(+track.date.uts * 1000))}
					{:else}
						currently listening <span class="current"><MaterialSymbolsMusicNoteRounded /></span>
					{/if}
				</small>
			</a>
		</li>
	{/each}
</ol>

<h3>Top Artists: Last 12 Months</h3>

<ol>
	{#each lastfm.topartists.artist as artist}
		<li>
			<a href={artist.url}>
				{artist.name}
				<small>
					{artist.playcount} track plays
				</small>
			</a>
		</li>
	{/each}
</ol>

<h3>Top Albums: Last 3 Months</h3>
<ol>
	{#each lastfm.topalbums.album as album}
		<li>
			<a href={album.url}>
				{album.artist.name} – {album.name}
				<small>
					{album.playcount} track plays
				</small>
			</a>
		</li>
	{/each}
</ol>

<h3>Top Tracks: Last 30 Days</h3>
<ol>
	{#each lastfm.toptracks.track as track}
		{@const minutes = Math.round((+track.duration * +track.playcount) / 60)}
		<li>
			<a href={track.url}>
				{track.artist.name} – {track.name}
				<small>
					{track.playcount} plays
					{#if +track.duration}
						(~ {minutes} {minutes === 1 ? 'minute' : 'minutes'})
					{/if}
				</small>
			</a>
		</li>
	{/each}
</ol>

<style>
	h2 {
		font-size: var(--step-5);
		margin-block-end: 0;
	}

	h3 {
		margin-block-start: 1.5em;
		margin-block-end: 0.5em;
	}

	ol {
		font-size: var(--step-0);
		margin: auto;
		text-align: start;
		width: fit-content;
		text-align: center;
		list-style: none;
		padding: 0;
	}

	li {
		margin-block-end: 0.25em;
	}

	.powered {
		font-size: var(--step--1);
	}

	small {
		font-size: var(--step--1);
		display: block;
	}

	.current {
		display: inline-block;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0.3rem) rotate(10deg);
		}
		50% {
			transform: translateY(0.1rem) rotate(-10deg);
		}
	}

	@media (prefers-reduced-motion) {
		@keyframes bounce {
			0%,
			100% {
				transform: rotate(5deg);
			}
			50% {
				transform: rotate(-5deg);
			}
		}
	}
</style>
