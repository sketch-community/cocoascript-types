declare namespace cocoascript {
/**
 * An object that configures and displays a Media Library Browser panel. 
 * doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller
 */
interface NSMediaLibraryBrowserController extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller/1423485-sharedmedialibrarybrowsercontrol
  sharedMediaLibraryBrowserController(): cocoascript.NSMediaLibraryBrowserController;
  setSharedMediaLibraryBrowserController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller/1423477-frame
  frame(): cocoascript.NSRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller/1423479-togglepanel
  togglePanel(sender: cocoascript.NSMediaLibraryBrowserController):void;
  // doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller/1423473-visible
  visible(): cocoascript.BOOL;
  setVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmedialibrarybrowsercontroller/1423481-medialibraries
  mediaLibraries(): cocoascript.NSMediaLibrary;
  setMediaLibraries(): void;
  // 
  alloc():cocoascript.NSMediaLibraryBrowserController;
  // 
  init():cocoascript.NSMediaLibraryBrowserController;
}
}
declare const NSMediaLibraryBrowserController: cocoascript.NSMediaLibraryBrowserController;

