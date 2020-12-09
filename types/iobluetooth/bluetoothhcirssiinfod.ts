declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo
 */
interface BluetoothHCIRSSIInfo {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo/1429507-rssivalue
  RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
  setRSSIValue(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo/1432838-handle
  handle(): cocoascript.BluetoothConnectionHandle;
  setHandle(): void;
}
}

