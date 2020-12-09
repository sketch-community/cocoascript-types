declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate
 */
interface IOBluetoothHandsFreeAudioGatewayDelegate {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433943-handsfree
  handsFree_hangup(device: cocoascript.IOBluetoothHandsFreeAudioGateway, hangup: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433563-handsfree
  handsFree_redial(device: cocoascript.IOBluetoothHandsFreeAudioGateway, redial: cocoascript.NSNumber):void;
}
}

