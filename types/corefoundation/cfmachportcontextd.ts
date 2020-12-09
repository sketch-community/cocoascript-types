declare namespace cocoascript {
/**
 * A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.
 * doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext
 */
interface CFMachPortContext {
  // doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400944-copydescription
  copyDescription(): void;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfmachportcontext/1400910-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

