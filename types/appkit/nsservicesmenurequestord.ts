declare namespace cocoascript {
  /**
   * A set of methods that support interaction with items users can share through a sharing service.
   * doc://com.apple.documentation/documentation/appkit/nsservicesmenurequestor
   */
  interface NSServicesMenuRequestor extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsservicesmenurequestor/1428481-readselectionfrompasteboard
    readSelectionFromPasteboard(pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsservicesmenurequestor/1428477-writeselectiontopasteboard
    writeSelectionToPasteboard_types(pboard: cocoascript.NSPasteboard, types: cocoascript.NSPasteboardType):cocoascript.BOOL;
  }
}
