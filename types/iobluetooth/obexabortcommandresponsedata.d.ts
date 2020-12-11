declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata
   */
  interface OBEXAbortCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata/1429424-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata/1435059-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
