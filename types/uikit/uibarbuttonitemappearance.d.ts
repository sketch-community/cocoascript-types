declare namespace cocoascript {
  /**
   * An object for customizing the appearance of bar button items.
   * doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance
   */
  interface UIBarButtonItemAppearance extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198018-initwithstyle
    initWithStyle(style: cocoascript.UIBarButtonItemStyle):cocoascript.UIBarButtonItemAppearance;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198015-init
    init():cocoascript.UIBarButtonItemAppearance;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198017-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBarButtonItemAppearance;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198011-configurewithdefaultforstyle
    configureWithDefaultForStyle(style: cocoascript.UIBarButtonItemStyle):void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198019-normal
    normal(): cocoascript.UIBarButtonItemStateAppearance;
    setNormal(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198012-disabled
    disabled(): cocoascript.UIBarButtonItemStateAppearance;
    setDisabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198014-highlighted
    highlighted(): cocoascript.UIBarButtonItemStateAppearance;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3198013-focused
    focused(): cocoascript.UIBarButtonItemStateAppearance;
    setFocused(): void;
    // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemappearance/3368152-copy
    copy():cocoascript.UIBarButtonItemAppearance;
    //
    alloc():cocoascript.UIBarButtonItemAppearance;
    //
    init():cocoascript.UIBarButtonItemAppearance;
  }
}

declare const UIBarButtonItemAppearance: cocoascript.UIBarButtonItemAppearance;
