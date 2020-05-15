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
        "The accidents distributions over the week, its immediately clear that Sunday (1) has the least accidents which is to be assumed considering it is the common day off resulting in less cars on the road. Oppositely Friday (6) is the most accident prone day, likely due to people being tired from a long week.",
      svg: crashDayOfWeek
    },
    {
      title: "Crashes by the hour",
      description: "The accidents distributed over the hours.",
      svg: crashHour
    },
    {
      title: "Hours of accidents",
      description:
        "The KDE plots the shows how many accidents happen spaced over the duration of 24 hours. We see three notable spikes. Fistly 7-9 o'clock which is when a large majority of the working populations will set of to leave their kids at school and/or drive to work. The next spike of the day is 17-19 o'clock which in turn is when people return from work. Lastly we have the time at 12 o'clock at night, which would clearly indicate the partying population starting to move around.",
      svg: kdeHoursOfAccidents
    },
    {
      title: "Distance from each accident to nearest school",
      description:
        "The distance from each accident to the nearest elementrary school was calculated and the plot below shows the kde distribution of the findings. It was found that a large majority happen close to the schools, supporting what we have found.",
      svg: kdeAccidentToSchool
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
