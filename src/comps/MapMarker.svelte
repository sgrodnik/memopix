<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let box;

	const popup = new mapbox.Popup({ offset: 25, closeButton: false })
    .setHTML(`${box.name}<br>${box.address}<br>${box.time}`);

  const xy = [box.locationYx[1], box.locationYx[0]]
  const marker = new mapbox.Marker()
		.setLngLat(xy)
		.setPopup(popup)
		.addTo(map);
</script>