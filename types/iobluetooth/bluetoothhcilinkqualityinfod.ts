declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo
 */
interface BluetoothHCILinkQualityInfo {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo/1430303-handle
  handle(): cocoascript.BluetoothConnectionHandle;
  setHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo/1429912-qualityvalue
  qualityValue(): cocoascript.BluetoothHCILinkQuality;
  setQualityValue(): void;
}
}

