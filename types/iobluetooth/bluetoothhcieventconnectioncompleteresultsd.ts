declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults
 */
interface BluetoothHCIEventConnectionCompleteResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1433937-connectionhandle
  connectionHandle(): cocoascript.BluetoothConnectionHandle;
  setConnectionHandle(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1434888-deviceaddress
  deviceAddress(): cocoascript.BluetoothDeviceAddress;
  setDeviceAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1430195-encryptionmode
  encryptionMode(): cocoascript.BluetoothHCIEncryptionMode;
  setEncryptionMode(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1430458-linktype
  linkType(): cocoascript.BluetoothLinkType;
  setLinkType(): void;
}
}

