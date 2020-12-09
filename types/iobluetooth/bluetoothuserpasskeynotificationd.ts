declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification
 */
interface BluetoothUserPasskeyNotification {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification/1433747-deviceaddress
  deviceAddress(): cocoascript.BluetoothDeviceAddress;
  setDeviceAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification/1430704-passkey
  passkey(): cocoascript.BluetoothPasskey;
  setPasskey(): void;
}
}

