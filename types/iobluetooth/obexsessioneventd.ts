declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent
 */
interface OBEXSessionEvent {
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1432887-isendofeventdata
  isEndOfEventData(): cocoascript.Boolean;
  setIsEndOfEventData(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1432148-session
  session(): cocoascript.OBEXSessionRef;
  setSession(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1431732-type
  type(): cocoascript.OBEXSessionEventType;
  setType(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1434734-u
  u(): cocoascript.union;
  setU(): void;
}
}

