//SoundManager.js
import Rooster from "../assets/sounds/rooster.wav";
import Flap from "../assets/sounds/flap.wav";

const Sounds = {
  rooster: new Audio(Rooster),
  flap: new Audio(Flap),
};

export function playSound(Name) {
  const Sound = Sounds[Name];
  if (!Sound) return;

  Sound.currentTime = 0;
  Sound.play().catch(() => {});
}
