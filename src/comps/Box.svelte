<script>
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher()
  export let box
  const handleClick = () => {
    dispatch('setLocation', box.location)
  };
</script>

<svelte:head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
</svelte:head>

<div class="box" on:click={handleClick}>
  <div class="desc">
    <h2>{box.name}</h2>
    <p><i class="fa fa-map-marker" aria-hidden="true"></i>{box.address}</p>
    <p><i class="fa fa-clock-o"></i>{box.time}</p>
  </div>
  <img class="photo" src="http://placekitten.com/g/200/150" alt="Booth">
</div>

<style>
  .box i {
    margin-right: 5px;
    color: #777;
  }

  .box {
    cursor: pointer;
    background-color: #fef;
    border-radius: 10px;
    margin: 10px 10px;
    padding: 15px 20px;
    box-shadow: 0 5px 5px rgba(255, 255, 255, 1);
    display: flex;
  }

  .desc {
    max-width: 220px;
    margin: 0;
    padding: 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .photo {
    width: 200px;
    height: 150px;
    background: #ccc;
    margin-left: 20px;
    border-radius: 5px;
  }
</style>