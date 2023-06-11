<script lang="ts">
	import RelativeTime from '@yaireo/relative-time'

	import type { LastFMData } from './lastfm/type'

	export let lastfm: LastFMData
	const relativeTime = new RelativeTime()
	console.log(lastfm)
</script>

<h2>Music</h2>
<h3>Recent Tracks</h3>

<ol class="recent">
	{#each lastfm.recenttracks.track as track}
		<li>
			<a
				href="
			{track.url}"
			>
				<img src={track.image[0]['#text']} alt="" />
				{track.artist['#text']} – {track.name}
				<small>
					{#if track.date}
						{relativeTime.from(new Date(+track.date.uts * 1000))}
					{:else}
						currently listening
						<span class="current">🎶</span>
					{/if}
				</small>
			</a>
		</li>
	{/each}
</ol>

<h3>Top Albums: Last 3 Months</h3>
<ol class="album-grid">
	{#each lastfm.topalbums.album as album}
		<li>
			<a href={album.url}>
				<img src={album.image.at(-1)?.['#text']} alt="" />
				<p>
					{album.artist.name} – {album.name}
				</p>
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
					{#if +track.duration}
						~{minutes}
						{minutes === 1 ? 'minute' : 'minutes'}
					{/if}
				</small>
			</a>
		</li>
	{/each}
</ol>

<style>
	h2 {
		font-size: var(--step-5);
		margin-block-end: 0.25em;
	}

	ul,
	ol {
		font-size: var(--step-0);
		margin: auto;
		text-align: start;
		width: fit-content;
	}

	a {
		color: inherit;
		text-decoration: none;
		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}

	.recent {
		& img {
			vertical-align: middle;
		}
		& .current {
			display: inline-block;
			animation: bounce 2s ease-in-out infinite;
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.25rem);
		}
	}

	.album-grid {
		padding: 0;
		list-style: none;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		max-width: calc(3 * 300px);
		line-height: 0;
		gap: 1rem;

		& a {
			position: relative;

			&:focus p,
			&:hover p {
				text-decoration: underline;
			}
		}

		& p {
			font-size: var(--step--2);
			margin-block: 0;
			position: absolute;
			bottom: 0.5em;
			background-color: var(--as-back-1);
			padding: 0.25em;
			line-height: 1;
		}

		& img {
			width: 100%;
		}
	}
	small {
		font-size: var(--step--2);
	}
</style>
