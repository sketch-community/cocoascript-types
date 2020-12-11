declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata
   */
  interface BluetoothHCIEventFlowSpecificationData {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434325-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434918-flags
    flags(): number;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434704-flowdirection
    flowDirection(): number;
    setFlowDirection(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1430827-servicetype
    serviceType(): number;
    setServiceType(): void;
  }
}
