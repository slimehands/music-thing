<script lang="ts">
    import { onMount } from 'svelte';
    var handleClick: svelte.JSX.MouseEventHandler<HTMLButtonElement>|null|undefined;

    onMount(async()=>{
    const {play, synth} = (await import ('$lib/music'))
     handleClick = ()=> {
		play(synth)
        
	}
    });
</script>
<p>the button makes a noise</p>
<button on:click={handleClick}> click me</button>