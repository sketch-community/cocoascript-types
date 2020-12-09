declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate
 */
interface IOBluetoothHandsFreeDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427880-handsfree
  handsFree_connected(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427728-handsfree
  handsFree_disconnected(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427824-handsfree
  handsFree_scoConnectionClosed(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427868-handsfree
  handsFree_scoConnectionOpened(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
}
}

