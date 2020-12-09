declare namespace cocoascript {
/**
 * Bits to determine what Bluetooth devices to search for
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes
 */
interface IOBluetoothDeviceSearchDeviceAttributes {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1432321-address
  address(): cocoascript.BluetoothDeviceAddress;
  setAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1430643-deviceclassmajor
  deviceClassMajor(): cocoascript.BluetoothDeviceClassMajor;
  setDeviceClassMajor(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1434594-deviceclassminor
  deviceClassMinor(): cocoascript.BluetoothDeviceClassMinor;
  setDeviceClassMinor(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1434920-name
  name(): cocoascript.BluetoothDeviceName;
  setName(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1429176-serviceclassmajor
  serviceClassMajor(): cocoascript.BluetoothServiceClassMajor;
  setServiceClassMajor(): void;
}
}

