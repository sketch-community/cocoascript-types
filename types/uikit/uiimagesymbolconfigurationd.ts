declare namespace cocoascript {
  /**
   * An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
   * doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration
   */
  interface UIImageSymbolConfiguration extends UIImageConfiguration {
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294253-unspecifiedconfiguration
    unspecifiedConfiguration(): cocoascript.UIImageSymbolConfiguration;
    setUnspecifiedConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294248-configurationwithoutpointsizeand
    configurationWithoutPointSizeAndWeight():cocoascript.UIImageSymbolConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294249-configurationwithoutscale
    configurationWithoutScale():cocoascript.UIImageSymbolConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294250-configurationwithouttextstyle
    configurationWithoutTextStyle():cocoascript.UIImageSymbolConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294251-configurationwithoutweight
    configurationWithoutWeight():cocoascript.UIImageSymbolConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimagesymbolconfiguration/3294252-isequaltoconfiguration
    isEqualToConfiguration(otherConfiguration: cocoascript.UIImageSymbolConfiguration):cocoascript.BOOL;
    //
    alloc():cocoascript.UIImageSymbolConfiguration;
    //
    init():cocoascript.UIImageSymbolConfiguration;
  }
}

declare const UIImageSymbolConfiguration: cocoascript.UIImageSymbolConfiguration;
