<script lang="ts">
	import { onMount } from 'svelte'

	let dialog: HTMLDialogElement

	onMount(() => dialog.showModal())
</script>

<dialog bind:this={dialog}>
	<h2>Photosensitive Seizure Warning!</h2>
	<p>
		This page could trigger seizures for people with photosensitive epilepsy. Discretion is advised.
	</p>
	<button
		on:click={() => {
			dialog.remove()
		}}
	>
		OK
	</button>
</dialog>

<style>
	dialog {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 80dvw;
		height: 80dvh;
		box-sizing: border-box;
		background-color: var(--as-back-2);
		color: var(--as-text-1);
	}
	dialog::backdrop {
		background-color: black;
		opacity: 80%;
	}
	p {
		max-width: 50ex;
		text-align: center;
	}
</style>
