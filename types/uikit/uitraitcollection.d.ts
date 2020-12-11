declare namespace cocoascript {
  /**
   * The iOS interface environment for your app, including traits such as horizontal and vertical size class, display scale, and user interface idiom.
   * doc://com.apple.documentation/documentation/uikit/uitraitcollection
   */
  interface UITraitCollection extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623517-init
    init():cocoascript.UITraitCollection;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623504-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITraitCollection;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3238080-currenttraitcollection
    currentTraitCollection(): cocoascript.UITraitCollection;
    setCurrentTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623508-horizontalsizeclass
    horizontalSizeClass(): cocoascript.UIUserInterfaceSizeClass;
    setHorizontalSizeClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623513-verticalsizeclass
    verticalSizeClass(): cocoascript.UIUserInterfaceSizeClass;
    setVerticalSizeClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623519-displayscale
    displayScale(): cocoascript.CGFloat;
    setDisplayScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1771749-displaygamut
    displayGamut(): cocoascript.UIDisplayGamut;
    setDisplayGamut(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1651063-userinterfacestyle
    userInterfaceStyle(): cocoascript.UIUserInterfaceStyle;
    setUserInterfaceStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623521-userinterfaceidiom
    userInterfaceIdiom(): cocoascript.UIUserInterfaceIdiom;
    setUserInterfaceIdiom(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3238085-userinterfacelevel
    userInterfaceLevel(): cocoascript.UIUserInterfaceLevel;
    setUserInterfaceLevel(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1648355-layoutdirection
    layoutDirection(): cocoascript.UITraitEnvironmentLayoutDirection;
    setLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3238079-accessibilitycontrast
    accessibilityContrast(): cocoascript.UIAccessibilityContrast;
    setAccessibilityContrast(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3255094-legibilityweight
    legibilityWeight(): cocoascript.UILegibilityWeight;
    setLegibilityWeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3618952-activeappearance
    activeAppearance(): cocoascript.UIUserInterfaceActiveAppearance;
    setActiveAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623515-forcetouchcapability
    forceTouchCapability(): cocoascript.UIForceTouchCapability;
    setForceTouchCapability(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1771746-preferredcontentsizecategory
    preferredContentSizeCategory(): cocoascript.UIContentSizeCategory;
    setPreferredContentSizeCategory(): void;
    // doc://com.apple.documentation/documentation/uikit/2877504-uicontentsizecategorycomparetoca
    UIContentSizeCategoryCompareToCategory(): cocoascript.UIContentSizeCategory;
    setUIContentSizeCategoryCompareToCategory(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/1623506-containstraitsincollection
    containsTraitsInCollection(trait: cocoascript.UITraitCollection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3238081-hasdifferentcolorappearancecompa
    hasDifferentColorAppearanceComparedToTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3295976-imageconfiguration
    imageConfiguration(): cocoascript.UIImageConfiguration;
    setImageConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitcollection/3238082-performascurrenttraitcollection
    performAsCurrentTraitCollection(actions: void):void;
    //
    alloc():cocoascript.UITraitCollection;
    //
    init():cocoascript.UITraitCollection;
  }
}

declare const UITraitCollection: cocoascript.UITraitCollection;
