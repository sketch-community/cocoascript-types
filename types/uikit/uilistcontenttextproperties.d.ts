declare namespace cocoascript {
  /**
   * Properties that affect the list content configuration’s text.
   * doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties
   */
  interface UIListContentTextProperties extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600572-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600571-color
    color(): cocoascript.UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3606378-colortransformer
    colorTransformer(): cocoascript.UIConfigurationColorTransformer;
    setColorTransformer(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3606379-resolvedcolor
    resolvedColor():cocoascript.UIColor;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600569-alignment
    alignment(): cocoascript.UIListContentTextAlignment;
    setAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600573-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600575-numberoflines
    numberOfLines(): cocoascript.NSInteger;
    setNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600568-adjustsfontsizetofitwidth
    adjustsFontSizeToFitWidth(): cocoascript.BOOL;
    setAdjustsFontSizeToFitWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600574-minimumscalefactor
    minimumScaleFactor(): cocoascript.CGFloat;
    setMinimumScaleFactor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600570-allowsdefaulttighteningfortrunca
    allowsDefaultTighteningForTruncation(): cocoascript.BOOL;
    setAllowsDefaultTighteningForTruncation(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3600567-adjustsfontforcontentsizecategor
    adjustsFontForContentSizeCategory(): cocoascript.BOOL;
    setAdjustsFontForContentSizeCategory(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontenttextproperties/3650227-transform
    transform(): cocoascript.UIListContentTextTransform;
    setTransform(): void;
    //
    alloc():cocoascript.UIListContentTextProperties;
    //
    init():cocoascript.UIListContentTextProperties;
  }
}

declare const UIListContentTextProperties: cocoascript.UIListContentTextProperties;
