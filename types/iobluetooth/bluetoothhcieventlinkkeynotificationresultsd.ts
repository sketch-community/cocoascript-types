declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults
 */
interface BluetoothHCIEventLinkKeyNotificationResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1428482-deviceaddress
  deviceAddress(): cocoascript.BluetoothDeviceAddress;
  setDeviceAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1430085-keytype
  keyType(): cocoascript.BluetoothKeyType;
  setKeyType(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1432038-linkkey
  linkKey(): cocoascript.BluetoothKey;
  setLinkKey(): void;
}
}

