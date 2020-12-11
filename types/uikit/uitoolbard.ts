declare namespace cocoascript {
  /**
   * A control that displays one or more buttons along the bottom edge of your interface.
   * doc://com.apple.documentation/documentation/uikit/uitoolbar
   */
  interface UIToolbar extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/1617992-delegate
    delegate(): cocoascript.UIToolbarDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/1617997-items
    items(): cocoascript.UIBarButtonItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/1617999-setitems
    setItems_animated(items: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/3198081-standardappearance
    standardAppearance(): cocoascript.UIToolbarAppearance;
    setStandardAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/3198080-compactappearance
    compactAppearance(): cocoascript.UIToolbarAppearance;
    setCompactAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitoolbar/1618001-translucent
    translucent(): cocoascript.BOOL;
    setTranslucent(): void;
    //
    alloc():cocoascript.UIToolbar;
    //
    init():cocoascript.UIToolbar;
  }
}

declare const UIToolbar: cocoascript.UIToolbar;
