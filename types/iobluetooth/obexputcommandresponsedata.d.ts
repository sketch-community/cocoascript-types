declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata
   */
  interface OBEXPutCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata/1432880-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata/1433582-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
