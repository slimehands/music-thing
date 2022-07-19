import {Synth, type SynthOptions} from 'tone';

//create a synth and connect it to the main output (your speakers)
export const synth = new Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
export function play(player: Synth<SynthOptions>){
    player.triggerAttackRelease("C4", "8n");
}