declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse
   */
  interface BluetoothIOCapabilityResponse {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1429118-oobdatapresence
    OOBDataPresence(): cocoascript.BluetoothOOBDataPresence;
    setOOBDataPresence(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1432216-authenticationrequirements
    authenticationRequirements(): cocoascript.BluetoothAuthenticationRequirements;
    setAuthenticationRequirements(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1434933-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1432066-iocapability
    ioCapability(): cocoascript.BluetoothIOCapability;
    setIoCapability(): void;
  }
}
