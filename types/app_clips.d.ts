declare namespace cocoascript {
  /**
   * Information that’s passed to an App Clip on launch.
   * doc://com.apple.documentation/documentation/app_clips/apactivationpayload
   */
  interface APActivationPayload extends NSObject {
    // doc://com.apple.documentation/documentation/app_clips/apactivationpayload/3580308-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/app_clips/apactivationpayload/3580309-confirmacquiredinregion
    confirmAcquiredInRegion_completionHandler(region: CLRegion, completionHandler: NSError):void;
    //
    alloc():APActivationPayload;
    //
    init():APActivationPayload;
  }
}

declare const APActivationPayload: cocoascript.APActivationPayload;
// doc://com.apple.documentation/documentation/app_clips/apactivationpayloaderrordomain
declare const APActivationPayloadErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/app_clips/apactivationpayloaderrorcode
  type APActivationPayloadErrorCode = cocoascript.NSInteger;
}
