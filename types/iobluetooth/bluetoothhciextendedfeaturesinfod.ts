declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo
 */
interface BluetoothHCIExtendedFeaturesInfo {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1429766-data
  data(): number;
  setData(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1434169-maxpage
  maxPage(): cocoascript.BluetoothHCIPageNumber;
  setMaxPage(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1429790-page
  page(): cocoascript.BluetoothHCIPageNumber;
  setPage(): void;
}
}

