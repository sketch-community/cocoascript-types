declare namespace cocoascript {
/**
 * An object that can render an image from a PDF format data stream.
 * doc://com.apple.documentation/documentation/appkit/nspdfimagerep
 */
interface NSPDFImageRep extends NSImageRep {
  // doc://com.apple.documentation/documentation/appkit/nspdfimagerep/1535547-initwithdata
  initWithData(pdfData: cocoascript.NSData):cocoascript.NSPDFImageRep;
  // doc://com.apple.documentation/documentation/appkit/nspdfimagerep/1533966-bounds
  bounds(): cocoascript.NSRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfimagerep/1528846-currentpage
  currentPage(): cocoascript.NSInteger;
  setCurrentPage(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfimagerep/1533063-pagecount
  pageCount(): cocoascript.NSInteger;
  setPageCount(): void;
  // doc://com.apple.documentation/documentation/appkit/nspdfimagerep/1530162-pdfrepresentation
  PDFRepresentation(): cocoascript.NSData;
  setPDFRepresentation(): void;
  // 
  alloc():cocoascript.NSPDFImageRep;
  // 
  init():cocoascript.NSPDFImageRep;
}
}
declare const NSPDFImageRep: cocoascript.NSPDFImageRep;

