declare namespace cocoascript {
  /**
   * A set of methods implemented by the delegate of a gesture recognizer to fine-tune an app’s gesture-recognition behavior.
   * doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate
   */
  interface UIGestureRecognizerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624213-gesturerecognizershouldbegin
    gestureRecognizerShouldBegin(gestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624214-gesturerecognizer
    gestureRecognizer_shouldReceiveTouch(gestureRecognizer: cocoascript.UIGestureRecognizer, touch: cocoascript.UITouch):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624216-gesturerecognizer
    gestureRecognizer_shouldReceivePress(gestureRecognizer: cocoascript.UIGestureRecognizer, press: cocoascript.UIPress):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/3538976-gesturerecognizer
    gestureRecognizer_shouldReceiveEvent(gestureRecognizer: cocoascript.UIGestureRecognizer, event: cocoascript.UIEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624208-gesturerecognizer
    gestureRecognizer_shouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: cocoascript.UIGestureRecognizer, otherGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624229-gesturerecognizer
    gestureRecognizer_shouldRequireFailureOfGestureRecognizer(gestureRecognizer: cocoascript.UIGestureRecognizer, otherGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uigesturerecognizerdelegate/1624222-gesturerecognizer
    gestureRecognizer_shouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: cocoascript.UIGestureRecognizer, otherGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  }
}
