declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext
   */
  interface CFRunLoopObserverContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext/1541528-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopobservercontext/1543382-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
