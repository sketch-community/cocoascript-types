declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexerrordata
   */
  interface OBEXErrorData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexerrordata/1432850-datalength
    dataLength(): cocoascript.size_t;
    setDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexerrordata/1431911-error
    error(): cocoascript.OBEXError;
    setError(): void;
  }
}
