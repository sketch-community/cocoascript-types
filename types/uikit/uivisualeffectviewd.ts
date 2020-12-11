declare namespace cocoascript {
  /**
   * An object that implements some complex visual effects.
   * doc://com.apple.documentation/documentation/uikit/uivisualeffectview
   */
  interface UIVisualEffectView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uivisualeffectview/1615051-initwitheffect
    initWithEffect(effect: cocoascript.UIVisualEffect):cocoascript.UIVisualEffectView;
    // doc://com.apple.documentation/documentation/uikit/uivisualeffectview/1615054-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIVisualEffectView;
    // doc://com.apple.documentation/documentation/uikit/uivisualeffectview/1615068-contentview
    contentView(): cocoascript.UIView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/uikit/uivisualeffectview/1615072-effect
    effect(): cocoascript.UIVisualEffect;
    setEffect(): void;
    //
    alloc():cocoascript.UIVisualEffectView;
    //
    init():cocoascript.UIVisualEffectView;
  }
}

declare const UIVisualEffectView: cocoascript.UIVisualEffectView;
