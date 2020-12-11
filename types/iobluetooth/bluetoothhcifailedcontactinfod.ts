declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo
   */
  interface BluetoothHCIFailedContactInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo/1430053-count
    count(): cocoascript.BluetoothHCIFailedContactCount;
    setCount(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo/1433578-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
  }
}
