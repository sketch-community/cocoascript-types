declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata
   */
  interface OBEXSetPathCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1428316-constants
    constants(): cocoascript.OBEXConstants;
    setConstants(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1434931-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1430018-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
