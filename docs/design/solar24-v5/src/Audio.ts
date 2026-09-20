import { useEffect, useRef, useState } from 'react';
import type { View } from './state';
import { lifeProfiles, soundColours } from './life-data';
import { terms } from './data';
export function useSound(
  enabled: boolean,
  paused: boolean,
  effect: string,
  view: View,
  termId: string,
) {
  const [supported, setSupported] = useState(true);
  const current = useRef({ enabled, paused, effect, view, termId });
  current.current = { enabled, paused, effect, view, termId };
  const sync = useRef<() => void>(() => {});
  useEffect(() => {
    if (!enabled) return;
    let context: AudioContext;
    try {
      context = new AudioContext();
    } catch {
      setSupported(false);
      return;
    }
    const source = context.createBufferSource(),
      buffer = context.createBuffer(1, context.sampleRate * 4, context.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      last = (last + Math.random() * 0.035 - 0.0175) * 0.97;
      data[i] = last;
    }
    source.buffer = buffer;
    source.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    const volume = context.createGain();
    const breath = context.createGain();
    breath.gain.value = 0.8;
    const movement = context.createOscillator();
    const depth = context.createGain();
    depth.gain.value = 0.16;
    movement.connect(depth).connect(breath.gain);
    movement.start();
    volume.gain.value = 0;
    source.connect(filter).connect(breath).connect(volume).connect(context.destination);
    source.start();
    const update = () => {
      const s = current.current,
        quiet = s.paused || document.hidden;
      const [cutoff, rhythm] = soundColours[lifeProfiles[s.termId].gesture];
      const variation = 1 + (terms.findIndex((term) => term.id === s.termId) % 6) * 0.035;
      movement.frequency.setTargetAtTime(
        s.view === 'life' ? rhythm * variation : 0.12,
        context.currentTime,
        0.8,
      );
      filter.frequency.setTargetAtTime(
        s.view === 'cosmos'
          ? 160
          : s.view === 'life'
            ? cutoff * variation
            : s.effect === 'rain'
              ? 1700
              : 550,
        context.currentTime,
        0.8,
      );
      volume.gain.setTargetAtTime(
        quiet ? 0 : s.view === 'cosmos' ? 0.035 : 0.14,
        context.currentTime,
        0.7,
      );
      if (quiet) void context.suspend().catch(() => {});
      else void context.resume().catch(() => setSupported(false));
    };
    sync.current = update;
    update();
    document.addEventListener('visibilitychange', update);
    return () => {
      sync.current = () => {};
      document.removeEventListener('visibilitychange', update);
      source.stop();
      source.disconnect();
      filter.disconnect();
      movement.stop();
      movement.disconnect();
      depth.disconnect();
      breath.disconnect();
      volume.disconnect();
      void context.close();
    };
  }, [enabled]);
  useEffect(() => sync.current(), [paused, effect, view, termId]);
  return supported;
}
