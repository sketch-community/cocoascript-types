declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1
   */
  interface CFRunLoopSourceContext1 {
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542892-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542103-equal
    equal(): void;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542846-getport
    getPort(): void;
    setGetPort(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1543040-hash
    hash(): void;
    setHash(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext1/1542782-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
