<script>
  import modelData from "../../Stored Models/ml_results.json";
</script>

<style>
  table {
    @apply table-auto border-collapse mx-auto;
  }
  th {
    @apply px-4 py-2;
  }
  td {
    @apply border px-4 py-2;
  }

  tr:nth-child(2n) {
    @apply bg-gray-100;
  }
  div {
    @apply rounded-t-lg;
  }
  p {
    @apply max-w-2xl p-4 mx-auto text-base text-justify my-4;
  }
  div p {
    @apply text-center;
  }
  section {
    @apply grid grid-cols-1 gap-4;
  }

  @screen md {
    section {
      @apply grid-cols-2;
    }
  }
  h4 {
    @apply text-center;
  }
</style>

<section>
  {#each Object.entries(modelData) as [day, value]}
    <div>
      <h4>Prediction for {day}</h4>
      {#if !value}
        <p>There aren't going to be any crashes</p>
      {:else}
        <table>
          <thead>
            <tr>
              <th>Hour of the Day</th>
              <th>Number of Crashes</th>
            </tr>
          </thead>
          <tbody>
            {#each Object.entries(value.NumCrashes) as [hour, number]}
              <tr>
                <td>{hour}</td>
                <td>{number}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}

    </div>
  {/each}

</section>
