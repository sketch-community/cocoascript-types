declare namespace cocoascript {
/**
 * Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
 * doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks
 */
interface CGDataProviderSequentialCallbacks {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408274-getbytes
  getBytes(): cocoascript.CGDataProviderGetBytesCallback;
  setGetBytes(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408306-releaseinfo
  releaseInfo(): cocoascript.CGDataProviderReleaseInfoCallback;
  setReleaseInfo(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408300-rewind
  rewind(): cocoascript.CGDataProviderRewindCallback;
  setRewind(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408272-skipforward
  skipForward(): cocoascript.CGDataProviderSkipForwardCallback;
  setSkipForward(): void;
}
}

