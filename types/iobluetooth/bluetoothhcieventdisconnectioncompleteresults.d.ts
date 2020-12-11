declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults
   */
  interface BluetoothHCIEventDisconnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults/1431097-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults/1434350-reason
    reason(): cocoascript.BluetoothReasonCode;
    setReason(): void;
  }
}
