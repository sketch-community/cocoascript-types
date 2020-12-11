declare namespace cocoascript {
  /**
   * Pronunciation hints for strings used in a spoken interface.
   * doc://com.apple.documentation/documentation/sirikit/inspeakable
   */
  interface INSpeakable extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092306-spokenphrase
    spokenPhrase(): cocoascript.NSString;
    setSpokenPhrase(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092309-pronunciationhint
    pronunciationHint(): cocoascript.NSString;
    setPronunciationHint(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2873318-vocabularyidentifier
    vocabularyIdentifier(): cocoascript.NSString;
    setVocabularyIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092308-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2873673-alternativespeakablematches
    alternativeSpeakableMatches(): cocoascript.INSpeakable;
    setAlternativeSpeakableMatches(): void;
  }
}
