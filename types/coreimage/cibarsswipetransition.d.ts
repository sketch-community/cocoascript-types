declare namespace cocoascript {
  /**
   * The properties you use to configure a bars swipe transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition
   */
  interface CIBarsSwipeTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228070-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228071-baroffset
    barOffset(): number;
    setBarOffset(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228072-width
    width(): number;
    setWidth(): void;
  }
}
