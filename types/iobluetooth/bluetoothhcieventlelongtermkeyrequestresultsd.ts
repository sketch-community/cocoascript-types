declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults
   */
  interface BluetoothHCIEventLELongTermKeyRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1430541-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1433619-ediv
    ediv(): number;
    setEdiv(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1431460-randomnumber
    randomNumber(): number;
    setRandomNumber(): void;
  }
}
