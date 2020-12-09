declare namespace cocoascript {
/**
 * A discrete gesture recognizer that interprets rotation gestures involving two touches.
 * doc://com.apple.documentation/documentation/uikit/uirotationgesturerecognizer
 */
interface UIRotationGestureRecognizer extends UIGestureRecognizer {
  // doc://com.apple.documentation/documentation/uikit/uirotationgesturerecognizer/1624337-rotation
  rotation(): cocoascript.CGFloat;
  setRotation(): void;
  // doc://com.apple.documentation/documentation/uikit/uirotationgesturerecognizer/1624335-velocity
  velocity(): cocoascript.CGFloat;
  setVelocity(): void;
  // 
  alloc():cocoascript.UIRotationGestureRecognizer;
  // 
  init():cocoascript.UIRotationGestureRecognizer;
}
}
declare const UIRotationGestureRecognizer: cocoascript.UIRotationGestureRecognizer;

