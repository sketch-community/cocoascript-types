declare namespace cocoascript {
  /**
   * Information that’s passed to an App Clip on launch.
   * doc://com.apple.documentation/documentation/app_clips/apactivationpayload
   */
  interface APActivationPayload extends NSObject {
    // doc://com.apple.documentation/documentation/app_clips/apactivationpayload/3580308-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/app_clips/apactivationpayload/3580309-confirmacquiredinregion
    confirmAcquiredInRegion_completionHandler(region: cocoascript.CLRegion, completionHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.APActivationPayload;
    //
    init():cocoascript.APActivationPayload;
  }
}

declare const APActivationPayload: cocoascript.APActivationPayload;
