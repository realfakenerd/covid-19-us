<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status === 404}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">
        <p>Page not found</p>
      </div>
      <div class="message-body">
        <a href="/">Click me</a> and go back to the homepage
      </div>
    </article>
  </div>
{/if}

<style>
	.container{
		margin: 3.5em;
	}
</style>