declare namespace cocoascript {
/**
 * An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid
 */
interface IOBluetoothSDPUUID extends NSData {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1431398-initwithuuid16
  initWithUUID16(uuid16: cocoascript.BluetoothSDPUUID16):cocoascript.IOBluetoothSDPUUID;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1430416-initwithuuid32
  initWithUUID32(uuid32: cocoascript.BluetoothSDPUUID32):cocoascript.IOBluetoothSDPUUID;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1434310-classforarchiver
  classForArchiver():cocoascript.Class;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1431004-classforcoder
  classForCoder():cocoascript.Class;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1429202-classforportcoder
  classForPortCoder():cocoascript.Class;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1434307-getuuidwithlength
  getUUIDWithLength(newLength: number):cocoascript.IOBluetoothSDPUUID;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1428786-isequaltouuid
  isEqualToUUID(otherUUID: cocoascript.IOBluetoothSDPUUID):cocoascript.BOOL;
  // 
  alloc():cocoascript.IOBluetoothSDPUUID;
  // 
  init():cocoascript.IOBluetoothSDPUUID;
}
}
declare const IOBluetoothSDPUUID: cocoascript.IOBluetoothSDPUUID;

