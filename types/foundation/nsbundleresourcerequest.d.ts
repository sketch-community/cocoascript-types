declare namespace cocoascript {
  /**
   * A resource manager you use to download content hosted on the App Store at the time your app needs it.
   * doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest
   */
  interface NSBundleResourceRequest extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614837-initwithtags
    initWithTags(tags: cocoascript.NSString):cocoascript.NSBundleResourceRequest;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614842-initwithtags
    initWithTags_bundle(tags: cocoascript.NSString, bundle: cocoascript.NSBundle):cocoascript.NSBundleResourceRequest;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614844-bundle
    bundle(): cocoascript.NSBundle;
    setBundle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614833-tags
    tags(): cocoascript.NSString;
    setTags(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614840-beginaccessingresourceswithcompl
    beginAccessingResourcesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614834-conditionallybeginaccessingresou
    conditionallyBeginAccessingResourcesWithCompletionHandler(completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614843-endaccessingresources
    endAccessingResources():void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614841-loadingpriority
    loadingPriority(): number;
    setLoadingPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbundleresourcerequest/1614838-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    //
    alloc():cocoascript.NSBundleResourceRequest;
    //
    init():cocoascript.NSBundleResourceRequest;
  }
}

declare const NSBundleResourceRequest: cocoascript.NSBundleResourceRequest;
