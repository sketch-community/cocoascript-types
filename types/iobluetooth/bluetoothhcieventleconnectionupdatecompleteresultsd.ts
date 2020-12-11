declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults
   */
  interface BluetoothHCIEventLEConnectionUpdateCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1434658-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1428807-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1432579-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1433022-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
  }
}
