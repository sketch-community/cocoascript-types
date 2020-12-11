declare namespace cocoascript {
  /**
   * This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.
   * doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks
   */
  interface CFDictionaryValueCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516773-copydescription
    copyDescription(): cocoascript.CFDictionaryCopyDescriptionCallBack;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516767-equal
    equal(): cocoascript.CFDictionaryEqualCallBack;
    setEqual(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516793-release
    release(): cocoascript.CFDictionaryReleaseCallBack;
    setRelease(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516775-retain
    retain(): cocoascript.CFDictionaryRetainCallBack;
    setRetain(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfdictionaryvaluecallbacks/1516763-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
