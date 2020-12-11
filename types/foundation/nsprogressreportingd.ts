declare namespace cocoascript {
  /**
   * An interface for objects that report progress using a single progress instance.
   * doc://com.apple.documentation/documentation/foundation/nsprogressreporting
   */
  interface NSProgressReporting extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsprogressreporting/1412781-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
  }
}
