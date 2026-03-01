//SoundManager.js
import Rooster from "../assets/sounds/rooster.wav";
import Flap from "../assets/sounds/flap.wav";
import Bite from "../assets/sounds/bite.wav";

const Sounds = {
  rooster: new Audio(Rooster),
  flap: new Audio(Flap),
  bite: new Audio(Bite),
};

export function playSound(Name) {
  const Sound = Sounds[Name];
  if (!Sound) return;

  Sound.currentTime = 0;
  Sound.play().catch(() => {});
}
