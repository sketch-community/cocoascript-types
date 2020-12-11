declare namespace cocoascript {
  /**
   * A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.
   * doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext
   */
  interface CFMessagePortContext {
    // doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1542175-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfmessageportcontext/1543532-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
