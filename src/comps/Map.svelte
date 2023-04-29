<script>
  import { onDestroy, setContext } from 'svelte';
  import { mapbox, key } from './mapbox.js';

  setContext(key, {
    getMap: () => map,
  });

  export let currentLocation

  let container;
  let map;

  function load() {
    map = new mapbox.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: currentLocation.locationXy,
      zoom: currentLocation.zoom,
    });
  }

  onDestroy(() => {
    if (map) map.remove();
  });

  $: if (map && currentLocation) map.flyTo({
    center: currentLocation.locationXy,
    zoom: currentLocation.zoom,
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

<div id="addresses" class="rounded" bind:this={container} style="height: 60vh">
    {#if map}
        <slot />
    {/if}
</div>

