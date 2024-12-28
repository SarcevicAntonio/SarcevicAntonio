<script lang="ts">
	let dialog = $state<HTMLDialogElement>()
	let closed = $state(false)
	$effect(() => dialog?.showModal())
</script>

{#if !closed}
	<dialog bind:this={dialog}>
		<h2>Photosensitive Seizure Warning!</h2>
		<p>
			This page could trigger seizures for people with photosensitive epilepsy. Discretion is
			advised.
		</p>
		<button onclick={() => (closed = true)}> OK </button>
	</dialog>
{/if}

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
