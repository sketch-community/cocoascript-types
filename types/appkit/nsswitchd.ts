declare namespace cocoascript {
/**
 * A control that offers a binary choice.
 * doc://com.apple.documentation/documentation/appkit/nsswitch
 */
interface NSSwitch extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsswitch/3172699-state
  state(): cocoascript.NSControlStateValue;
  setState(): void;
  // 
  alloc():cocoascript.NSSwitch;
  // 
  init():cocoascript.NSSwitch;
}
}
declare const NSSwitch: cocoascript.NSSwitch;

