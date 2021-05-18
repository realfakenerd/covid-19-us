<script context="module">
  import stateNames from "../data/stateNames.js";
  export async function preload(page) {
    const state = page.params["state"];
    if (stateNames.find((s) => s.abbreviation === state) === undefined) {
      this.error(404, 'State not found')
      return;
    }

    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidChart from "../components/CovidChart.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let state;
</script>

<section class="section header">
  <div class="container">
    <h1 class="title is-h1">Covid 19 - {state}</h1>
  </div>
</section>
<CovidStat />
<CovidChart />
<TableContainer />
