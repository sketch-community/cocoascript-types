declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults
   */
  interface BluetoothHCIEventRemoteNameRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults/1428828-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults/1433356-devicename
    deviceName(): cocoascript.BluetoothDeviceName;
    setDeviceName(): void;
  }
}
