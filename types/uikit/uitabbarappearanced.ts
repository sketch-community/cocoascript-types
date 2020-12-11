declare namespace cocoascript {
  /**
   * An object for customizing the appearance of a tab bar.
   * doc://com.apple.documentation/documentation/uikit/uitabbarappearance
   */
  interface UITabBarAppearance extends UIBarAppearance {
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198055-stackedlayoutappearance
    stackedLayoutAppearance(): cocoascript.UITabBarItemAppearance;
    setStackedLayoutAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198052-stackeditempositioning
    stackedItemPositioning(): cocoascript.UITabBarItemPositioning;
    setStackedItemPositioning(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198053-stackeditemspacing
    stackedItemSpacing(): cocoascript.CGFloat;
    setStackedItemSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198054-stackeditemwidth
    stackedItemWidth(): cocoascript.CGFloat;
    setStackedItemWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198049-inlinelayoutappearance
    inlineLayoutAppearance(): cocoascript.UITabBarItemAppearance;
    setInlineLayoutAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198048-compactinlinelayoutappearance
    compactInlineLayoutAppearance(): cocoascript.UITabBarItemAppearance;
    setCompactInlineLayoutAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198051-selectionindicatortintcolor
    selectionIndicatorTintColor(): cocoascript.UIColor;
    setSelectionIndicatorTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbarappearance/3198050-selectionindicatorimage
    selectionIndicatorImage(): cocoascript.UIImage;
    setSelectionIndicatorImage(): void;
    //
    alloc():cocoascript.UITabBarAppearance;
    //
    init():cocoascript.UITabBarAppearance;
  }
}

declare const UITabBarAppearance: cocoascript.UITabBarAppearance;
