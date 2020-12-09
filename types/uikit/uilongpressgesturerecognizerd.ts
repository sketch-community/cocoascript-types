declare namespace cocoascript {
/**
 * A discrete gesture recognizer that interprets long-press gestures.  
 * doc://com.apple.documentation/documentation/uikit/uilongpressgesturerecognizer
 */
interface UILongPressGestureRecognizer extends UIGestureRecognizer {
  // doc://com.apple.documentation/documentation/uikit/uilongpressgesturerecognizer/1616423-minimumpressduration
  minimumPressDuration(): cocoascript.NSTimeInterval;
  setMinimumPressDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uilongpressgesturerecognizer/1616425-numberoftouchesrequired
  numberOfTouchesRequired(): cocoascript.NSUInteger;
  setNumberOfTouchesRequired(): void;
  // doc://com.apple.documentation/documentation/uikit/uilongpressgesturerecognizer/1616424-numberoftapsrequired
  numberOfTapsRequired(): cocoascript.NSUInteger;
  setNumberOfTapsRequired(): void;
  // doc://com.apple.documentation/documentation/uikit/uilongpressgesturerecognizer/1616427-allowablemovement
  allowableMovement(): cocoascript.CGFloat;
  setAllowableMovement(): void;
  // 
  alloc():cocoascript.UILongPressGestureRecognizer;
  // 
  init():cocoascript.UILongPressGestureRecognizer;
}
}
declare const UILongPressGestureRecognizer: cocoascript.UILongPressGestureRecognizer;

