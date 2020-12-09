declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults
 */
interface BluetoothHCIEventReadExtendedFeaturesResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults/1431814-connectionhandle
  connectionHandle(): cocoascript.BluetoothConnectionHandle;
  setConnectionHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults/1434284-supportedfeaturesinfo
  supportedFeaturesInfo(): cocoascript.BluetoothHCIExtendedFeaturesInfo;
  setSupportedFeaturesInfo(): void;
}
}

