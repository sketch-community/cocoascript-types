declare namespace cocoascript {
  /**
   * A collection of motion effects that you want to apply to a view at the same time.
   * doc://com.apple.documentation/documentation/uikit/uimotioneffectgroup
   */
  interface UIMotionEffectGroup extends UIMotionEffect {
    // doc://com.apple.documentation/documentation/uikit/uimotioneffectgroup/1622374-motioneffects
    motionEffects(): cocoascript.UIMotionEffect;
    setMotionEffects(): void;
    //
    alloc():cocoascript.UIMotionEffectGroup;
    //
    init():cocoascript.UIMotionEffectGroup;
  }
}

declare const UIMotionEffectGroup: cocoascript.UIMotionEffectGroup;
