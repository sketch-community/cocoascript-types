declare namespace cocoascript {
  /**
   * A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
   * doc://com.apple.documentation/documentation/appkit/nsrotationgesturerecognizer
   */
  interface NSRotationGestureRecognizer extends NSGestureRecognizer {
    // doc://com.apple.documentation/documentation/appkit/nsrotationgesturerecognizer/1527087-rotation
    rotation(): cocoascript.CGFloat;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrotationgesturerecognizer/1535523-rotationindegrees
    rotationInDegrees(): cocoascript.CGFloat;
    setRotationInDegrees(): void;
    //
    alloc():cocoascript.NSRotationGestureRecognizer;
    //
    init():cocoascript.NSRotationGestureRecognizer;
  }
}

declare const NSRotationGestureRecognizer: cocoascript.NSRotationGestureRecognizer;
