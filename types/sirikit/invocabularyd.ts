declare namespace cocoascript {
/**
 * An object for registering user-specific vocabulary that Siri requests might include.
 * doc://com.apple.documentation/documentation/sirikit/invocabulary
 */
interface INVocabulary extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/invocabulary/2873636-setvocabulary
  setVocabulary_ofType(vocabulary: cocoascript.INSpeakable, type: cocoascript.INVocabularyStringType):void;
  // doc://com.apple.documentation/documentation/sirikit/invocabulary/1638998-setvocabularystrings
  setVocabularyStrings_ofType(vocabulary: cocoascript.NSString, type: cocoascript.INVocabularyStringType):void;
  // doc://com.apple.documentation/documentation/sirikit/invocabulary/1638705-removeallvocabularystrings
  removeAllVocabularyStrings():void;
  // 
  alloc():cocoascript.INVocabulary;
  // 
  init():cocoascript.INVocabulary;
}
}
declare const INVocabulary: cocoascript.INVocabulary;

