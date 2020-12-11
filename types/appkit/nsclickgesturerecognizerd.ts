declare namespace cocoascript {
  /**
   * A discrete gesture recognizer that tracks a specified number of mouse clicks.
   * doc://com.apple.documentation/documentation/appkit/nsclickgesturerecognizer
   */
  interface NSClickGestureRecognizer extends NSGestureRecognizer {
    // doc://com.apple.documentation/documentation/appkit/nsclickgesturerecognizer/1530136-buttonmask
    buttonMask(): cocoascript.NSUInteger;
    setButtonMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclickgesturerecognizer/1534485-numberofclicksrequired
    numberOfClicksRequired(): cocoascript.NSInteger;
    setNumberOfClicksRequired(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclickgesturerecognizer/2544764-numberoftouchesrequired
    numberOfTouchesRequired(): cocoascript.NSInteger;
    setNumberOfTouchesRequired(): void;
    //
    alloc():cocoascript.NSClickGestureRecognizer;
    //
    init():cocoascript.NSClickGestureRecognizer;
  }
}

declare const NSClickGestureRecognizer: cocoascript.NSClickGestureRecognizer;
