<script>
  import { createEventDispatcher } from "svelte";
  export let svg;
  export let title;
  export let description;
  export let id;
  export let fullscreen = false;

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    dispatch("click", {
      id
    });
  }
</script>

<style>
  .wrapper {
    @apply w-full rounded overflow-hidden shadow-lg cursor-pointer;
    transition: transform 0.25s ease;
  }
  .fullscreen {
    @apply bg-white cursor-pointer;
    transform: scale(1.2);
    z-index: 2;
  }
  .desc {
    @apply text-gray-700 text-base cursor-pointer;
  }

  .svg {
    @apply cursor-pointer w-full p-4;
  }

  .padding {
    @apply px-6 py-4 cursor-pointer;
  }
  .title {
    @apply font-bold text-xl mb-2 cursor-pointer;
  }
</style>

<div class="wrapper" class:fullscreen on:click={handleClick}>
  <div class="svg">
    {@html svg}
  </div>
  <div class="padding">
    <div class="title">{title}</div>
    <p class="desc">{description}</p>
  </div>
</div>
