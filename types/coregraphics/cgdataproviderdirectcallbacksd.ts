declare namespace cocoascript {
  /**
   * Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks
   */
  interface CGDataProviderDirectCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408292-getbytepointer
    getBytePointer(): cocoascript.CGDataProviderGetBytePointerCallback;
    setGetBytePointer(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408298-getbytesatposition
    getBytesAtPosition(): cocoascript.CGDataProviderGetBytesAtPositionCallback;
    setGetBytesAtPosition(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408302-releasebytepointer
    releaseBytePointer(): cocoascript.CGDataProviderReleaseBytePointerCallback;
    setReleaseBytePointer(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408286-releaseinfo
    releaseInfo(): cocoascript.CGDataProviderReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
