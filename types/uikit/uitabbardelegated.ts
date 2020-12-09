declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/uikit/uitabbardelegate
 */
interface UITabBarDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitabbardelegate/1623451-tabbar
  tabBar_willBeginCustomizingItems(tabBar: cocoascript.UITabBar, items: cocoascript.UITabBarItem):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbardelegate/1623471-tabbar
  tabBar_didBeginCustomizingItems(tabBar: cocoascript.UITabBar, items: cocoascript.UITabBarItem):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbardelegate/1623464-tabbar
  tabBar_willEndCustomizingItems_changed(tabBar: cocoascript.UITabBar, items: cocoascript.UITabBarItem, changed: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbardelegate/1623447-tabbar
  tabBar_didEndCustomizingItems_changed(tabBar: cocoascript.UITabBar, items: cocoascript.UITabBarItem, changed: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbardelegate/1623463-tabbar
  tabBar_didSelectItem(tabBar: cocoascript.UITabBar, item: cocoascript.UITabBarItem):void;
}
}

