declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults
   */
  interface BluetoothHCIEventRoleChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1431379-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1432679-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1428935-role
    role(): cocoascript.BluetoothRole;
    setRole(): void;
  }
}
