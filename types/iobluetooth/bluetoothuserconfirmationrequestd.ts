declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest
   */
  interface BluetoothUserConfirmationRequest {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest/1434892-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest/1431266-numericvalue
    numericValue(): cocoascript.BluetoothNumericValue;
    setNumericValue(): void;
  }
}
