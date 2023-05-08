// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selecthornsound=document.getElementById('horn-select');
  const volumecontrol=document.getElementById('volume-controls');
  const sound = document.querySelector('audio');
  const picture=document.querySelector('img');
  const playsound=document.querySelector('button');
  const volume_icon=volumecontrol.querySelector('img');
  const jsConfetti = new JSConfetti();

 
  //show the correspond picture and play the correspond sound
  selecthornsound.addEventListener('change',function(event){
    switch(event.target.value){
      case 'air-horn':
        sound.src='assets/audio/air-horn.mp3';
        picture.src='assets/images/air-horn.svg';
        break;
      case 'car-horn':
        sound.src='assets/audio/car-horn.mp3';
        picture.src='assets/images/car-horn.svg';
        break;
      case 'party-horn':
        sound.src='assets/audio/party-horn.mp3';
        picture.src='assets/images/party-horn.svg';
        break
      default:
        break;
    }
  });

  //sound will be played with the 'play sound' button is clicked
  playsound.addEventListener('click',function(){
    sound.play();
    if(selecthornsound.value === 'party-horn'){
      jsConfetti.addConfetti({ emojis: ['🌈', '✨'],});

      
    }
  });

  //adjust volume
  volumecontrol.addEventListener('input',function(event){

    if(event.target.value ==0){
      volume_icon.src='assets/icons/volume-level-0.svg';
      sound.volume=0;
      sound.muted=true;
    }
    else if(event.target.value<33 && event.target.value >1){
      volume_icon.src='assets/icons/volume-level-1.svg';
      sound.volume=event.target.value/100;
      sound.muted=false;

    }
    else if(event.target.value<67 && event.target.value>33){
      volume_icon.src='assets/icons/volume-level-2.svg';
      sound.volume=event.target.value/100;
      sound.muted=false;

    }
    else{
      volume_icon.src='assets/icons/volume-level-3.svg';
      sound.volume=event.target.value/100;
      sound.muted=false;

    }


  });

}
