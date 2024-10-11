<script>
    export let size;
</script>

<div class="grid">
	{#each Array.from({ length: size }, (_, i) => i) as i}
		<div class="row">
			{#each Array.from({ length: size }, (_, j) => j) as j}
				<div class="cell"></div>
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
</style>