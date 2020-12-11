declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults
   */
  interface BluetoothHCIEventConnectionPacketTypeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults/1434009-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults/1430821-packettype
    packetType(): cocoascript.BluetoothPacketType;
    setPacketType(): void;
  }
}
