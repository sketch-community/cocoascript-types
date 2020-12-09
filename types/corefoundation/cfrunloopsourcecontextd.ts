declare namespace cocoascript {
/**
 * A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.
 * doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext
 */
interface CFRunLoopSourceContext {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1542769-copydescription
  copyDescription(): void;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543639-equal
  equal(): void;
  setEqual(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543398-hash
  hash(): void;
  setHash(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfrunloopsourcecontext/1543632-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

