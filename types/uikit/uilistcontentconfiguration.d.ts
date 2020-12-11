declare namespace cocoascript {
  /**
   * A content configuration for a list-based content view.
   * doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration
   */
  interface UIListContentConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600533-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600546-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600527-attributedtext
    attributedText(): cocoascript.NSAttributedString;
    setAttributedText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600540-secondarytext
    secondaryText(): cocoascript.NSString;
    setSecondaryText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600539-secondaryattributedtext
    secondaryAttributedText(): cocoascript.NSAttributedString;
    setSecondaryAttributedText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600534-imageproperties
    imageProperties(): cocoascript.UIListContentImageProperties;
    setImageProperties(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600547-textproperties
    textProperties(): cocoascript.UIListContentTextProperties;
    setTextProperties(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600541-secondarytextproperties
    secondaryTextProperties(): cocoascript.UIListContentTextProperties;
    setSecondaryTextProperties(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600528-axespreservingsuperviewlayoutmar
    axesPreservingSuperviewLayoutMargins(): cocoascript.UIAxis;
    setAxesPreservingSuperviewLayoutMargins(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600530-directionallayoutmargins
    directionalLayoutMargins(): cocoascript.NSDirectionalEdgeInsets;
    setDirectionalLayoutMargins(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600538-preferssidebysidetextandsecondar
    prefersSideBySideTextAndSecondaryText(): cocoascript.BOOL;
    setPrefersSideBySideTextAndSecondaryText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600535-imagetotextpadding
    imageToTextPadding(): cocoascript.CGFloat;
    setImageToTextPadding(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600548-texttosecondarytexthorizontalpad
    textToSecondaryTextHorizontalPadding(): cocoascript.CGFloat;
    setTextToSecondaryTextHorizontalPadding(): void;
    // doc://com.apple.documentation/documentation/uikit/uilistcontentconfiguration/3600549-texttosecondarytextverticalpaddi
    textToSecondaryTextVerticalPadding(): cocoascript.CGFloat;
    setTextToSecondaryTextVerticalPadding(): void;
    //
    alloc():cocoascript.UIListContentConfiguration;
    //
    init():cocoascript.UIListContentConfiguration;
  }
}

declare const UIListContentConfiguration: cocoascript.UIListContentConfiguration;
