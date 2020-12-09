declare namespace cocoascript {
/**
 * A group of windows that display together as a single tabbed window.
 * doc://com.apple.documentation/documentation/appkit/nswindowtabgroup
 */
interface NSWindowTabGroup extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879445-identifier
  identifier(): cocoascript.NSWindowTabbingIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879448-overviewvisible
  overviewVisible(): cocoascript.BOOL;
  setOverviewVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879451-tabbarvisible
  tabBarVisible(): cocoascript.BOOL;
  setTabBarVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879458-windows
  windows(): cocoascript.NSWindow;
  setWindows(): void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879457-selectedwindow
  selectedWindow(): cocoascript.NSWindow;
  setSelectedWindow(): void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879450-addwindow
  addWindow(window: cocoascript.NSWindow):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879455-insertwindow
  insertWindow_atIndex(window: cocoascript.NSWindow, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowtabgroup/2879459-removewindow
  removeWindow(window: cocoascript.NSWindow):void;
  // 
  alloc():cocoascript.NSWindowTabGroup;
  // 
  init():cocoascript.NSWindowTabGroup;
}
}
declare const NSWindowTabGroup: cocoascript.NSWindowTabGroup;

