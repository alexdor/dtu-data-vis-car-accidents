<script>
  import Intro from "../components/Intro.svelte";
  import BokehCharts from "../components/BokehCharts.svelte";
</script>

<style>
  h2 {
    @apply text-3xl;
    text-align: center;
    margin: 0 auto;
  }
  p {
    @apply max-w-2xl p-4 mx-auto text-base text-justify my-4;
  }
</style>

<svelte:head>
  <title>Chicago Car Crashes analysis</title>
</svelte:head>

<h2>The idea</h2>
<p>
  The idea is to investigate the trends in car accidents, relating to causes and
  conditions. To relate the information to a more everyday use we would like to
  compare this data to lower level schools where younger kids tend to walk to
  and from school on their own, and possibly identify the safest schools. The
  dataset also allows us to look at how many kids are hurt near each school.
</p>
<h2>Preliminary statistics</h2>
<Intro />
<h2>Interactive plots</h2>
<BokehCharts />