<script lang="ts">
	export let color: string;
	export let pixel: Pixel;
</script>

<form method="POST" action="?/create">
	<p>
		Reminder: you have selected the color <strong>{color}</strong> and the pixel
		<strong>({pixel.x},{pixel.y})</strong>
	</p>

	<input type="hidden" name="x" value={pixel.x} />
	<input type="hidden" name="y" value={pixel.y} />
	<input type="hidden" name="color" value={color} />

	<button type="submit">Submit</button>
</form>
