declare namespace cocoascript {
  /**
   * The properties you use to configure a swipe transition filter.
   * doc://com.apple.documentation/documentation/coreimage/ciswipetransition
   */
  interface CISwipeTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228775-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228776-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228777-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228778-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228779-width
    width(): number;
    setWidth(): void;
  }
}
