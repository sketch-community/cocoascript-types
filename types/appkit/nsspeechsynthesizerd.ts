declare namespace cocoascript {
/**
 * The Cocoa interface to speech synthesis in macOS. 
 * doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer
 */
interface NSSpeechSynthesizer extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448381-initwithvoice
  initWithVoice(voice: cocoascript.NSSpeechSynthesizerVoiceName):cocoascript.NSSpeechSynthesizer;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448460-delegate
  delegate(): cocoascript.NSSpeechSynthesizerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448488-usesfeedbackwindow
  usesFeedbackWindow(): cocoascript.BOOL;
  setUsesFeedbackWindow(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448494-voice
  voice():cocoascript.NSSpeechSynthesizerVoiceName;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448384-setvoice
  setVoice(voice: cocoascript.NSSpeechSynthesizerVoiceName):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448450-rate
  rate(): number;
  setRate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448501-volume
  volume(): number;
  setVolume(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448532-addspeechdictionary
  addSpeechDictionary(speechDictionary: cocoascript.NSSpeechSynthesizer):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448436-objectforproperty
  objectForProperty_error(property: cocoascript.NSSpeechPropertyKey, outError: cocoascript._Nullable):cocoascript.NSSpeechSynthesizer;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448425-setobject
  setObject_forProperty_error(object: cocoascript.NSSpeechSynthesizer, property: cocoascript.NSSpeechPropertyKey, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448470-availablevoices
  availableVoices(): cocoascript.NSSpeechSynthesizerVoiceName;
  setAvailableVoices(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448513-defaultvoice
  defaultVoice(): cocoascript.NSSpeechSynthesizerVoiceName;
  setDefaultVoice(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/2870216-anyapplicationspeaking
  anyApplicationSpeaking(): cocoascript.BOOL;
  setAnyApplicationSpeaking(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448511-speaking
  speaking(): cocoascript.BOOL;
  setSpeaking(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448378-startspeakingstring
  startSpeakingString(string: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448394-startspeakingstring
  startSpeakingString_toURL(string: cocoascript.NSString, url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448492-pausespeakingatboundary
  pauseSpeakingAtBoundary(boundary: cocoascript.NSSpeechBoundary):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448505-continuespeaking
  continueSpeaking():void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448392-stopspeaking
  stopSpeaking():void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448374-stopspeakingatboundary
  stopSpeakingAtBoundary(boundary: cocoascript.NSSpeechBoundary):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizer/1448500-phonemesfromtext
  phonemesFromText(text: cocoascript.NSString):cocoascript.NSString;
  // 
  alloc():cocoascript.NSSpeechSynthesizer;
  // 
  init():cocoascript.NSSpeechSynthesizer;
}
}
declare const NSSpeechSynthesizer: cocoascript.NSSpeechSynthesizer;

