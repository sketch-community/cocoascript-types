declare namespace cocoascript {
  /**
   * The range of motion for attached objects.
   * doc://com.apple.documentation/documentation/uikit/uifloatrange
   */
  interface UIFloatRange {
    // doc://com.apple.documentation/documentation/uikit/1621310-uifloatrangemake
    UIFloatRangeMake(): cocoascript.CGFloat;
    setUIFloatRangeMake(): void;
    // doc://com.apple.documentation/documentation/uikit/uifloatrange/1621305-maximum
    maximum(): cocoascript.CGFloat;
    setMaximum(): void;
    // doc://com.apple.documentation/documentation/uikit/uifloatrange/1621300-minimum
    minimum(): cocoascript.CGFloat;
    setMinimum(): void;
  }
}
