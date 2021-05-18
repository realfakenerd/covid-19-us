<script>
  export let cases;
  export let deaths;
  export let recovered;
  export let ventilation;
  export let hospitalized;
  export let icu;
  export let tested;
  export let updated;
</script>

<section class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Case: {cases}</h2>
      <h2 class="is-3 column">Deaths: {deaths}</h2>
      <h2 class="is-3 column">Recovered: {recovered}</h2>
      <h2 class="is-3 column">Updated: {updated}</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {tested}</h2>
      <h2 class="is-3 column">Hospitalized: {hospitalized}</h2>
      <h2 class="is-3 column">Total ICU: {icu}</h2>
      <h2 class="is-3 column">Total Ventilator: {ventilation}</h2>
    </div>
  </div>
</section>

<style>
  .columns {
    border: solid hsl(0, 0%, 7%);
    border-radius: 0.2em;
  }
  h2 {
    color: hsl(0, 0%, 29%);
  }
</style>
