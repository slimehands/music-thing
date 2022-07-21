<script lang="ts">
    import { onMount } from 'svelte';
    import type * as Tone from 'tone';
    var handleClick: svelte.JSX.MouseEventHandler<HTMLButtonElement>|null|undefined;
    let frequency :Tone.Unit.Frequency ="A4";
    var notes = ["C2", "E4", "G4", "Bb4"]
    
    var played = 0
    var synth: Tone.Synth<Tone.SynthOptions>|Tone.MonoSynth|Tone.NoiseSynth;
    onMount(async()=>{
    let {play, boring, sawSynth, noiseSynth} = (await import ('$lib/music'))
    synth = noiseSynth
     handleClick = ()=> {
        synth = sawSynth
        frequency = notes[ played % notes.length ]
        played ++
		play(synth ,frequency)
	}
    });
</script>
<p>the button makes a noise</p>
<button on:click={handleClick}> click me</button> 
the frequency is {frequency}

