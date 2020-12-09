declare namespace cocoascript {
/**
 * An object used to specify whether a Today widget has content to display.
 * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller
 */
interface NCWidgetController extends NSObject {
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller/1456693-sethascontent
  setHasContent_forWidgetWithBundleIdentifier(flag: cocoascript.BOOL, bundleID: cocoascript.NSString):void;
  // 
  alloc():cocoascript.NCWidgetController;
  // 
  init():cocoascript.NCWidgetController;
}
}
declare const NCWidgetController: cocoascript.NCWidgetController;

