declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata
   */
  interface OBEXConnectCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1430346-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1432709-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1434580-maxpacketsize
    maxPacketSize(): cocoascript.OBEXMaxPacketLength;
    setMaxPacketSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1431969-version
    version(): cocoascript.OBEXVersion;
    setVersion(): void;
  }
}
