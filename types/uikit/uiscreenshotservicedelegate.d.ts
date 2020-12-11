declare namespace cocoascript {
  /**
   * Methods you use to generate PDF data that accompanies a user-requested screenshot.
   * doc://com.apple.documentation/documentation/uikit/uiscreenshotservicedelegate
   */
  interface UIScreenshotServiceDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiscreenshotservicedelegate/3213937-screenshotservice
    screenshotService_generatePDFRepresentationWithCompletion(screenshotService: cocoascript.UIScreenshotService, completionHandler: cocoascript.CGRect):void;
  }
}
