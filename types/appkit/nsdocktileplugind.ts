declare namespace cocoascript {
/**
 * A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.
 * doc://com.apple.documentation/documentation/appkit/nsdocktileplugin
 */
interface NSDockTilePlugIn extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdocktileplugin/1534120-setdocktile
  setDockTile(dockTile: cocoascript.NSDockTile):void;
  // doc://com.apple.documentation/documentation/appkit/nsdocktileplugin/1527547-dockmenu
  dockMenu():cocoascript.NSMenu;
}
}

