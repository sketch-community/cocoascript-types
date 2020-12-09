declare namespace cocoascript {
/**
 * A Save or Export as PDF panel that’s consistent with the macOS user interface. 
 * doc://com.apple.documentation/documentation/appkit/nspdfpanel
 */
interface NSPDFPanel extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nspdfpanel/1524637-accessorycontroller
  accessoryController(): cocoascript.NSViewController;
  setAccessoryController(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfpanel/1532479-options
  options(): cocoascript.NSPDFPanelOptions;
  setOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfpanel/1532720-defaultfilename
  defaultFileName(): cocoascript.NSString;
  setDefaultFileName(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfpanel/1529098-beginsheetwithpdfinfo
  beginSheetWithPDFInfo_modalForWindow_completionHandler(pdfInfo: cocoascript.NSPDFInfo, docWindow: cocoascript.NSWindow, completionHandler: cocoascript.NSInteger):void;
  // 
  alloc():cocoascript.NSPDFPanel;
  // 
  init():cocoascript.NSPDFPanel;
}
}
declare const NSPDFPanel: cocoascript.NSPDFPanel;

