declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair
   */
  interface IOBluetoothDevicePair extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1431438-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1432295-device
    device():cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1434270-replypincode
    replyPINCode_PINCode(PINCodeSize: cocoascript.ByteCount, PINCode: cocoascript.BluetoothPINCode):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1429385-replyuserconfirmation
    replyUserConfirmation(reply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1433332-setdevice
    setDevice(inDevice: cocoascript.IOBluetoothDevice):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1430048-start
    start():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1433707-stop
    stop():void;
    //
    alloc():cocoascript.IOBluetoothDevicePair;
    //
    init():cocoascript.IOBluetoothDevicePair;
  }
}

declare const IOBluetoothDevicePair: cocoascript.IOBluetoothDevicePair;
