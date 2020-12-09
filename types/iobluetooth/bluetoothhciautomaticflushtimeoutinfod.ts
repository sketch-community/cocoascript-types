declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo
 */
interface BluetoothHCIAutomaticFlushTimeoutInfo {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo/1430656-handle
  handle(): cocoascript.BluetoothConnectionHandle;
  setHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo/1432173-timeout
  timeout(): cocoascript.BluetoothHCIAutomaticFlushTimeout;
  setTimeout(): void;
}
}

