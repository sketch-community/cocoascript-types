declare namespace cocoascript {
/**
 * A set of methods for managing interactions with an open or save panel. 
 * doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate
 */
interface NSOpenSavePanelDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1524630-panel
  panel_userEnteredFilename_confirmed(sender: cocoascript.NSOpenSavePanelDelegate, filename: cocoascript.NSString, okFlag: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1533556-panelselectiondidchange
  panelSelectionDidChange(sender: cocoascript.NSOpenSavePanelDelegate):void;
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1527117-panel
  panel_didChangeToDirectoryURL(sender: cocoascript.NSOpenSavePanelDelegate, url: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1532953-panel
  panel_willExpand(sender: cocoascript.NSOpenSavePanelDelegate, expanding: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1535200-panel
  panel_shouldEnableURL(sender: cocoascript.NSOpenSavePanelDelegate, url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsopensavepaneldelegate/1535141-panel
  panel_validateURL_error(sender: cocoascript.NSOpenSavePanelDelegate, url: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
}
}

