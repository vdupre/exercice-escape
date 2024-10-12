<script lang="ts">
	export let colors: string[];
	export let onColorSelected: (color: string) => void;
	export let selectedColor: string;

	const handleColorSelected = (color: string) => () => {
		onColorSelected(color);
	};
</script>

<ul class="buttonWrapper">
	{#each colors as color}
		<li>
			<button
				class:selectedColor={selectedColor === color}
				on:click={handleColorSelected(color)}
				style="background-color: {color};"
			>
				{color}
			</button>
		</li>
	{/each}
</ul>

<style>
	.buttonWrapper {
		list-style: none;
		padding: 0;
		display: flex;
	}

	.buttonWrapper button {
		padding: 10px;
		margin-right: 10px;
		color: white;
		border: 1px solid gray;
	}

	.selectedColor {
		font-weight: bold;
	}
</style>
