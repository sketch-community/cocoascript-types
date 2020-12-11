declare namespace cocoascript {
  /**
   * A text field that converts text into visually distinct tokens.
   * doc://com.apple.documentation/documentation/appkit/nstokenfield
   */
  interface NSTokenField extends NSTextField {
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1534077-tokenstyle
    tokenStyle(): cocoascript.NSTokenStyle;
    setTokenStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1534230-tokenizingcharacterset
    tokenizingCharacterSet(): cocoascript.NSCharacterSet;
    setTokenizingCharacterSet(): void;
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1530131-defaulttokenizingcharacterset
    defaultTokenizingCharacterSet(): cocoascript.NSCharacterSet;
    setDefaultTokenizingCharacterSet(): void;
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1535823-completiondelay
    completionDelay(): cocoascript.NSTimeInterval;
    setCompletionDelay(): void;
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1529243-defaultcompletiondelay
    defaultCompletionDelay(): cocoascript.NSTimeInterval;
    setDefaultCompletionDelay(): void;
    // doc://com.apple.documentation/documentation/appkit/nstokenfield/1528157-delegate
    delegate(): cocoascript.NSTokenFieldDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.NSTokenField;
    //
    init():cocoascript.NSTokenField;
  }
}

declare const NSTokenField: cocoascript.NSTokenField;
