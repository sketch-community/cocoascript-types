declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata
   */
  interface OBEXDisconnectCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata/1429105-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata/1431866-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
