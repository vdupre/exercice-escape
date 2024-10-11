<script lang="ts">
    export let color: string;
    export let pixel: Pixel;


</script>

<form method="POST" action="?/create" >
    <p>Reminder: you selected the color "{color}" and the pixel "({pixel.x},{pixel.y})"</p>
    
    <input type="hidden" name="x" value={pixel.x} />
    <input type="hidden" name="y" value={pixel.y} />
    <input type="hidden" name="color" value={color} />

    <button type="submit">Submit</button>
</form>