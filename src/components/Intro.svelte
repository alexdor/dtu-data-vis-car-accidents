<script>
  import crashDayOfWeek from "../plot_data/plt/CRASH_DAY_OF_WEEK.svg";
  import crashHour from "../plot_data/plt/CRASH_HOUR.svg";
  import kdeAccidentToSchool from "../plot_data/plt/KDE_distance_to_nearest_school.svg";
  import kdeHoursOfAccidents from "../plot_data/plt/KDE_hours_of_accidents.svg";

  import PltPlot from "./PltPlot.svelte";
  let fullScreenIndex = -1;
  const plots = [
    {
      title: "Crashes per day of the week",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      svg: crashDayOfWeek
    },
    {
      title: "Crashes by the hour",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      svg: crashHour
    },
    {
      title: "Distance from each accident to nearest school",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      svg: kdeAccidentToSchool
    },
    {
      title: "Hours of accidents",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      svg: kdeHoursOfAccidents
    }
  ];

  function click({ detail: { id } }) {
    fullScreenIndex = id === fullScreenIndex ? -1 : id;
  }
</script>

<style>
  section {
    @apply grid grid-cols-2 gap-4;
  }
</style>

<section>
  {#each plots as plot, i}
    <PltPlot
      {...plot}
      id={i}
      fullscreen={i == fullScreenIndex}
      on:click={click} />
  {/each}
</section>
