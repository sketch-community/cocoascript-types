declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/obextransportevent
 */
interface OBEXTransportEvent {
  // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1434165-datalength
  dataLength(): cocoascript.size_t;
  setDataLength(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1430387-status
  status(): cocoascript.OBEXError;
  setStatus(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1432864-type
  type(): cocoascript.OBEXTransportEventType;
  setType(): void;
}
}

