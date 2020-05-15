<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  @screen sm {
    main {
      max-width: theme("screens.sm");
    }
  }
  @screen md {
    main {
      max-width: theme("screens.md");
    }
  }
  @screen lg {
    main {
      max-width: theme("screens.lg");
    }
  }
  @screen xl {
    main {
      max-width: theme("screens.xl");
    }
  }
  main {
    width: 100%;
    @apply bg-white p-4 mx-auto;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
