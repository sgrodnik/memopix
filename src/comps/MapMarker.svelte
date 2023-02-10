<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let box;

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(box.name);

	const marker = new mapbox.Marker()
		.setLngLat(box.location)
		.setPopup(popup)
		.addTo(map);
</script>