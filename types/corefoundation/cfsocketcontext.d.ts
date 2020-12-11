declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext
   */
  interface CFSocketContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext/1542148-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfsocketcontext/1543689-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
