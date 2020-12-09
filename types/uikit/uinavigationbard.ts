declare namespace cocoascript {
/**
 * Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
 * doc://com.apple.documentation/documentation/uikit/uinavigationbar
 */
interface UINavigationBar extends UIView {
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624951-delegate
  delegate(): cocoascript.UINavigationBarDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624952-pushnavigationitem
  pushNavigationItem_animated(item: cocoascript.UINavigationItem, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624969-popnavigationitemanimated
  popNavigationItemAnimated(animated: cocoascript.BOOL):cocoascript.UINavigationItem;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624945-setitems
  setItems_animated(items: cocoascript.UINavigationItem, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624961-items
  items(): cocoascript.UINavigationItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624967-topitem
  topItem(): cocoascript.UINavigationItem;
  setTopItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624925-backitem
  backItem(): cocoascript.UINavigationItem;
  setBackItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/2908999-preferslargetitles
  prefersLargeTitles(): cocoascript.BOOL;
  setPrefersLargeTitles(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/3198028-standardappearance
  standardAppearance(): cocoascript.UINavigationBarAppearance;
  setStandardAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/3198026-compactappearance
  compactAppearance(): cocoascript.UINavigationBarAppearance;
  setCompactAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/3198027-scrolledgeappearance
  scrollEdgeAppearance(): cocoascript.UINavigationBarAppearance;
  setScrollEdgeAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbar/1624928-translucent
  translucent(): cocoascript.BOOL;
  setTranslucent(): void;
  // 
  alloc():cocoascript.UINavigationBar;
  // 
  init():cocoascript.UINavigationBar;
}
}
declare const UINavigationBar: cocoascript.UINavigationBar;

