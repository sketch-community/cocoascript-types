declare namespace cocoascript {
/**
 * The Print panel that queries the user for information about a print job. 
 * doc://com.apple.documentation/documentation/appkit/nsprintpanel
 */
interface NSPrintPanel extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490529-jobstylehint
  jobStyleHint(): cocoascript.NSPrintPanelJobStyleHint;
  setJobStyleHint(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490542-options
  options(): cocoascript.NSPrintPanelOptions;
  setOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490548-defaultbuttontitle
  defaultButtonTitle():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490525-setdefaultbuttontitle
  setDefaultButtonTitle(defaultButtonTitle: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490537-helpanchor
  helpAnchor(): cocoascript.NSHelpAnchorName;
  setHelpAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490510-addaccessorycontroller
  addAccessoryController(accessoryController: cocoascript.NSPrintPanelAccessorizing):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490527-removeaccessorycontroller
  removeAccessoryController(accessoryController: cocoascript.NSPrintPanelAccessorizing):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490543-accessorycontrollers
  accessoryControllers(): cocoascript.NSViewController;
  setAccessoryControllers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490526-beginsheetwithprintinfo
  beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: cocoascript.NSPrintInfo, docWindow: cocoascript.NSWindow, delegate: cocoascript.NSPrintPanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490523-runmodal
  runModal():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490539-runmodalwithprintinfo
  runModalWithPrintInfo(printInfo: cocoascript.NSPrintInfo):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490513-printinfo
  printInfo(): cocoascript.NSPrintInfo;
  setPrintInfo(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490517-accessoryview
  accessoryView():cocoascript.NSView;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490520-setaccessoryview
  setAccessoryView(accessoryView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490565-updatefromprintinfo
  updateFromPrintInfo():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintpanel/1490540-finalwriteprintinfo
  finalWritePrintInfo():void;
  // 
  alloc():cocoascript.NSPrintPanel;
  // 
  init():cocoascript.NSPrintPanel;
}
}
declare const NSPrintPanel: cocoascript.NSPrintPanel;

