declare namespace cocoascript {
/**
 * A continuous gesture recognizer that tracks a pinch gesture that magnifies content. 
 * doc://com.apple.documentation/documentation/appkit/nsmagnificationgesturerecognizer
 */
interface NSMagnificationGestureRecognizer extends NSGestureRecognizer {
  // doc://com.apple.documentation/documentation/appkit/nsmagnificationgesturerecognizer/1510428-magnification
  magnification(): cocoascript.CGFloat;
  setMagnification(): void;
  // 
  alloc():cocoascript.NSMagnificationGestureRecognizer;
  // 
  init():cocoascript.NSMagnificationGestureRecognizer;
}
}
declare const NSMagnificationGestureRecognizer: cocoascript.NSMagnificationGestureRecognizer;

