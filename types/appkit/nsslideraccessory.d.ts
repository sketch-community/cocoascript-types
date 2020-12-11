declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsslideraccessory
   */
  interface NSSliderAccessory extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsslideraccessory/2544656-behavior
    behavior(): cocoascript.NSSliderAccessoryBehavior;
    setBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslideraccessory/2544779-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    //
    alloc():cocoascript.NSSliderAccessory;
    //
    init():cocoascript.NSSliderAccessory;
  }
}

declare const NSSliderAccessory: cocoascript.NSSliderAccessory;
