declare namespace cocoascript {
/**
 * An object that manages a collection of status items displayed within the system-wide menu bar. 
 * doc://com.apple.documentation/documentation/appkit/nsstatusbar
 */
interface NSStatusBar extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsstatusbar/1530619-systemstatusbar
  systemStatusBar(): cocoascript.NSStatusBar;
  setSystemStatusBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusbar/1532895-statusitemwithlength
  statusItemWithLength(length: cocoascript.CGFloat):cocoascript.NSStatusItem;
  // doc://com.apple.documentation/documentation/appkit/nsstatusbar/1530377-removestatusitem
  removeStatusItem(item: cocoascript.NSStatusItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusbar/1530580-vertical
  vertical(): cocoascript.BOOL;
  setVertical(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusbar/1534591-thickness
  thickness(): cocoascript.CGFloat;
  setThickness(): void;
  // 
  alloc():cocoascript.NSStatusBar;
  // 
  init():cocoascript.NSStatusBar;
}
}
declare const NSStatusBar: cocoascript.NSStatusBar;

