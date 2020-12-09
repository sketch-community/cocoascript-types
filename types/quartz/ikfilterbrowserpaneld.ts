declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel
 */
interface IKFilterBrowserPanel extends NSPanel {
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504426-filtername
  filterName():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1503992-filterbrowserviewwithoptions
  filterBrowserViewWithOptions(inOptions: cocoascript.NSDictionary):cocoascript.IKFilterBrowserView;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504894-beginwithoptions
  beginWithOptions_modelessDelegate_didEndSelector_contextInfo(inOptions: cocoascript.NSDictionary, modelessDelegate: cocoascript.IKFilterBrowserPanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504636-beginsheetwithoptions
  beginSheetWithOptions_modalForWindow_modalDelegate_didEndSelector_contextInfo(inOptions: cocoascript.NSDictionary, docWindow: cocoascript.NSWindow, modalDelegate: cocoascript.IKFilterBrowserPanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504028-runmodalwithoptions
  runModalWithOptions(inOptions: cocoascript.NSDictionary):number;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1505223-finish
  finish(sender: cocoascript.IKFilterBrowserPanel):void;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserwillpreviewfilternotification
  IKFilterBrowserWillPreviewFilterNotification(): cocoascript.const;
  setIKFilterBrowserWillPreviewFilterNotification(): void;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserfilterselectednotification
  IKFilterBrowserFilterSelectedNotification(): cocoascript.const;
  setIKFilterBrowserFilterSelectedNotification(): void;
  // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserfilterdoubleclicknotification
  IKFilterBrowserFilterDoubleClickNotification(): cocoascript.const;
  setIKFilterBrowserFilterDoubleClickNotification(): void;
  // 
  alloc():cocoascript.IKFilterBrowserPanel;
  // 
  init():cocoascript.IKFilterBrowserPanel;
}
}
declare const IKFilterBrowserPanel: cocoascript.IKFilterBrowserPanel;

