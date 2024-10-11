<script lang="ts" >
    export let size: number;
	export let onPixelSelected: (pixelSelected: Pixel) => void;
	export let selectedPixel: Pixel;

	const handlePixelSelected = (x: number, y: number) => () => {
		onPixelSelected({ x, y });
	};
</script>

<div class="grid">
	{#each Array.from({ length: size }, (_, i) => i) as i}
		<div class="row">
			{#each Array.from({ length: size }, (_, j) => j) as j}
				<div 
					class="cell" class:selectedPixel={selectedPixel && i === selectedPixel.x && j === selectedPixel.y} 
					on:click={handlePixelSelected(i, j)} 
				></div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.cell {
		width: 20px;
		height: 20px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
	}

	.selectedPixel {
		outline: 2px solid black;
	}
</style>