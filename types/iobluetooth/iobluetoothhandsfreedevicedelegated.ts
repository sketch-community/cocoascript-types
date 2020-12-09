declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate
 */
interface IOBluetoothHandsFreeDeviceDelegate extends IOBluetoothHandsFreeDelegate {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1428496-handsfree
  handsFree_batteryCharge(device: cocoascript.IOBluetoothHandsFreeDevice, batteryCharge: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433981-handsfree
  handsFree_callHoldState(device: cocoascript.IOBluetoothHandsFreeDevice, callHoldState: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429223-handsfree
  handsFree_callSetupMode(device: cocoascript.IOBluetoothHandsFreeDevice, callSetupMode: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432883-handsfree
  handsFree_currentCall(device: cocoascript.IOBluetoothHandsFreeDevice, currentCall: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429210-handsfree
  handsFree_incomingCallFrom(device: cocoascript.IOBluetoothHandsFreeDevice, number: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430510-handsfree
  handsFree_incomingSMS(device: cocoascript.IOBluetoothHandsFreeDevice, sms: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431339-handsfree
  handsFree_isCallActive(device: cocoascript.IOBluetoothHandsFreeDevice, isCallActive: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431758-handsfree
  handsFree_isRoaming(device: cocoascript.IOBluetoothHandsFreeDevice, isRoaming: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433100-handsfree
  handsFree_isServiceAvailable(device: cocoascript.IOBluetoothHandsFreeDevice, isServiceAvailable: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431746-handsfree
  handsFree_ringAttempt(device: cocoascript.IOBluetoothHandsFreeDevice, ringAttempt: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432799-handsfree
  handsFree_signalStrength(device: cocoascript.IOBluetoothHandsFreeDevice, signalStrength: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430067-handsfree
  handsFree_subscriberNumber(device: cocoascript.IOBluetoothHandsFreeDevice, subscriberNumber: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433815-handsfree
  handsFree_unhandledResultCode(device: cocoascript.IOBluetoothHandsFreeDevice, resultCode: cocoascript.NSString):void;
}
}

