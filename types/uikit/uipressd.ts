declare namespace cocoascript {
/**
 * An object that represents the presence or movement of a button press on the screen for a particular event. 
 * doc://com.apple.documentation/documentation/uikit/uipress
 */
interface UIPress extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipress/1620364-force
  force(): cocoascript.CGFloat;
  setForce(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620376-gesturerecognizers
  gestureRecognizers(): cocoascript.UIGestureRecognizer;
  setGestureRecognizers(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620374-responder
  responder(): cocoascript.UIResponder;
  setResponder(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620366-window
  window(): cocoascript.UIWindow;
  setWindow(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/3526315-key
  key(): cocoascript.UIKey;
  setKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620370-type
  type(): cocoascript.UIPressType;
  setType(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620367-phase
  phase(): cocoascript.UIPressPhase;
  setPhase(): void;
  // doc://com.apple.documentation/documentation/uikit/uipress/1620360-timestamp
  timestamp(): cocoascript.NSTimeInterval;
  setTimestamp(): void;
  // 
  alloc():cocoascript.UIPress;
  // 
  init():cocoascript.UIPress;
}
}
declare const UIPress: cocoascript.UIPress;

