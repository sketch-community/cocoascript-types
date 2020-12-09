declare namespace cocoascript {
/**
 * A modal dialog or sheet attached to a document window. 
 * doc://com.apple.documentation/documentation/appkit/nsalert
 */
interface NSAlert extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsalert/1526747-layout
  layout():void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1528506-alertstyle
  alertStyle(): cocoascript.NSAlertStyle;
  setAlertStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1530575-accessoryview
  accessoryView(): cocoascript.NSView;
  setAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1535856-showshelp
  showsHelp(): cocoascript.BOOL;
  setShowsHelp(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1534314-helpanchor
  helpAnchor(): cocoascript.NSHelpAnchorName;
  setHelpAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1534327-delegate
  delegate(): cocoascript.NSAlertDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1535441-runmodal
  runModal():cocoascript.NSModalResponse;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1524296-beginsheetmodalforwindow
  beginSheetModalForWindow_completionHandler(sheetWindow: cocoascript.NSWindow, handler: cocoascript.NSModalResponse):void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1532128-beginsheetmodalforwindow
  beginSheetModalForWindow_modalDelegate_didEndSelector_contextInfo(window: cocoascript.NSWindow, delegate: cocoascript.NSAlert, didEndSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1532209-suppressionbutton
  suppressionButton(): cocoascript.NSButton;
  setSuppressionButton(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1535196-showssuppressionbutton
  showsSuppressionButton(): cocoascript.BOOL;
  setShowsSuppressionButton(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1529629-informativetext
  informativeText(): cocoascript.NSString;
  setInformativeText(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1532498-messagetext
  messageText(): cocoascript.NSString;
  setMessageText(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1531688-icon
  icon(): cocoascript.NSImage;
  setIcon(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1532992-buttons
  buttons(): cocoascript.NSButton;
  setButtons(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1524532-addbuttonwithtitle
  addButtonWithTitle(title: cocoascript.NSString):cocoascript.NSButton;
  // doc://com.apple.documentation/documentation/appkit/nsalert/1526566-window
  window(): cocoascript.NSWindow;
  setWindow(): void;
  // 
  alloc():cocoascript.NSAlert;
  // 
  init():cocoascript.NSAlert;
}
}
declare const NSAlert: cocoascript.NSAlert;

