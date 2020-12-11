declare namespace cocoascript {
  /**
   * This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller
   */
  interface IOBluetoothHostController extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1434248-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1429740-powerstate
    powerState(): cocoascript.BluetoothHCIPowerState;
    setPowerState(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1434703-addressasstring
    addressAsString():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1428536-classofdevice
    classOfDevice():cocoascript.BluetoothClassOfDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1431310-nameasstring
    nameAsString():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1433813-setclassofdevice
    setClassOfDevice_forTimeInterval(classOfDevice: cocoascript.BluetoothClassOfDevice, seconds: cocoascript.NSTimeInterval):cocoascript.IOReturn;
    //
    alloc():cocoascript.IOBluetoothHostController;
    //
    init():cocoascript.IOBluetoothHostController;
  }
}

declare const IOBluetoothHostController: cocoascript.IOBluetoothHostController;
