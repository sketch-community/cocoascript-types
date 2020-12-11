declare namespace cocoascript {
  /**
   * A stub class that encapsulates security information about a file.
   * doc://com.apple.documentation/documentation/foundation/nsfilesecurity
   */
  interface NSFileSecurity extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilesecurity/1418382-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSFileSecurity;
    //
    alloc():cocoascript.NSFileSecurity;
    //
    init():cocoascript.NSFileSecurity;
  }
}

declare const NSFileSecurity: cocoascript.NSFileSecurity;
