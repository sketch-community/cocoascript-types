declare namespace cocoascript {
  /**
   * A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
   * doc://com.apple.documentation/documentation/appkit/nsimagedelegate
   */
  interface NSImageDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsimagedelegate/1519927-imagedidnotdraw
    imageDidNotDraw_inRect(sender: cocoascript.NSImage, rect: cocoascript.NSRect):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsimagedelegate/1519916-image
    image_didLoadPartOfRepresentation_withValidRows(image: cocoascript.NSImage, rep: cocoascript.NSImageRep, rows: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsimagedelegate/1520028-image
    image_didLoadRepresentation_withStatus(image: cocoascript.NSImage, rep: cocoascript.NSImageRep, status: cocoascript.NSImageLoadStatus):void;
    // doc://com.apple.documentation/documentation/appkit/nsimagedelegate/1519945-image
    image_didLoadRepresentationHeader(image: cocoascript.NSImage, rep: cocoascript.NSImageRep):void;
    // doc://com.apple.documentation/documentation/appkit/nsimagedelegate/1519934-image
    image_willLoadRepresentation(image: cocoascript.NSImage, rep: cocoascript.NSImageRep):void;
  }
}
