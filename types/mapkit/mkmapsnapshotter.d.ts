declare namespace cocoascript {
  /**
   * A utility class for capturing a map and it’s content into an image.
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter
   */
  interface MKMapSnapshotter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452090-initwithoptions
    initWithOptions(options: cocoascript.MKMapSnapshotOptions):cocoascript.MKMapSnapshotter;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452479-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: cocoascript.MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452419-startwithqueue
    startWithQueue_completionHandler(queue: cocoascript.dispatch_queue_t, completionHandler: cocoascript.MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452388-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1451960-loading
    loading(): cocoascript.BOOL;
    setLoading(): void;
    //
    alloc():cocoascript.MKMapSnapshotter;
    //
    init():cocoascript.MKMapSnapshotter;
  }
}

declare const MKMapSnapshotter: cocoascript.MKMapSnapshotter;
