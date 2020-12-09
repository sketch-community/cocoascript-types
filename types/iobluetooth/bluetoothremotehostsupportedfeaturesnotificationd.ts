declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification
 */
interface BluetoothRemoteHostSupportedFeaturesNotification {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification/1429132-deviceaddress
  deviceAddress(): cocoascript.BluetoothDeviceAddress;
  setDeviceAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification/1429986-hostsupportedfeatures
  hostSupportedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
  setHostSupportedFeatures(): void;
}
}

