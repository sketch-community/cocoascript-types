declare namespace cocoascript {
/**
 * An object that lays out HTML text for a multipage print job.
 * doc://com.apple.documentation/documentation/uikit/uimarkuptextprintformatter
 */
interface UIMarkupTextPrintFormatter extends UIPrintFormatter {
  // doc://com.apple.documentation/documentation/uikit/uimarkuptextprintformatter/1621845-initwithmarkuptext
  initWithMarkupText(markupText: cocoascript.NSString):cocoascript.UIMarkupTextPrintFormatter;
  // doc://com.apple.documentation/documentation/uikit/uimarkuptextprintformatter/1621842-markuptext
  markupText(): cocoascript.NSString;
  setMarkupText(): void;
  // 
  alloc():cocoascript.UIMarkupTextPrintFormatter;
  // 
  init():cocoascript.UIMarkupTextPrintFormatter;
}
}
declare const UIMarkupTextPrintFormatter: cocoascript.UIMarkupTextPrintFormatter;

