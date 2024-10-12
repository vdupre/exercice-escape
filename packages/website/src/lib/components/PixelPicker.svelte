<script lang="ts">
	import type { PixelGrid } from '$lib/types/grid';

	export let pixelGrid: PixelGrid;

	export let onPixelSelected: (pixelSelected: Pixel) => void;
	export let selectedPixel: Pixel;

	const handlePixelClicked = (x: number, y: number) => () => {
		onPixelSelected({ x, y });
	};

	const handleKeyDown = (x: number, y: number) => (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			onPixelSelected({ x, y });
		}
	};

	$: isSelectedPixel = (x: number, y: number) => {
		return selectedPixel && x === selectedPixel.x && y === selectedPixel.y;
	};
</script>

<div class="grid">
	{#each Array.from({ length: pixelGrid.size }, (_, x) => x) as i}
		<div class="row">
			{#each Array.from({ length: pixelGrid.size }, (_, y) => y) as j}
				<div
					role="button"
					tabindex={i * pixelGrid.size + j + 1}
					class="cell"
					class:selectedPixel={isSelectedPixel(i, j)}
					style="background-color: {pixelGrid.cells[i][j]};"
					on:click={handlePixelClicked(i, j)}
					on:keydown={handleKeyDown(i, j)}
				>
					{isSelectedPixel(i, j) ? 'x' : ''}
				</div>
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
		text-align: center;
		transition: background-color 0.5s ease;
	}

	.selectedPixel {
		background-color: #c0c0c0;
	}
</style>
