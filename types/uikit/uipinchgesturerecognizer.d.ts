declare namespace cocoascript {
  /**
   * A discrete gesture recognizer that interprets pinching gestures involving two touches.
   * doc://com.apple.documentation/documentation/uikit/uipinchgesturerecognizer
   */
  interface UIPinchGestureRecognizer extends UIGestureRecognizer {
    // doc://com.apple.documentation/documentation/uikit/uipinchgesturerecognizer/1622235-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uipinchgesturerecognizer/1622233-velocity
    velocity(): cocoascript.CGFloat;
    setVelocity(): void;
    //
    alloc():cocoascript.UIPinchGestureRecognizer;
    //
    init():cocoascript.UIPinchGestureRecognizer;
  }
}

declare const UIPinchGestureRecognizer: cocoascript.UIPinchGestureRecognizer;
