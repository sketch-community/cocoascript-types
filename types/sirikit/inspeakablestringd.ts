declare namespace cocoascript {
  /**
   * A custom phrase to be resolved by an Intents extension.
   * doc://com.apple.documentation/documentation/sirikit/inspeakablestring
   */
  interface INSpeakableString extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2721324-initwithspokenphrase
    initWithSpokenPhrase(spokenPhrase: cocoascript.NSString):cocoascript.INSpeakableString;
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2873438-initwithvocabularyidentifier
    initWithVocabularyIdentifier_spokenPhrase_pronunciationHint(vocabularyIdentifier: cocoascript.NSString, spokenPhrase: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INSpeakableString;
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2118338-initwithidentifier
    initWithIdentifier_spokenPhrase_pronunciationHint(identifier: cocoascript.NSString, spokenPhrase: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INSpeakableString;
    //
    alloc():cocoascript.INSpeakableString;
    //
    init():cocoascript.INSpeakableString;
  }
}

declare const INSpeakableString: cocoascript.INSpeakableString;
