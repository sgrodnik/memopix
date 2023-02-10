<script>
  import Box from "./Box.svelte";
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher()
  export let boxes
  const setLocation = (event) => {
    dispatch('setLocation', event.detail)
  };
</script>

<section class="boxes">
  <div class="container">
    {#each boxes as box}
      <Box {box}  on:setLocation="{setLocation}"/>
    {/each}
  </div>
</section>

<style>
  .boxes .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
</style>