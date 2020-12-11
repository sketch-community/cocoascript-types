declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommanddata
   */
  interface OBEXDisconnectCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommanddata/1428659-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
