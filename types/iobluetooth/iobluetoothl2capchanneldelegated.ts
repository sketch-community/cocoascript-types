declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate
 */
interface IOBluetoothL2CAPChannelDelegate {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1433766-l2capchannelclosed
  l2capChannelClosed(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431868-l2capchanneldata
  l2capChannelData_data_length(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, dataPointer: void, dataLength: cocoascript.size_t):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1430363-l2capchannelopencomplete
  l2capChannelOpenComplete_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, error: cocoascript.IOReturn):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431728-l2capchannelqueuespaceavailable
  l2capChannelQueueSpaceAvailable(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1428740-l2capchannelreconfigured
  l2capChannelReconfigured(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431099-l2capchannelwritecomplete
  l2capChannelWriteComplete_refcon_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, refcon: void, error: cocoascript.IOReturn):void;
}
}

