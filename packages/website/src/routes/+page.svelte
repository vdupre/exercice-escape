<script lang="ts" >
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import Grid from '$lib/components/Grid.svelte';
import { subscribe } from '$lib/graphql';
	import { onMount } from 'svelte';

	export let data;

	$: displayed = JSON.stringify(data, null, 2);

	onMount(() =>
		subscribe(/* GraphQL */ 'subscription { hello }', (data) => {
			console.log('Received from the server:', data);
		})
	);

	let selectedColor: string;
	const handleSelectedColor = (selected: string) => {
		selectedColor = selected;
	};

	

</script>

<h1>r/ploce</h1>

<p>Received from the server: {displayed}</p>

<h2>Pick a color { selectedColor ? `- ${selectedColor}` : '' }</h2>
<ColorPicker onColorSelected={handleSelectedColor} colors={["red", "blue", "orange"]} {selectedColor} />

<h2>Choose a pixel</h2>
<Grid size={20} />
