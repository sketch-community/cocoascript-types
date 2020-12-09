declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/uikit/uinavigationbardelegate
 */
interface UINavigationBarDelegate extends UIBarPositioningDelegate {
  // doc://com.apple.documentation/documentation/uikit/uinavigationbardelegate/1624941-navigationbar
  navigationBar_shouldPushItem(navigationBar: cocoascript.UINavigationBar, item: cocoascript.UINavigationItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbardelegate/1624964-navigationbar
  navigationBar_didPushItem(navigationBar: cocoascript.UINavigationBar, item: cocoascript.UINavigationItem):void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbardelegate/1624944-navigationbar
  navigationBar_shouldPopItem(navigationBar: cocoascript.UINavigationBar, item: cocoascript.UINavigationItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbardelegate/1624948-navigationbar
  navigationBar_didPopItem(navigationBar: cocoascript.UINavigationBar, item: cocoascript.UINavigationItem):void;
}
}

