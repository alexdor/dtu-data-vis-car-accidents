<script>
  export let src;
  export let title = "heatmap";
  export let withConsent = false;
  export let description;

  function click() {
    withConsent = false;
  }
</script>

<style>
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
    <div width="1600" height="900">
      <button on:click={click} />
    </div>
  {:else}
    <iframe width="1600" height="900" frameborder="0" {title} {src} />
  {/if}

</div>
