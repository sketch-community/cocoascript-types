declare namespace cocoascript {
/**
 * A standard control that can initiate the refreshing of a scroll view’s contents. 
 * doc://com.apple.documentation/documentation/uikit/uirefreshcontrol
 */
interface UIRefreshControl extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624846-init
  init():cocoascript.UIRefreshControl;
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624847-tintcolor
  tintColor(): cocoascript.UIColor;
  setTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624845-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624842-beginrefreshing
  beginRefreshing():void;
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624848-endrefreshing
  endRefreshing():void;
  // doc://com.apple.documentation/documentation/uikit/uirefreshcontrol/1624844-refreshing
  refreshing(): cocoascript.BOOL;
  setRefreshing(): void;
  // 
  alloc():cocoascript.UIRefreshControl;
  // 
  init():cocoascript.UIRefreshControl;
}
}
declare const UIRefreshControl: cocoascript.UIRefreshControl;

