var audio = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  );
  
  audio.oncanplaythrough = function () {
    audio.play();
  };
  
  audio.loop = true;
  
  audio.onended = function () {
    audio.play();
  };
  