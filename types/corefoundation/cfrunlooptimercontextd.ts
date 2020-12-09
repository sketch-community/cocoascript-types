declare namespace cocoascript {
/**
 * A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopTimer’s behavior.
 * doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext
 */
interface CFRunLoopTimerContext {
  // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext/1541599-copydescription
  copyDescription(): void;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfrunlooptimercontext/1542891-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

