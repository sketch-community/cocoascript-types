declare namespace cocoascript {
  /**
   * A service that provides a custom communication channel between your app and a File Provider extension.
   * doc://com.apple.documentation/documentation/foundation/nsfileproviderservice
   */
  interface NSFileProviderService extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfileproviderservice/2915258-name
    name(): cocoascript.NSFileProviderServiceName;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfileproviderservice/2915257-getfileproviderconnectionwithcom
    getFileProviderConnectionWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.NSFileProviderService;
    //
    init():cocoascript.NSFileProviderService;
  }
}

declare const NSFileProviderService: cocoascript.NSFileProviderService;
