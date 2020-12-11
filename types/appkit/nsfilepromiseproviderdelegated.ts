declare namespace cocoascript {
  /**
   * A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.
   * doc://com.apple.documentation/documentation/appkit/nsfilepromiseproviderdelegate
   */
  interface NSFilePromiseProviderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseproviderdelegate/2369278-filepromiseprovider
    filePromiseProvider_fileNameForType(filePromiseProvider: cocoascript.NSFilePromiseProvider, fileType: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseproviderdelegate/1644244-filepromiseprovider
    filePromiseProvider_writePromiseToURL_completionHandler(filePromiseProvider: cocoascript.NSFilePromiseProvider, url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseproviderdelegate/2369279-operationqueueforfilepromiseprov
    operationQueueForFilePromiseProvider(filePromiseProvider: cocoascript.NSFilePromiseProvider):cocoascript.NSOperationQueue;
  }
}
