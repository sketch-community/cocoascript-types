declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults
 */
interface BluetoothHCIEventReadRemoteSupportedFeaturesResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1434509-connectionhandle
  connectionHandle(): cocoascript.BluetoothConnectionHandle;
  setConnectionHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1428561-error
  error(): cocoascript.BluetoothHCIStatus;
  setError(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1431152-lmpfeatures
  lmpFeatures(): cocoascript.BluetoothHCISupportedFeatures;
  setLmpFeatures(): void;
}
}

