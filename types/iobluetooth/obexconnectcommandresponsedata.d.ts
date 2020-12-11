declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata
   */
  interface OBEXConnectCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1430825-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1432793-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1433428-maxpacketsize
    maxPacketSize(): cocoascript.OBEXMaxPacketLength;
    setMaxPacketSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1430093-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1434576-version
    version(): cocoascript.OBEXVersion;
    setVersion(): void;
  }
}
