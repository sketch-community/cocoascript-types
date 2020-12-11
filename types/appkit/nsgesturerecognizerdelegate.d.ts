declare namespace cocoascript {
  /**
   * A set of methods for fine-tuning a gesture recognizer’s behavior.
   * doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate
   */
  interface NSGestureRecognizerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/1529420-gesturerecognizer
    gestureRecognizer_shouldAttemptToRecognizeWithEvent(gestureRecognizer: cocoascript.NSGestureRecognizer, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/1535463-gesturerecognizershouldbegin
    gestureRecognizerShouldBegin(gestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/1529773-gesturerecognizer
    gestureRecognizer_shouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: cocoascript.NSGestureRecognizer, otherGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/1527318-gesturerecognizer
    gestureRecognizer_shouldRequireFailureOfGestureRecognizer(gestureRecognizer: cocoascript.NSGestureRecognizer, otherGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/1535422-gesturerecognizer
    gestureRecognizer_shouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: cocoascript.NSGestureRecognizer, otherGestureRecognizer: cocoascript.NSGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsgesturerecognizerdelegate/2544787-gesturerecognizer
    gestureRecognizer_shouldReceiveTouch(gestureRecognizer: cocoascript.NSGestureRecognizer, touch: cocoascript.NSTouch):cocoascript.BOOL;
  }
}
