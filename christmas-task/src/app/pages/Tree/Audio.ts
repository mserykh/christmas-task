import { render } from "../../utils/Render";
import { TemplateFunction } from "../../utils/Types";

export const letTheMusicPlay = (): void => {
  const audioControlTemplate: TemplateFunction = () => `<div class="audio-control control"></div>`;

  const container = document.querySelector<HTMLElement>(".settings__snow-audio");

  const audio = new Audio() ;
  audio.src = "./assets/audio/greendolphinstreet.mp3";
  let isPlaying = false;

  if (container !== null) {
    render(container, audioControlTemplate());
  }

  const audioToggle = (e: Event) => {
    if (isPlaying) {
      audio.currentTime = 0;
      audio.pause();
      isPlaying = false;
      toggleIcon(e);
    }
    else {
      audio.play();
      isPlaying = true;
      audio.loop = true;
      audio.volume = 0.5;
      toggleIcon(e);
    }
  }

  const toggleIcon = (e: Event) => {

    if (!isPlaying) {
      (e.target as HTMLElement).classList.remove("control--active");
    }
    else {
      (e.target as HTMLElement).classList.add("control--active");
    }
  }

  const onAudioClick = (e: Event) => {
    audioToggle(e);
  };

  const audioControl = document.querySelector(".audio-control");
  if (audioControl !== null) {
    audioControl.addEventListener("click", (e: Event) => onAudioClick(e));
  }
};
