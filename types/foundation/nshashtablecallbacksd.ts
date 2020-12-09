declare namespace cocoascript {
/**
 * Defines a structure that contains the function pointers used to configure behavior of 
 * doc://com.apple.documentation/documentation/foundation/nshashtablecallbacks
 */
interface NSHashTableCallBacks {
  // doc://com.apple.documentation/documentation/foundation/nshashtablecallbacks/1409730-describe
  describe(): void;
  setDescribe(): void;
  // doc://com.apple.documentation/documentation/foundation/nshashtablecallbacks/1412381-hash
  hash(): void;
  setHash(): void;
}
}

