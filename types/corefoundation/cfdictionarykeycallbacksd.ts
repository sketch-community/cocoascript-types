declare namespace cocoascript {
/**
 * This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.
 * doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks
 */
interface CFDictionaryKeyCallBacks {
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516761-copydescription
  copyDescription(): cocoascript.CFDictionaryCopyDescriptionCallBack;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516802-equal
  equal(): cocoascript.CFDictionaryEqualCallBack;
  setEqual(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516784-hash
  hash(): cocoascript.CFDictionaryHashCallBack;
  setHash(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516780-release
  release(): cocoascript.CFDictionaryReleaseCallBack;
  setRelease(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516804-retain
  retain(): cocoascript.CFDictionaryRetainCallBack;
  setRetain(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfdictionarykeycallbacks/1516747-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

