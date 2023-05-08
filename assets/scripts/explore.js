// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voice=document.querySelector('#voice-select'); 
  const input_text=document.querySelector('#text-to-speak');
  const talk_button=document.querySelector('button');
  const face=document.querySelector('img');
  
  let allvoices=[];

  //loaded all availabel voices with speechSynthesizer
  window.speechSynthesis.onvoiceschanged=function(){
    allvoices=window.speechSynthesis.getVoices();
    for(let i=0; i < allvoices.length;i++){
      const option=document.createElement('option');
      option.textContent=allvoices[i].name+' (' + allvoices[i].lang+')';
 
  
      option.setAttribute('data-name',allvoices[i].name);
      option.setAttribute('data-lang',allvoices[i].lang);

      voice.appendChild(option);
    }

  };


  //click button and text will be spoken out loud with the select voice
  talk_button.addEventListener('click',function(){
    const speak_text=new SpeechSynthesisUtterance(input_text.value);

    //get the selected voice
    const selected_voice=voice.selectedOptions[0].getAttribute('data-name');
    const voice_lang=voice.selectedOptions[0].getAttribute('data-lang');
    for(let i=0; i < allvoices.length; i++){
      if(allvoices[i].name === selected_voice){
        speak_text.voice=allvoices[i];
        speak_text.lang=voice_lang;

      }
    }
    window.speechSynthesis.speak(speak_text);
    face.src='assets/images/smiling-open.png';
    
    speak_text.onend=function(){
      face.src='assets/images/smiling.png';
    }


  });

    
  

}

