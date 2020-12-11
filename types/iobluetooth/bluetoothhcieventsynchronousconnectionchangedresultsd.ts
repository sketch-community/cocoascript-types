declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults
   */
  interface BluetoothHCIEventSynchronousConnectionChangedResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434374-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434668-receivepacketlength
    receivePacketLength(): number;
    setReceivePacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434932-retransmissionwindow
    retransmissionWindow(): number;
    setRetransmissionWindow(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1429473-transmissioninterval
    transmissionInterval(): number;
    setTransmissionInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434262-transmitpacketlength
    transmitPacketLength(): number;
    setTransmitPacketLength(): void;
  }
}
