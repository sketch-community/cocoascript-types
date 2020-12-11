declare namespace cocoascript {
  /**
   * A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
   * doc://com.apple.documentation/documentation/uikit/uitabbar
   */
  interface UITabBar extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623444-delegate
    delegate(): cocoascript.UITabBarDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623466-items
    items(): cocoascript.UITabBarItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623455-setitems
    setItems_animated(items: cocoascript.UITabBarItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623453-selecteditem
    selectedItem(): cocoascript.UITabBarItem;
    setSelectedItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/3198046-standardappearance
    standardAppearance(): cocoascript.UITabBarAppearance;
    setStandardAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/3213944-leadingaccessoryview
    leadingAccessoryView(): cocoascript.UIView;
    setLeadingAccessoryView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/3213945-trailingaccessoryview
    trailingAccessoryView(): cocoascript.UIView;
    setTrailingAccessoryView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623458-translucent
    translucent(): cocoascript.BOOL;
    setTranslucent(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623462-begincustomizingitems
    beginCustomizingItems(items: cocoascript.UITabBarItem):void;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/1623448-endcustomizinganimated
    endCustomizingAnimated(animated: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitabbar/2102237-customizing
    customizing(): cocoascript.BOOL;
    setCustomizing(): void;
    //
    alloc():cocoascript.UITabBar;
    //
    init():cocoascript.UITabBar;
  }
}

declare const UITabBar: cocoascript.UITabBar;
