declare namespace cocoascript {
/**
 * A discrete gesture recognizer that interprets swiping gestures in one or more directions.
 * doc://com.apple.documentation/documentation/uikit/uiswipegesturerecognizer
 */
interface UISwipeGestureRecognizer extends UIGestureRecognizer {
  // doc://com.apple.documentation/documentation/uikit/uiswipegesturerecognizer/1619178-direction
  direction(): cocoascript.UISwipeGestureRecognizerDirection;
  setDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uiswipegesturerecognizer/1619182-numberoftouchesrequired
  numberOfTouchesRequired(): cocoascript.NSUInteger;
  setNumberOfTouchesRequired(): void;
  // 
  alloc():cocoascript.UISwipeGestureRecognizer;
  // 
  init():cocoascript.UISwipeGestureRecognizer;
}
}
declare const UISwipeGestureRecognizer: cocoascript.UISwipeGestureRecognizer;

