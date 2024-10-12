<script lang="ts">
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import PixelPicker from '$lib/components/PixelPicker.svelte';
	import ColorPixelForm from '$lib/components/ColorPixelForm.svelte';
	import { onMount } from 'svelte';
	import { onGridChanged } from '$lib/graphql/subscriptions.js';

	export let data;
	$: pixelGrid = data.pixelGrid;

	let selectedColor: string;
	const handleSelectedColor = (selected: string) => {
		selectedColor = selected;
	};

	let selectedPixel: Pixel;
	const handleSelectedPixel = (selected: Pixel) => {
		selectedPixel = selected;
	};

	onMount(() =>
		onGridChanged((newCells) => {
			pixelGrid = {
				size: pixelGrid.size,
				colors: pixelGrid.colors,
				cells: newCells
			};
		})
	);
</script>

<h1>r/ploce</h1>

<h2>1. Choose a pixel {selectedPixel ? `- ${selectedPixel.x}:${selectedPixel.y}` : ''}</h2>
<PixelPicker {pixelGrid} onPixelSelected={handleSelectedPixel} {selectedPixel} />

{#if selectedPixel}
	<h2>2. Pick a color {selectedColor ? `- ${selectedColor}` : ''}</h2>
	<ColorPicker colors={pixelGrid.colors} onColorSelected={handleSelectedColor} {selectedColor} />
{/if}

{#if selectedPixel && selectedColor}
	<h2>3. Submit choice</h2>
	<ColorPixelForm color={selectedColor} pixel={selectedPixel} />
{/if}
