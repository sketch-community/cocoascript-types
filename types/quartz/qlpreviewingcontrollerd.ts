declare namespace cocoascript {
  /**
   * A protocol for implementing a custom controller to create previews of files.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller
   */
  interface QLPreviewingController extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller/2867936-preparepreviewoffileaturl
    preparePreviewOfFileAtURL_completionHandler(url: cocoascript.NSURL, handler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller/2882042-preparepreviewofsearchableitemwi
    preparePreviewOfSearchableItemWithIdentifier_queryString_completionHandler(identifier: cocoascript.NSString, queryString: cocoascript.NSString, handler: cocoascript.NSError):void;
  }
}
