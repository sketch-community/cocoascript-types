declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification
   */
  interface BluetoothKeypressNotification {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification/1431148-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification/1429208-notificationtype
    notificationType(): cocoascript.BluetoothKeypressNotificationType;
    setNotificationType(): void;
  }
}
