declare namespace cocoascript {
  /**
   * An object that maps the horizontal or vertical tilt of a device to values that you specify so that UIKit can apply those values to your views.
   * doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect
   */
  interface UIInterpolatingMotionEffect extends UIMotionEffect {
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622372-initwithkeypath
    initWithKeyPath_type(keyPath: cocoascript.NSString, type: cocoascript.UIInterpolatingMotionEffectType):cocoascript.UIInterpolatingMotionEffect;
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622368-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIInterpolatingMotionEffect;
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622378-keypath
    keyPath(): cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622377-type
    type(): cocoascript.UIInterpolatingMotionEffectType;
    setType(): void;
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622365-minimumrelativevalue
    minimumRelativeValue(): cocoascript.id;
    setMinimumRelativeValue(): void;
    // doc://com.apple.documentation/documentation/uikit/uiinterpolatingmotioneffect/1622376-maximumrelativevalue
    maximumRelativeValue(): cocoascript.id;
    setMaximumRelativeValue(): void;
    //
    alloc():cocoascript.UIInterpolatingMotionEffect;
    //
    init():cocoascript.UIInterpolatingMotionEffect;
  }
}

declare const UIInterpolatingMotionEffect: cocoascript.UIInterpolatingMotionEffect;
