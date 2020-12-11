declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo
   */
  interface BluetoothHCIRoleInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo/1434540-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo/1435109-role
    role(): number;
    setRole(): void;
  }
}
