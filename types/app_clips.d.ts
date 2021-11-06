declare namespace cocoascript {
  /**
   * Information that’s passed to an App Clip on launch.
   * https://developer.apple.com/documentation/app_clips/apactivationpayload
   */
  interface APActivationPayload extends NSObject {
    // https://developer.apple.com/documentation/app_clips/apactivationpayload/3580308-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/app_clips/apactivationpayload/3580309-confirmacquiredinregion
    confirmAcquiredInRegion_completionHandler(region: CLRegion, completionHandler: NSError):void;
    //
    alloc():APActivationPayload;
    //
    init():APActivationPayload;
  }
}

declare const APActivationPayload: cocoascript.APActivationPayload;
// https://developer.apple.com/documentation/app_clips/apactivationpayloaderrordomain
declare const APActivationPayloadErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/app_clips/apactivationpayloaderrorcode
  type APActivationPayloadErrorCode = cocoascript.NSInteger;
}
