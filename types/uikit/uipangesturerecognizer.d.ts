declare namespace cocoascript {
  /**
   * A discrete gesture recognizer that interprets panning gestures.
   * doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer
   */
  interface UIPanGestureRecognizer extends UIGestureRecognizer {
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/1621208-maximumnumberoftouches
    maximumNumberOfTouches(): cocoascript.NSUInteger;
    setMaximumNumberOfTouches(): void;
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/1621210-minimumnumberoftouches
    minimumNumberOfTouches(): cocoascript.NSUInteger;
    setMinimumNumberOfTouches(): void;
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/1621207-translationinview
    translationInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/1621206-settranslation
    setTranslation_inView(translation: cocoascript.CGPoint, view: cocoascript.UIView):void;
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/1621209-velocityinview
    velocityInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uipangesturerecognizer/3538978-allowedscrolltypesmask
    allowedScrollTypesMask(): cocoascript.UIScrollTypeMask;
    setAllowedScrollTypesMask(): void;
    //
    alloc():cocoascript.UIPanGestureRecognizer;
    //
    init():cocoascript.UIPanGestureRecognizer;
  }
}

declare const UIPanGestureRecognizer: cocoascript.UIPanGestureRecognizer;
