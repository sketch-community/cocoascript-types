declare namespace cocoascript {
/**
 * This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.
 * doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks
 */
interface CFBagCallBacks {
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469256-copydescription
  copyDescription(): cocoascript.CFBagCopyDescriptionCallBack;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469316-equal
  equal(): cocoascript.CFBagEqualCallBack;
  setEqual(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469293-hash
  hash(): cocoascript.CFBagHashCallBack;
  setHash(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469307-release
  release(): cocoascript.CFBagReleaseCallBack;
  setRelease(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469278-retain
  retain(): cocoascript.CFBagRetainCallBack;
  setRetain(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfbagcallbacks/1469258-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

