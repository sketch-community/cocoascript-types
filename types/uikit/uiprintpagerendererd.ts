declare namespace cocoascript {
/**
 * An object that draws pages of content that are to be printed, with or without the assistance of print formatters. 
 * doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer
 */
interface UIPrintPageRenderer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621631-numberofpages
  numberOfPages(): cocoascript.NSInteger;
  setNumberOfPages(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621633-paperrect
  paperRect(): cocoascript.CGRect;
  setPaperRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621628-printablerect
  printableRect(): cocoascript.CGRect;
  setPrintableRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621630-headerheight
  headerHeight(): cocoascript.CGFloat;
  setHeaderHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621634-footerheight
  footerHeight(): cocoascript.CGFloat;
  setFooterHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621632-addprintformatter
  addPrintFormatter_startingAtPageAtIndex(formatter: cocoascript.UIPrintFormatter, pageIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621635-printformattersforpageatindex
  printFormattersForPageAtIndex(pageIndex: cocoascript.NSInteger):cocoascript.UIPrintFormatter;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621640-printformatters
  printFormatters(): cocoascript.UIPrintFormatter;
  setPrintFormatters(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621643-preparefordrawingpages
  prepareForDrawingPages(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621636-drawpageatindex
  drawPageAtIndex_inRect(pageIndex: cocoascript.NSInteger, printableRect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621639-drawheaderforpageatindex
  drawHeaderForPageAtIndex_inRect(pageIndex: cocoascript.NSInteger, headerRect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621641-drawcontentforpageatindex
  drawContentForPageAtIndex_inRect(pageIndex: cocoascript.NSInteger, contentRect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621644-drawprintformatter
  drawPrintFormatter_forPageAtIndex(printFormatter: cocoascript.UIPrintFormatter, pageIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiprintpagerenderer/1621638-drawfooterforpageatindex
  drawFooterForPageAtIndex_inRect(pageIndex: cocoascript.NSInteger, footerRect: cocoascript.CGRect):void;
  // 
  alloc():cocoascript.UIPrintPageRenderer;
  // 
  init():cocoascript.UIPrintPageRenderer;
}
}
declare const UIPrintPageRenderer: cocoascript.UIPrintPageRenderer;

