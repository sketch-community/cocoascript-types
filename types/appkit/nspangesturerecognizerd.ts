declare namespace cocoascript {
  /**
   * A continuous gesture recognizer for panning gestures.
   * doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer
   */
  interface NSPanGestureRecognizer extends NSGestureRecognizer {
    // doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer/1515529-buttonmask
    buttonMask(): cocoascript.NSUInteger;
    setButtonMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer/2544781-numberoftouchesrequired
    numberOfTouchesRequired(): cocoascript.NSInteger;
    setNumberOfTouchesRequired(): void;
    // doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer/1515531-translationinview
    translationInView(view: cocoascript.NSView):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer/1515533-settranslation
    setTranslation_inView(translation: cocoascript.NSPoint, view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nspangesturerecognizer/1515532-velocityinview
    velocityInView(view: cocoascript.NSView):cocoascript.NSPoint;
    //
    alloc():cocoascript.NSPanGestureRecognizer;
    //
    init():cocoascript.NSPanGestureRecognizer;
  }
}

declare const NSPanGestureRecognizer: cocoascript.NSPanGestureRecognizer;
