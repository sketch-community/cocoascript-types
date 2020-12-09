declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes
 */
interface IOBluetoothDeviceSearchAttributes {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1429237-attributelist
  attributeList(): cocoascript.IOBluetoothDeviceSearchDeviceAttributes;
  setAttributeList(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1429248-deviceattributecount
  deviceAttributeCount(): cocoascript.IOItemCount;
  setDeviceAttributeCount(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1430829-maxresults
  maxResults(): cocoascript.IOItemCount;
  setMaxResults(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1431408-options
  options(): cocoascript.IOBluetoothDeviceSearchOptions;
  setOptions(): void;
}
}

