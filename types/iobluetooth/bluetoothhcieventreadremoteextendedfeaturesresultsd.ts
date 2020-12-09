declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults
 */
interface BluetoothHCIEventReadRemoteExtendedFeaturesResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1429340-connectionhandle
  connectionHandle(): cocoascript.BluetoothConnectionHandle;
  setConnectionHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430054-error
  error(): cocoascript.BluetoothHCIStatus;
  setError(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1429792-lmpfeatures
  lmpFeatures(): cocoascript.BluetoothHCISupportedFeatures;
  setLmpFeatures(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430312-maxpage
  maxPage(): cocoascript.BluetoothHCIPageNumber;
  setMaxPage(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430493-page
  page(): cocoascript.BluetoothHCIPageNumber;
  setPage(): void;
}
}

