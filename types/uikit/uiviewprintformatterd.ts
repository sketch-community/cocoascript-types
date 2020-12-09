declare namespace cocoascript {
/**
 * An object that lays out the drawn content (which can span multiple pages) of a view for printing.
 * doc://com.apple.documentation/documentation/uikit/uiviewprintformatter
 */
interface UIViewPrintFormatter extends UIPrintFormatter {
  // doc://com.apple.documentation/documentation/uikit/uiviewprintformatter/1621824-view
  view(): cocoascript.UIView;
  setView(): void;
  // 
  alloc():cocoascript.UIViewPrintFormatter;
  // 
  init():cocoascript.UIViewPrintFormatter;
}
}
declare const UIViewPrintFormatter: cocoascript.UIViewPrintFormatter;

