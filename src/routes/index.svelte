<script context="module">
  import requests from "../data/request.js";
  export async function preload() {
    try {
      const usStats = await requests.usStats();
      return { usStats };
    } catch (error) {
      console.log(`Errado: ${error}`);
    }
  }
</script>

<script>
  import CovidChart from "../components/CovidChart.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let usStats;
</script>

<svelte:head>
  <title>Covid 19 - US Tracker</title>
</svelte:head>

<section class="section header">
  <div class="container">
    <h1 class="title is-h1 has-text-dark">Covid 19 - US</h1>
  </div>
</section>

<CovidStat {...usStats}/>
<CovidChart />
<TableContainer />
