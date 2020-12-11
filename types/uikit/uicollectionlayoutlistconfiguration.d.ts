declare namespace cocoascript {
  /**
   * A configuration for creating a list layout.
   * doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration
   */
  interface UICollectionLayoutListConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3600412-initwithappearance
    initWithAppearance(appearance: cocoascript.UICollectionLayoutListAppearance):cocoascript.UICollectionLayoutListConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3600408-appearance
    appearance(): cocoascript.UICollectionLayoutListAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3600409-backgroundcolor
    backgroundColor(): cocoascript.UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3601202-showsseparators
    showsSeparators(): cocoascript.BOOL;
    setShowsSeparators(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3600411-headermode
    headerMode(): cocoascript.UICollectionLayoutListHeaderMode;
    setHeaderMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3600410-footermode
    footerMode(): cocoascript.UICollectionLayoutListFooterMode;
    setFooterMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3650427-leadingswipeactionsconfiguration
    leadingSwipeActionsConfigurationProvider(): cocoascript.UICollectionLayoutListSwipeActionsConfigurationProvider;
    setLeadingSwipeActionsConfigurationProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionlayoutlistconfiguration/3650428-trailingswipeactionsconfiguratio
    trailingSwipeActionsConfigurationProvider(): cocoascript.UICollectionLayoutListSwipeActionsConfigurationProvider;
    setTrailingSwipeActionsConfigurationProvider(): void;
    //
    alloc():cocoascript.UICollectionLayoutListConfiguration;
    //
    init():cocoascript.UICollectionLayoutListConfiguration;
  }
}

declare const UICollectionLayoutListConfiguration: cocoascript.UICollectionLayoutListConfiguration;
