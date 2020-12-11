declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults
   */
  interface BluetoothHCIEventLEConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1432313-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1429776-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433941-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433573-masterclockaccuracy
    masterClockAccuracy(): number;
    setMasterClockAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1429580-peeraddress
    peerAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1428544-peeraddresstype
    peerAddressType(): number;
    setPeerAddressType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433254-role
    role(): number;
    setRole(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1431360-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
  }
}
