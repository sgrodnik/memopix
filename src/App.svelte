<script>
	import Navbar from './comps/Navbar.svelte'
  import Header from "./comps/Header.svelte"
  import Map from "./comps/Map.svelte";
  import Boxes from "./comps/Boxes.svelte";
  import Contacts from "./comps/Contacts.svelte";
  import MapMarker from "./comps/MapMarker.svelte";

  let boxes = [
    {name: 'Budka 1', address: 'Улица пушкина, дом Колотушкина, 42', location: [30.337314, 59.954586], time: ['10:00 - 22:00']},
    {name: 'Budka 2', address: 'Улица пушкина, дом Колотушкина, 43', location: [30.336104, 59.954321], time: ['7:00 - 18:00']},
    {name: 'Budka 3', address: 'Улица пушкина, дом Колотушкина, 44', location: [30.335556, 59.954937], time: ['8:00 - 20:00']},
    {name: 'Budka 4', address: 'Улица пушкина, дом Колотушкина, 45', location: [30.336816, 59.955224], time: ['00:00 - 24:00']},
  ]

  let location = [30.337637, 59.954248]
  let zoom = [10]
  const setLocation = (event) => {
    location = event.detail
    zoom = 15
  };

</script>

<Navbar />
<Header />
<Map {location} {zoom}>
  {#each boxes as box}
    <MapMarker {box} />
  {/each}
</Map>
<Boxes {boxes}  on:setLocation="{setLocation}"/>
<Contacts />
