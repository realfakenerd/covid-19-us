<script>
  let isOpen = false;
  export let segment;

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="logo.png" alt="virus logo" />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
	  class:is-active={isOpen}
	  on:click={toggleNav}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment === undefined}
        >Home</a
      >
      <a href="/about" class="navbar-item" class:is-active={segment === "about"}
        >About</a
      >
    </div>
  </div>
</nav>

<style>
  @media (min-width: 769px) {
    nav {
      border-bottom: solid 1px;
    }
  }
</style>
