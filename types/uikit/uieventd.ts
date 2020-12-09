declare namespace cocoascript {
/**
 * An object that describes a single user interaction with your app.   
 * doc://com.apple.documentation/documentation/uikit/uievent
 */
interface UIEvent extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uievent/1613836-alltouches
  allTouches(): cocoascript.UITouch;
  setAllTouches(): void;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613812-touchesforview
  touchesForView(view: cocoascript.UIView):cocoascript.UITouch;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613794-touchesforwindow
  touchesForWindow(window: cocoascript.UIWindow):cocoascript.UITouch;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613808-coalescedtouchesfortouch
  coalescedTouchesForTouch(touch: cocoascript.UITouch):cocoascript.UITouch;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613814-predictedtouchesfortouch
  predictedTouchesForTouch(touch: cocoascript.UITouch):cocoascript.UITouch;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613790-timestamp
  timestamp(): cocoascript.NSTimeInterval;
  setTimestamp(): void;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613840-type
  type(): cocoascript.UIEventType;
  setType(): void;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613824-subtype
  subtype(): cocoascript.UIEventSubtype;
  setSubtype(): void;
  // doc://com.apple.documentation/documentation/uikit/uievent/1613832-touchesforgesturerecognizer
  touchesForGestureRecognizer(gesture: cocoascript.UIGestureRecognizer):cocoascript.UITouch;
  // doc://com.apple.documentation/documentation/uikit/uievent/3538960-buttonmask
  buttonMask(): cocoascript.UIEventButtonMask;
  setButtonMask(): void;
  // doc://com.apple.documentation/documentation/uikit/uievent/3538961-modifierflags
  modifierFlags(): cocoascript.UIKeyModifierFlags;
  setModifierFlags(): void;
  // 
  alloc():cocoascript.UIEvent;
  // 
  init():cocoascript.UIEvent;
}
}
declare const UIEvent: cocoascript.UIEvent;

