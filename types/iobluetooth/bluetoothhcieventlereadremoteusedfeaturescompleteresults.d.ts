declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults
   */
  interface BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults/2092564-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults/2092588-usedfeatures
    usedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setUsedFeatures(): void;
  }
}
