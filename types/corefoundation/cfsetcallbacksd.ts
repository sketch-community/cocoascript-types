declare namespace cocoascript {
/**
 * This structure contains the callbacks used to retain, release, describe, and compare the values of a CFSet object.
 * doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks
 */
interface CFSetCallBacks {
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520442-copydescription
  copyDescription(): cocoascript.CFSetCopyDescriptionCallBack;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520421-equal
  equal(): cocoascript.CFSetEqualCallBack;
  setEqual(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520417-hash
  hash(): cocoascript.CFSetHashCallBack;
  setHash(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520410-release
  release(): cocoascript.CFSetReleaseCallBack;
  setRelease(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520439-retain
  retain(): cocoascript.CFSetRetainCallBack;
  setRetain(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfsetcallbacks/1520446-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

