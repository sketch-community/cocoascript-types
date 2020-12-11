declare namespace cocoascript {
  /**
   * An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.
   * doc://com.apple.documentation/documentation/appkit/nspdfinfo
   */
  interface NSPDFInfo extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1528885-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1527208-fileextensionhidden
    fileExtensionHidden(): cocoascript.BOOL;
    setFileExtensionHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1525418-tagnames
    tagNames(): cocoascript.NSString;
    setTagNames(): void;
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1524848-orientation
    orientation(): cocoascript.NSPaperOrientation;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1532272-papersize
    paperSize(): cocoascript.NSSize;
    setPaperSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nspdfinfo/1528715-attributes
    attributes(): cocoascript.id;
    setAttributes(): void;
    //
    alloc():cocoascript.NSPDFInfo;
    //
    init():cocoascript.NSPDFInfo;
  }
}

declare const NSPDFInfo: cocoascript.NSPDFInfo;
