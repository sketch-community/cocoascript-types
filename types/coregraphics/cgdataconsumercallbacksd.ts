declare namespace cocoascript {
/**
 * A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
 * doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks
 */
interface CGDataConsumerCallbacks {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks/1455040-putbytes
  putBytes(): cocoascript.CGDataConsumerPutBytesCallback;
  setPutBytes(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks/1454472-releaseconsumer
  releaseConsumer(): cocoascript.CGDataConsumerReleaseInfoCallback;
  setReleaseConsumer(): void;
}
}

