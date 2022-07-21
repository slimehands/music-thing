import * as Tone from 'tone';

export const boring = new Tone.Synth().toDestination();
export const noiseSynth = new Tone.NoiseSynth().toDestination();
export const sawSynth = new Tone.MonoSynth({
	oscillator: {
		type: "sawtooth"
	},
	envelope: {
		attack: 0.1
	}
}).toDestination();
//play a middle 'C' for the duration of an 8th note
export function play(player: Tone.Synth<Tone.SynthOptions>|Tone.MonoSynth|Tone.NoiseSynth, frequency: Tone.Unit.Frequency){
    player.triggerAttackRelease(frequency, "8n");
};

