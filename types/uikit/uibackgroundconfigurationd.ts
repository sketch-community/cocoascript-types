declare namespace cocoascript {
  /**
   * A configuration that describes a specific background appearance.
   * doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration
   */
  interface UIBackgroundConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600322-customview
    customView(): cocoascript.UIView;
    setCustomView(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600321-cornerradius
    cornerRadius(): cocoascript.CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600319-backgroundinsets
    backgroundInsets(): cocoascript.NSDirectionalEdgeInsets;
    setBackgroundInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600323-edgesaddinglayoutmarginstobackgr
    edgesAddingLayoutMarginsToBackgroundInsets(): cocoascript.NSDirectionalRectEdge;
    setEdgesAddingLayoutMarginsToBackgroundInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600317-backgroundcolor
    backgroundColor(): cocoascript.UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600318-backgroundcolortransformer
    backgroundColorTransformer(): cocoascript.UIConfigurationColorTransformer;
    setBackgroundColorTransformer(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600330-resolvedbackgroundcolorfortintco
    resolvedBackgroundColorForTintColor(tintColor: cocoascript.UIColor):cocoascript.UIColor;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600337-visualeffect
    visualEffect(): cocoascript.UIVisualEffect;
    setVisualEffect(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600332-strokecolor
    strokeColor(): cocoascript.UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600333-strokecolortransformer
    strokeColorTransformer(): cocoascript.UIConfigurationColorTransformer;
    setStrokeColorTransformer(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600331-resolvedstrokecolorfortintcolor
    resolvedStrokeColorForTintColor(tintColor: cocoascript.UIColor):cocoascript.UIColor;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600335-strokewidth
    strokeWidth(): cocoascript.CGFloat;
    setStrokeWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600334-strokeoutset
    strokeOutset(): cocoascript.CGFloat;
    setStrokeOutset(): void;
    // doc://com.apple.documentation/documentation/uikit/uibackgroundconfiguration/3600336-updatedconfigurationforstate
    updatedConfigurationForState(state: cocoascript.UIConfigurationState):cocoascript.UIBackgroundConfiguration;
    //
    alloc():cocoascript.UIBackgroundConfiguration;
    //
    init():cocoascript.UIBackgroundConfiguration;
  }
}

declare const UIBackgroundConfiguration: cocoascript.UIBackgroundConfiguration;
