declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsfontassetrequest
   */
  interface NSFontAssetRequest extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfontassetrequest/2890807-initwithfontdescriptors
    initWithFontDescriptors_options(fontDescriptors: cocoascript.NSFontDescriptor, options: cocoascript.NSFontAssetRequestOptions):cocoascript.NSFontAssetRequest;
    // doc://com.apple.documentation/documentation/appkit/nsfontassetrequest/2890808-downloadfontassetswithcompletion
    downloadFontAssetsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsfontassetrequest/2890802-downloadedfontdescriptors
    downloadedFontDescriptors(): cocoascript.NSFontDescriptor;
    setDownloadedFontDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontassetrequest/2890804-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    //
    alloc():cocoascript.NSFontAssetRequest;
    //
    init():cocoascript.NSFontAssetRequest;
  }
}

declare const NSFontAssetRequest: cocoascript.NSFontAssetRequest;
