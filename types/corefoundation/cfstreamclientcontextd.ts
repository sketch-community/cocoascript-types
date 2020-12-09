declare namespace cocoascript {
/**
 * A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.
 * doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext
 */
interface CFStreamClientContext {
  // doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext/1539745-copydescription
  copyDescription(): void;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfstreamclientcontext/1539654-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

