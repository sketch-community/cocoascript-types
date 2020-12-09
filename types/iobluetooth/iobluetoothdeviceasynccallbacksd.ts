declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks
 */
interface IOBluetoothDeviceAsyncCallbacks {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434956-connectioncomplete
  connectionComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434878-remotenamerequestcomplete
  remoteNameRequestComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434694-sdpquerycomplete
  sdpQueryComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
}
}

