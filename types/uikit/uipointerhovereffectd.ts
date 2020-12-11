declare namespace cocoascript {
  /**
   * An effect where visual changes are applied to the view and the pointer retains its default shape.
   * doc://com.apple.documentation/documentation/uikit/uipointerhovereffect
   */
  interface UIPointerHoverEffect extends UIPointerEffect {
    // doc://com.apple.documentation/documentation/uikit/uipointerhovereffect/3539015-preferredtintmode
    preferredTintMode(): cocoascript.UIPointerEffectTintMode;
    setPreferredTintMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uipointerhovereffect/3539016-prefersscaledcontent
    prefersScaledContent(): cocoascript.BOOL;
    setPrefersScaledContent(): void;
    // doc://com.apple.documentation/documentation/uikit/uipointerhovereffect/3539017-prefersshadow
    prefersShadow(): cocoascript.BOOL;
    setPrefersShadow(): void;
    //
    alloc():cocoascript.UIPointerHoverEffect;
    //
    init():cocoascript.UIPointerHoverEffect;
  }
}

declare const UIPointerHoverEffect: cocoascript.UIPointerHoverEffect;
