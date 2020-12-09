declare namespace cocoascript {
/**
 * An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries. 
 * doc://com.apple.documentation/documentation/uikit/uiprintformatter
 */
interface UIPrintFormatter extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621831-perpagecontentinsets
  perPageContentInsets(): cocoascript.UIEdgeInsets;
  setPerPageContentInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621826-maximumcontentheight
  maximumContentHeight(): cocoascript.CGFloat;
  setMaximumContentHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621840-maximumcontentwidth
  maximumContentWidth(): cocoascript.CGFloat;
  setMaximumContentWidth(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621823-contentinsets
  contentInsets(): cocoascript.UIEdgeInsets;
  setContentInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621827-startpage
  startPage(): cocoascript.NSInteger;
  setStartPage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621843-pagecount
  pageCount(): cocoascript.NSInteger;
  setPageCount(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621841-drawinrect
  drawInRect_forPageAtIndex(rect: cocoascript.CGRect, pageIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621829-rectforpageatindex
  rectForPageAtIndex(pageIndex: cocoascript.NSInteger):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621834-removefromprintpagerenderer
  removeFromPrintPageRenderer():void;
  // doc://com.apple.documentation/documentation/uikit/uiprintformatter/1621821-printpagerenderer
  printPageRenderer(): cocoascript.UIPrintPageRenderer;
  setPrintPageRenderer(): void;
  // 
  alloc():cocoascript.UIPrintFormatter;
  // 
  init():cocoascript.UIPrintFormatter;
}
}
declare const UIPrintFormatter: cocoascript.UIPrintFormatter;

