declare namespace cocoascript {
/**
 * The base class for concrete gesture recognizers.
 * doc://com.apple.documentation/documentation/uikit/uigesturerecognizer
 */
interface UIGestureRecognizer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624211-initwithtarget
  initWithTarget_action(target: cocoascript.UIGestureRecognizer, action: cocoascript.SEL):cocoascript.UIGestureRecognizer;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624207-delegate
  delegate(): cocoascript.UIGestureRecognizerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624230-addtarget
  addTarget_action(target: cocoascript.UIGestureRecognizer, action: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624226-removetarget
  removeTarget_action(target: cocoascript.UIGestureRecognizer, action: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624219-locationinview
  locationInView(view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624201-locationoftouch
  locationOfTouch_inView(touchIndex: cocoascript.NSUInteger, view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624200-numberoftouches
  numberOfTouches(): cocoascript.NSUInteger;
  setNumberOfTouches(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619998-state
  state(): cocoascript.UIGestureRecognizerState;
  setState(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624212-view
  view(): cocoascript.UIView;
  setView(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624220-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/3538974-buttonmask
  buttonMask(): cocoascript.UIEventButtonMask;
  setButtonMask(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/3538975-modifierflags
  modifierFlags(): cocoascript.UIKeyModifierFlags;
  setModifierFlags(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624218-cancelstouchesinview
  cancelsTouchesInView(): cocoascript.BOOL;
  setCancelsTouchesInView(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624234-delaystouchesbegan
  delaysTouchesBegan(): cocoascript.BOOL;
  setDelaysTouchesBegan(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624209-delaystouchesended
  delaysTouchesEnded(): cocoascript.BOOL;
  setDelaysTouchesEnded(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624203-requiregesturerecognizertofail
  requireGestureRecognizerToFail(otherGestureRecognizer: cocoascript.UIGestureRecognizer):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624231-allowedpresstypes
  allowedPressTypes(): cocoascript.NSNumber;
  setAllowedPressTypes(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1624223-allowedtouchtypes
  allowedTouchTypes(): cocoascript.NSNumber;
  setAllowedTouchTypes(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1649116-requiresexclusivetouchtype
  requiresExclusiveTouchType(): cocoascript.BOOL;
  setRequiresExclusiveTouchType(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620009-touchesbegan
  touchesBegan_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619996-touchesmoved
  touchesMoved_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620005-touchesended
  touchesEnded_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620002-touchescancelled
  touchesCancelled_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619997-touchesestimatedpropertiesupdate
  touchesEstimatedPropertiesUpdated(touches: cocoascript.UITouch):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620004-reset
  reset():void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620010-ignoretouch
  ignoreTouch_forEvent(touch: cocoascript.UITouch, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620003-canbepreventedbygesturerecognize
  canBePreventedByGestureRecognizer(preventingGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620008-canpreventgesturerecognizer
  canPreventGestureRecognizer(preventedGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620006-shouldrequirefailureofgesturerec
  shouldRequireFailureOfGestureRecognizer(otherGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619994-shouldberequiredtofailbygesturer
  shouldBeRequiredToFailByGestureRecognizer(otherGestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620007-ignorepress
  ignorePress_forEvent(button: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619995-pressesbegan
  pressesBegan_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620001-presseschanged
  pressesChanged_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1620000-pressesended
  pressesEnded_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/1619999-pressescancelled
  pressesCancelled_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/2890966-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/3182937-init
  init():cocoascript.UIGestureRecognizer;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/3043559-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIGestureRecognizer;
  // doc://com.apple.documentation/documentation/uikit/uigesturerecognizer/3538977-shouldreceiveevent
  shouldReceiveEvent(event: cocoascript.UIEvent):cocoascript.BOOL;
  // 
  alloc():cocoascript.UIGestureRecognizer;
  // 
  init():cocoascript.UIGestureRecognizer;
}
}
declare const UIGestureRecognizer: cocoascript.UIGestureRecognizer;

