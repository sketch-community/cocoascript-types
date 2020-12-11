declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent
   */
  interface IOBluetoothL2CAPChannelEvent {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1432146-eventtype
    eventType(): cocoascript.IOBluetoothL2CAPChannelEventType;
    setEventType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1433227-status
    status(): cocoascript.IOReturn;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1433594-u
    u(): cocoascript.union;
    setU(): void;
  }
}
