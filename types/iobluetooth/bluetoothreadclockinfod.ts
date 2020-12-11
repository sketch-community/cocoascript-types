declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo
   */
  interface BluetoothReadClockInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo/1434498-accuracy
    accuracy(): number;
    setAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo/1429784-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
  }
}
