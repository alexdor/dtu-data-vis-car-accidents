<script>
  import { v4 as uuidv4 } from "uuid";
  import Loader from "./Loader.svelte";
  const id = uuidv4();
  export let data;
  export let description;
  export let title;
  let loading = true;
  if (typeof window !== "undefined" && window.Bokeh) {
    loading = false;
    window.Bokeh.embed.embed_item(data, id);
  }
</script>

<style>
  div.wrapper {
    @apply p-4;
  }

  section {
    @apply relative p-2 mt-4 w-full;
  }
  .center {
    @apply flex justify-center flex-col items-center;
  }
  .loader {
    @apply text-center;
  }
</style>

<section>
  <h3>{title}</h3>
  {#if description}
    <p>{description}</p>
  {/if}
  {#if loading}
    <div class="center">
      <Loader />
      <p class="loader">
        Loading Bokeh library
        <br />
        If this takes too long please refresh the page
      </p>
    </div>
  {/if}
  <div class="wrapper">
    <div {id} />
  </div>
</section>
