declare namespace cocoascript {
  /**
   * Defines a structure for the context of a CFFileDescriptor.
   * doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext
   */
  interface CFFileDescriptorContext {
    // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext/1477577-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cffiledescriptorcontext/1477608-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
