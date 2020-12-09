declare namespace cocoascript {
/**
 * A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
 * doc://com.apple.documentation/documentation/appkit/nspressgesturerecognizer
 */
interface NSPressGestureRecognizer extends NSGestureRecognizer {
  // doc://com.apple.documentation/documentation/appkit/nspressgesturerecognizer/1527495-allowablemovement
  allowableMovement(): cocoascript.CGFloat;
  setAllowableMovement(): void;
  // doc://com.apple.documentation/documentation/appkit/nspressgesturerecognizer/1534468-buttonmask
  buttonMask(): cocoascript.NSUInteger;
  setButtonMask(): void;
  // doc://com.apple.documentation/documentation/appkit/nspressgesturerecognizer/1531726-minimumpressduration
  minimumPressDuration(): cocoascript.NSTimeInterval;
  setMinimumPressDuration(): void;
  // doc://com.apple.documentation/documentation/appkit/nspressgesturerecognizer/2544818-numberoftouchesrequired
  numberOfTouchesRequired(): cocoascript.NSInteger;
  setNumberOfTouchesRequired(): void;
  // 
  alloc():cocoascript.NSPressGestureRecognizer;
  // 
  init():cocoascript.NSPressGestureRecognizer;
}
}
declare const NSPressGestureRecognizer: cocoascript.NSPressGestureRecognizer;

