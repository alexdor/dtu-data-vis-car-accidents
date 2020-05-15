<script>
  import Plot from "./Plot.svelte";
  import crashes from "../plot_data/bokeh/Crash per Hour.json";
  import tabs from "../plot_data/bokeh/tab_view.json";
</script>

<style>
  section {
    @apply grid grid-cols-1 gap-4;
  }
</style>

<section>
  <Plot
    title="Crashes per hour, divided by age"
    description="The chart provides an interactive way of visualizing the age of
    the people that are getting into car accidents"
    data={crashes} />
  <Plot
    title="Interactive analysis of different aspects of the dataset"
    data={tabs} />
</section>
