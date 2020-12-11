declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults
   */
  interface BluetoothHCIEventQoSSetupCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults/1430120-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults/1434571-setupparams
    setupParams(): cocoascript.BluetoothHCIQualityOfServiceSetupParams;
    setSetupParams(): void;
  }
}
