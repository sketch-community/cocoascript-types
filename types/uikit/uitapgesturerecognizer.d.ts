declare namespace cocoascript {
  /**
   * A discrete gesture recognizer that interprets single or multiple taps.
   * doc://com.apple.documentation/documentation/uikit/uitapgesturerecognizer
   */
  interface UITapGestureRecognizer extends UIGestureRecognizer {
    // doc://com.apple.documentation/documentation/uikit/uitapgesturerecognizer/3539032-buttonmaskrequired
    buttonMaskRequired(): cocoascript.UIEventButtonMask;
    setButtonMaskRequired(): void;
    // doc://com.apple.documentation/documentation/uikit/uitapgesturerecognizer/1623581-numberoftapsrequired
    numberOfTapsRequired(): cocoascript.NSUInteger;
    setNumberOfTapsRequired(): void;
    // doc://com.apple.documentation/documentation/uikit/uitapgesturerecognizer/1623580-numberoftouchesrequired
    numberOfTouchesRequired(): cocoascript.NSUInteger;
    setNumberOfTouchesRequired(): void;
    //
    alloc():cocoascript.UITapGestureRecognizer;
    //
    init():cocoascript.UITapGestureRecognizer;
  }
}

declare const UITapGestureRecognizer: cocoascript.UITapGestureRecognizer;
