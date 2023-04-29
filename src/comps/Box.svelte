<script>
  export let box
  export let currentLocation
  const handleClick = () => {
    currentLocation.locationXy = [box.locationYx[1], box.locationYx[0]]
    currentLocation.zoom = 15
  };
</script>

<svelte:head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
</svelte:head>

<div class="card mb-3" on:click={handleClick}>
  <div class="card-header">{box.name}</div>
  <div class="card-body">
    <h5 class="card-title">{box.address}</h5>
    <p class="card-text">{box.time}</p>
  </div>
</div>
