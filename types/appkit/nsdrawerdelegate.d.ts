declare namespace cocoascript {
  /**
   * A set of methods that drawer delegates implement to open, close, and resize the drawer.
   * doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate
   */
  interface NSDrawerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438318-drawershouldopen
    drawerShouldOpen(sender: cocoascript.NSDrawer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438325-drawerwillopen
    drawerWillOpen(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438285-drawerdidopen
    drawerDidOpen(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438289-drawershouldclose
    drawerShouldClose(sender: cocoascript.NSDrawer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438314-drawerwillclose
    drawerWillClose(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438273-drawerdidclose
    drawerDidClose(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdelegate/1438293-drawerwillresizecontents
    drawerWillResizeContents_toSize(sender: cocoascript.NSDrawer, contentSize: cocoascript.NSSize):cocoascript.NSSize;
  }
}
