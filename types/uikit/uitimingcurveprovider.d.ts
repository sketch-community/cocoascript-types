declare namespace cocoascript {
  /**
   * An interface for providing the timing information needed to perform animations.
   * doc://com.apple.documentation/documentation/uikit/uitimingcurveprovider
   */
  interface UITimingCurveProvider extends NSCoding {
    // doc://com.apple.documentation/documentation/uikit/uitimingcurveprovider/1648030-timingcurvetype
    timingCurveType(): cocoascript.UITimingCurveType;
    setTimingCurveType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitimingcurveprovider/1648036-cubictimingparameters
    cubicTimingParameters(): cocoascript.UICubicTimingParameters;
    setCubicTimingParameters(): void;
    // doc://com.apple.documentation/documentation/uikit/uitimingcurveprovider/1648031-springtimingparameters
    springTimingParameters(): cocoascript.UISpringTimingParameters;
    setSpringTimingParameters(): void;
  }
}
