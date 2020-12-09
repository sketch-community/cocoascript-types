declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nsslideraccessorybehavior
 */
interface NSSliderAccessoryBehavior extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsslideraccessorybehavior/2544780-automaticbehavior
  automaticBehavior(): cocoascript.NSSliderAccessoryBehavior;
  setAutomaticBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nsslideraccessorybehavior/2544659-valueresetbehavior
  valueResetBehavior(): cocoascript.NSSliderAccessoryBehavior;
  setValueResetBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nsslideraccessorybehavior/2544771-valuestepbehavior
  valueStepBehavior(): cocoascript.NSSliderAccessoryBehavior;
  setValueStepBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nsslideraccessorybehavior/2544759-handleaction
  handleAction(sender: cocoascript.NSSliderAccessory):void;
  // 
  alloc():cocoascript.NSSliderAccessoryBehavior;
  // 
  init():cocoascript.NSSliderAccessoryBehavior;
}
}
declare const NSSliderAccessoryBehavior: cocoascript.NSSliderAccessoryBehavior;

