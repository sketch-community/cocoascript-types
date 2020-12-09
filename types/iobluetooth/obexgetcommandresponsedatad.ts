declare namespace cocoascript {
/**
 * Part of the OBEXSessionEvent structure.
 * doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata
 */
interface OBEXGetCommandResponseData {
  // doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata/1430744-headerdatalength
  headerDataLength(): cocoascript.size_t;
  setHeaderDataLength(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata/1432858-serverresponseopcode
  serverResponseOpCode(): cocoascript.OBEXOpCode;
  setServerResponseOpCode(): void;
}
}

