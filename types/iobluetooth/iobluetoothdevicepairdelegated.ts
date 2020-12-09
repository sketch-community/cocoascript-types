declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate
 */
interface IOBluetoothDevicePairDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432152-devicepairingconnecting
  devicePairingConnecting(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1434609-devicepairingfinished
  devicePairingFinished_error(sender: cocoascript.IOBluetoothDevicePairDelegate, error: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432539-devicepairingpincoderequest
  devicePairingPINCodeRequest(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431489-devicepairingstarted
  devicePairingStarted(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431902-devicepairinguserconfirmationreq
  devicePairingUserConfirmationRequest_numericValue(sender: cocoascript.IOBluetoothDevicePairDelegate, numericValue: cocoascript.BluetoothNumericValue):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432500-devicepairinguserpasskeynotifica
  devicePairingUserPasskeyNotification_passkey(sender: cocoascript.IOBluetoothDevicePairDelegate, passkey: cocoascript.BluetoothPasskey):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1429233-devicesimplepairingcomplete
  deviceSimplePairingComplete_status(sender: cocoascript.IOBluetoothDevicePairDelegate, status: cocoascript.BluetoothHCIEventStatus):void;
}
}

