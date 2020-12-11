declare namespace cocoascript {
  /**
   * A utility object for obtaining custom fonts that scale to support Dynamic Type.
   * doc://com.apple.documentation/documentation/uikit/uifontmetrics
   */
  interface UIFontMetrics extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877391-initfortextstyle
    initForTextStyle(textStyle: cocoascript.UIFontTextStyle):cocoascript.UIFontMetrics;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877382-defaultmetrics
    defaultMetrics(): cocoascript.UIFontMetrics;
    setDefaultMetrics(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877385-scaledfontforfont
    scaledFontForFont(font: cocoascript.UIFont):cocoascript.UIFont;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877389-scaledfontforfont
    scaledFontForFont_compatibleWithTraitCollection(font: cocoascript.UIFont, traitCollection: cocoascript.UITraitCollection):cocoascript.UIFont;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877383-scaledfontforfont
    scaledFontForFont_maximumPointSize(font: cocoascript.UIFont, maximumPointSize: cocoascript.CGFloat):cocoascript.UIFont;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877390-scaledfontforfont
    scaledFontForFont_maximumPointSize_compatibleWithTraitCollection(font: cocoascript.UIFont, maximumPointSize: cocoascript.CGFloat, traitCollection: cocoascript.UITraitCollection):cocoascript.UIFont;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877387-scaledvalueforvalue
    scaledValueForValue(value: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uifontmetrics/2877388-scaledvalueforvalue
    scaledValueForValue_compatibleWithTraitCollection(value: cocoascript.CGFloat, traitCollection: cocoascript.UITraitCollection):cocoascript.CGFloat;
    //
    alloc():cocoascript.UIFontMetrics;
    //
    init():cocoascript.UIFontMetrics;
  }
}

declare const UIFontMetrics: cocoascript.UIFontMetrics;
