<script>
  import Intro from "../components/Intro.svelte";
  import ML from "../components/ML.svelte";
  import BokehCharts from "../components/BokehCharts.svelte";
  import Heatmap from "../components/Heatmap.svelte";
</script>

<style>
  h2 {
    @apply text-3xl mt-8;
    text-align: center;
  }
  p {
    @apply max-w-2xl p-4 mx-auto text-base text-justify my-4;
  }
  a {
    @apply text-blue-400;
  }
</style>

<svelte:head>
  <title>Chicago Car Crashes analysis</title>
</svelte:head>

<h2>The idea</h2>
<p>
  The idea is to investigate the trends in car accidents, relating to causes and
  conditions in the city of Chicago. To relate the information to a more
  everyday use we would like to compare this data to lower level schools where
  younger kids tend to walk to and from school on their own, and possibly
  identify the safest schools. The dataset also allows us to look at how many
  kids are hurt near each school. You can view the implementation of the idea in
  the companion notebook
  <a
    href="https://nbviewer.jupyter.org/github/alexdor/dtu-data-vis-car-accidents/blob/master/Final%20Notebook.ipynb"
    target="_blank">
    here
  </a>
  . Don't forget to download the data from
  <a
    href="https://github.com/alexdor/dtu-data-vis-car-accidents/tree/master/Data"
    target="_blank">
    here
  </a>
  if you intent to follow along.
</p>
<h2>Preliminary statistics</h2>
<Intro />
<h2>Interactive plots</h2>
<BokehCharts />

<h2>Heatmaps</h2>
<Heatmap
  title="Crashes compare too schools"
  description="The map below indicated the areas with most accidents. It is
  found that there are clear areas more at risk than others. This is the age
  group we are most interested in, and the map shows that the accidents are
  centered around the schools, with the highest densities where there are also
  the highest densities of schools. The red circles highlight the areas where
  there are elementary schools but very low if any densities of accidents. These
  are the areas that would according to this data be the safest for the kids to
  independently go to school in."
  src="https://rawcdn.githack.com/alexdor/dtu-data-vis-car-accidents/a36b87382ac17220dbdfbd4efd549e67885f1798/src/plot_data/follium/es_with_circles.html" />

<Heatmap
  src="https://rawcdn.githack.com/alexdor/dtu-data-vis-car-accidents/93d1fd3c79d5f341faac98db7a2e85546763d532/src/plot_data/follium/Heatmap_with_time.html"
  title="Heatmap movie"
  withConsent={true}
  description="This heatmap movie shows the locations of accidents during 24
  hours, in all areas of Chicago. This heatmap is CPU expensive, click it to
  start interacting with it." />

<h2>Accident prediction</h2>
<p>
  In order to predict upcoming accidents a random forest was training. The model
  produced the following results for the upcoming 6 days.
</p>
<ML />

<div>
  <h4>
    Don't forget to checkout our notebook at
    <a
      href="https://nbviewer.jupyter.org/github/alexdor/dtu-data-vis-car-accidents/blob/master/Final%20Notebook.ipynb"
      target="_blank">
      https://nbviewer.jupyter.org/github/alexdor/dtu-data-vis-car-accidents/blob/master/Final%20Notebook.ipynb
    </a>
    . You can also find the data we used
    <a
      href="https://github.com/alexdor/dtu-data-vis-car-accidents/tree/master/Data">
      here
    </a>
    .
  </h4>
</div>
