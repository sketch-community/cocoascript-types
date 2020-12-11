declare namespace cocoascript {
  /**
   * An object that represents the textual interpretation of a spoken phrase that the user dictates.
   * doc://com.apple.documentation/documentation/uikit/uidictationphrase
   */
  interface UIDictationPhrase extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidictationphrase/1614510-alternativeinterpretations
    alternativeInterpretations(): cocoascript.NSString;
    setAlternativeInterpretations(): void;
    // doc://com.apple.documentation/documentation/uikit/uidictationphrase/1614456-text
    text(): cocoascript.NSString;
    setText(): void;
    //
    alloc():cocoascript.UIDictationPhrase;
    //
    init():cocoascript.UIDictationPhrase;
  }
}

declare const UIDictationPhrase: cocoascript.UIDictationPhrase;
