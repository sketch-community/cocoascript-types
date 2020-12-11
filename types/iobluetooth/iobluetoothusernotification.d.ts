declare namespace cocoascript {
  /**
   * Represents a registered notification.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotification
   */
  interface IOBluetoothUserNotification extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotification/1398108-unregister
    unregister():void;
    //
    alloc():cocoascript.IOBluetoothUserNotification;
    //
    init():cocoascript.IOBluetoothUserNotification;
  }
}

declare const IOBluetoothUserNotification: cocoascript.IOBluetoothUserNotification;
