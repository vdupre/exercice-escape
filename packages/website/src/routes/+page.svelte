<script lang="ts" >
	import { onMount } from 'svelte';
	import { subscribe } from '$lib/graphql';

	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import PixelPicker from '$lib/components/PixelPicker.svelte';
	import ColorPixelForm from '$lib/components/ColorPixelForm.svelte';
	
	export let data;

	$: displayed = JSON.stringify(data, null, 2);

	onMount(() =>
		subscribe(/* GraphQL */ 'subscription { hello }', (data) => {
			console.log('Received from the server:', data);
		})
	);

	const size = 10;

	let selectedColor: string;
	const handleSelectedColor = (selected: string) => {
		selectedColor = selected;
	};

	let selectedPixel: Pixel;
	const handleSelectedPixel = (selected: Pixel) => {
		selectedPixel = selected;
	};

</script>

<h1>r/ploce</h1>

<p>Received from the server: {displayed}</p>

<h2>Pick a color { selectedColor ? `- ${selectedColor}` : '' }</h2>
<ColorPicker colors={["red", "blue", "orange"]} onColorSelected={handleSelectedColor} {selectedColor} />

<h2>Choose a pixel { selectedPixel ? `- ${selectedPixel.x}:${selectedPixel.y}` : '' }</h2>
<PixelPicker {size} onPixelSelected={handleSelectedPixel} {selectedPixel} />

{#if selectedColor && selectedPixel}
	<h2>Submit choice</h2>
	<ColorPixelForm color={selectedColor} pixel={selectedPixel} />
{/if}