declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults
   */
  interface BluetoothHCIEventSynchronousConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1430102-airmode
    airMode(): cocoascript.BluetoothAirMode;
    setAirMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1429513-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1431333-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1430652-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1428300-receivepacketlength
    receivePacketLength(): number;
    setReceivePacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1431581-retransmissionwindow
    retransmissionWindow(): number;
    setRetransmissionWindow(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1433034-transmissioninterval
    transmissionInterval(): number;
    setTransmissionInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1433269-transmitpacketlength
    transmitPacketLength(): number;
    setTransmitPacketLength(): void;
  }
}
