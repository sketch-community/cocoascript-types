declare namespace cocoascript {
/**
 * Part of the OBEXSessionEvent structure.
 * doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata
 */
interface OBEXPutCommandData {
  // doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata/1434369-bodydatalefttosend
  bodyDataLeftToSend(): cocoascript.size_t;
  setBodyDataLeftToSend(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata/1432265-headerdatalength
  headerDataLength(): cocoascript.size_t;
  setHeaderDataLength(): void;
}
}

