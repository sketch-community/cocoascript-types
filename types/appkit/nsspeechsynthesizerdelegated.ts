declare namespace cocoascript {
/**
 * A set of optional methods implemented by delegates of 
 * doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate
 */
interface NSSpeechSynthesizerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate/1448480-speechsynthesizer
  speechSynthesizer_willSpeakWord_ofString(sender: cocoascript.NSSpeechSynthesizer, characterRange: cocoascript.NSRange, string: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate/1448442-speechsynthesizer
  speechSynthesizer_willSpeakPhoneme(sender: cocoascript.NSSpeechSynthesizer, phonemeOpcode: cocoascript.short):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate/1448407-speechsynthesizer
  speechSynthesizer_didEncounterErrorAtIndex_ofString_message(sender: cocoascript.NSSpeechSynthesizer, characterIndex: cocoascript.NSUInteger, string: cocoascript.NSString, message: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate/1448540-speechsynthesizer
  speechSynthesizer_didEncounterSyncMessage(sender: cocoascript.NSSpeechSynthesizer, message: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspeechsynthesizerdelegate/1448538-speechsynthesizer
  speechSynthesizer_didFinishSpeaking(sender: cocoascript.NSSpeechSynthesizer, finishedSpeaking: cocoascript.BOOL):void;
}
}

