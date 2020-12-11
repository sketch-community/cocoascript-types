declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults
   */
  interface BluetoothHCIEventReadSupportedFeaturesResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults/1429347-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults/1432924-supportedfeatures
    supportedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setSupportedFeatures(): void;
  }
}
