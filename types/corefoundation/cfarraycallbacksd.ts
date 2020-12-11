declare namespace cocoascript {
  /**
   * Structure containing the callbacks of a CFArray.
   * doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks
   */
  interface CFArrayCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388780-copydescription
    copyDescription(): cocoascript.CFArrayCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388790-equal
    equal(): cocoascript.CFArrayEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388743-release
    release(): cocoascript.CFArrayReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388784-retain
    retain(): cocoascript.CFArrayRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfarraycallbacks/1388778-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
