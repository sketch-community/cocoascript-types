declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults
   */
  interface BluetoothHCIEventConnectionRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1432544-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1433764-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1429838-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
  }
}
