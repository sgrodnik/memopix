<script>
  import { onDestroy, setContext } from 'svelte';
  import { mapbox, key } from './mapbox.js';

  setContext(key, {
    getMap: () => map,
  });

  export let location = [30.337637, 59.954248]
  export let zoom = 13

  let container;
  let map;

  function load() {
    map = new mapbox.Map({
      container,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: location,
      zoom,
    });
  }

  onDestroy(() => {
    if (map) map.remove();
  });

  $: if (map) map.flyTo({
    center: location,
    zoom,
    essential: true
  });
</script>

<svelte:head>
  <link
      rel="stylesheet"
      href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
      on:load={load}
  />
</svelte:head>

<div id="addresses" bind:this={container}>
    {#if map}
        <slot />
    {/if}
</div>


<style>
    div {
      max-width: 1100px;
      height: 300px;
      margin: 10px auto;
    }
</style>