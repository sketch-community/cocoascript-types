declare namespace cocoascript {
  /**
   * A token that indicates which generation of the persistent store is being accessed.
   * doc://com.apple.documentation/documentation/coredata/nsquerygenerationtoken
   */
  interface NSQueryGenerationToken extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsquerygenerationtoken/1640578-currentquerygenerationtoken
    currentQueryGenerationToken(): cocoascript.NSQueryGenerationToken;
    setCurrentQueryGenerationToken(): void;
    //
    alloc():cocoascript.NSQueryGenerationToken;
    //
    init():cocoascript.NSQueryGenerationToken;
  }
}

declare const NSQueryGenerationToken: cocoascript.NSQueryGenerationToken;
