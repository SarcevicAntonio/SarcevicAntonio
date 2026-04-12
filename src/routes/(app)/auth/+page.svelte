<script lang="ts">
	import { authClient } from '$lib/auth-client'

	const session = authClient.useSession()
</script>

<div>
	{#if $session.data}
		<div>
			<p>
				{$session.data.user.name}
			</p>
			<button
				on:click={async () => {
					await authClient.signOut()
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<form method="POST">
			<label for="email">email</label>
			<input type="email" name="email" />
			<label for="username">username</label>
			<input type="text" name="username" />
			<label for="password">password</label>
			<input type="password" name="password" />
			<button> register</button>
		</form>
	{/if}
</div>
