declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata
   */
  interface OBEXSetPathCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1433879-constants
    constants(): cocoascript.OBEXConstants;
    setConstants(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1428892-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1432885-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1432017-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
