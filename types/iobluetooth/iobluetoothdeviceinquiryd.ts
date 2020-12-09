declare namespace cocoascript {
/**
 * Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry
 */
interface IOBluetoothDeviceInquiry extends NSObject {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423401-initwithdelegate
  initWithDelegate(delegate: cocoascript.IOBluetoothDeviceInquiry):cocoascript.IOBluetoothDeviceInquiry;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423403-delegate
  delegate(): cocoascript.id;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423397-inquirylength
  inquiryLength(): number;
  setInquiryLength(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423413-searchtype
  searchType(): cocoascript.IOBluetoothDeviceSearchTypes;
  setSearchType(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423419-updatenewdevicenames
  updateNewDeviceNames(): cocoascript.BOOL;
  setUpdateNewDeviceNames(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423417-clearfounddevices
  clearFoundDevices():void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423411-founddevices
  foundDevices():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423399-setsearchcriteria
  setSearchCriteria_majorDeviceClass_minorDeviceClass(inServiceClassMajor: cocoascript.BluetoothServiceClassMajor, inMajorDeviceClass: cocoascript.BluetoothDeviceClassMajor, inMinorDeviceClass: cocoascript.BluetoothDeviceClassMinor):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423423-start
  start():cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423407-stop
  stop():cocoascript.IOReturn;
  // 
  alloc():cocoascript.IOBluetoothDeviceInquiry;
  // 
  init():cocoascript.IOBluetoothDeviceInquiry;
}
}
declare const IOBluetoothDeviceInquiry: cocoascript.IOBluetoothDeviceInquiry;

