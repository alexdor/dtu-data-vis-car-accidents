<script>
  export let size = "40px";
  $: Styles = [`width: ${size}`, `height: ${size}`].join(";");
</script>

<style>
  div {
    box-sizing: border-box;
    position: relative;
    border: 3px solid transparent;
    border-top-color: #ff3e00;
    border-radius: 50%;
    animation: circle-4-spin 2s linear infinite;
  }
  div:before,
  div:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }
  div:before {
    border-top-color: #40b3ff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: circle-4-spin 3s linear infinite;
  }
  div:after {
    border-top-color: #676778;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    animation: spin 4s linear infinite;
  }
  @keyframes circle-4-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div style={Styles} />
