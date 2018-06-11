# ionic

I have edited 3 main sections:

* [app/app.module.ts](src/app/app.module.ts) (for adding SpeechRecognition cordoba-based native extension to ionic)
* [pages/home.ts](src/pages/home.ts) (when home page is loaded, it initializes SpeechRecoginition module)
* [pages/home.html](src/pages/home.html) (when user clicks 'ASR' in the app, it calls asr method defined in home.ts)
