<script>
  import Preview from "../plot_data/follium/heatmap_movie_preview.png";

  export let src;
  export let title = "heatmap";
  export let withConsent = false;
  export let description;
  function click() {
    withConsent = false;
  }
</script>

<style>
  p {
    @apply max-w-2xl p-4 mx-auto text-base text-justify my-4 mt-8;
  }

  div {
    @apply relative cursor-pointer;
  }

  button[name="play"] {
    position: absolute;
    background: red;
    z-index: 10;
    width: 86px;
    height: 86px;
    left: 50%;
    top: 50%;
    margin-left: -43px; /*half of the width */
    margin-top: -43px; /*half of the height */
    border-radius: 50%;
    cursor: pointer;
  }
  button[name="play"]:focus {
    outline: 0;
    border: 1px solid hsl(210, 58%, 69%);
    box-shadow: 0 0 0 3px hsla(210, 76%, 57%, 0.5);
    cursor: pointer;
  }

  button[name="play"]::after {
    content: "";
    display: inline-block;
    top: 1px;
    left: 3px;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent white;
    @apply relative cursor-pointer;
  }
  img {
    cursor: pointer;
    filter: grayscale(100%);
  }
  [style*="--aspect-ratio"] > :first-child {
    width: 100%;
  }

  @supports (--custom: property) {
    [style*="--aspect-ratio"] {
      position: relative;
    }
    [style*="--aspect-ratio"]::before {
      content: "";
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*="--aspect-ratio"] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
</style>

{#if description}
  <p>{description}</p>
{/if}
<div style="--aspect-ratio: 16/9;">
  {#if withConsent}
    <img
      on:click={click}
      src={Preview}
      width="1400"
      height="600"
      alt="preview" />
    <button name="play" on:click={click} />
  {:else}
    <iframe width="1600" height="800" frameborder="0" {title} {src} />
  {/if}

</div>
