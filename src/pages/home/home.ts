import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(navCtrl: NavController, public speechRecognition: SpeechRecognition, plt: Platform) {
      console.log('############: Loaded Home')
      
      plt.ready().then((ready) => {
	      speechRecognition.isRecognitionAvailable()
  	      .then((available: boolean) => console.log('######## SpeechRecognition status:', available))
          .catch(e => console.log('######### Error loading SpeechRecognition:', e))
      })
  }

  asr() {
    console.log('############: Clicked ASR')
    let options = {
      language : 'es_ES'
      //Number matches,
      //String prompt,      // Android only
      //Boolean showPopup,  // Android only
      //Boolean showPartial 
    }
        
    this.speechRecognition.startListening(options).subscribe(
      (matches: Array<string>) => console.log('#######', matches),
      (onerror) => console.log('######## Error during ASR:', onerror)
    )
  }
}
