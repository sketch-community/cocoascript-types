declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate
   */
  interface IOBluetoothRFCOMMChannelDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434518-rfcommchannelclosed
    rfcommChannelClosed(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429160-rfcommchannelcontrolsignalschang
    rfcommChannelControlSignalsChanged(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1431822-rfcommchanneldata
    rfcommChannelData_data_length(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, dataPointer: void, dataLength: cocoascript.size_t):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1430179-rfcommchannelflowcontrolchanged
    rfcommChannelFlowControlChanged(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429633-rfcommchannelopencomplete
    rfcommChannelOpenComplete_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, error: cocoascript.IOReturn):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429752-rfcommchannelqueuespaceavailable
    rfcommChannelQueueSpaceAvailable(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434978-rfcommchannelwritecomplete
    rfcommChannelWriteComplete_refcon_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, refcon: void, error: cocoascript.IOReturn):void;
  }
}
