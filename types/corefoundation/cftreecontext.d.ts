declare namespace cocoascript {
  /**
   * Structure containing program-defined data and callbacks for a CFTree object.
   * doc://com.apple.documentation/documentation/corefoundation/cftreecontext
   */
  interface CFTreeContext {
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401800-copydescription
    copyDescription(): cocoascript.CFTreeCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401779-release
    release(): cocoascript.CFTreeReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401767-retain
    retain(): cocoascript.CFTreeRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cftreecontext/1401806-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
