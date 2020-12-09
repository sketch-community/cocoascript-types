declare namespace cocoascript {
/**
 * An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel
 */
interface IOBluetoothRFCOMMChannel extends IOBluetoothObject {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428722-closechannel
  closeChannel():cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1432238-delegate
  delegate():cocoascript.IOBluetoothRFCOMMChannel;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431850-getchannelid
  getChannelID():cocoascript.BluetoothRFCOMMChannelID;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1432615-getdevice
  getDevice():cocoascript.IOBluetoothDevice;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428996-getmtu
  getMTU():cocoascript.BluetoothRFCOMMMTU;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434526-getobjectid
  getObjectID():cocoascript.IOBluetoothObjectID;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434600-getrfcommchannelref
  getRFCOMMChannelRef():cocoascript.IOBluetoothRFCOMMChannelRef;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430334-isincoming
  isIncoming():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430708-isopen
  isOpen():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434740-istransmissionpaused
  isTransmissionPaused():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428800-registerforchannelclosenotificat
  registerForChannelCloseNotification_selector(observer: cocoascript.IOBluetoothRFCOMMChannel, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434323-sendremotelinestatus
  sendRemoteLineStatus(lineStatus: cocoascript.BluetoothRFCOMMLineStatus):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430417-setdelegate
  setDelegate(delegate: cocoascript.IOBluetoothRFCOMMChannel):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431119-setserialparameters
  setSerialParameters_dataBits_parity_stopBits(speed: cocoascript.UInt32, nBits: cocoascript.UInt8, parity: cocoascript.BluetoothRFCOMMParityType, bitStop: cocoascript.UInt8):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430167-writeasync
  writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434633-writesync
  writeSync_length(data: void, length: cocoascript.UInt16):cocoascript.IOReturn;
  // 
  alloc():cocoascript.IOBluetoothRFCOMMChannel;
  // 
  init():cocoascript.IOBluetoothRFCOMMChannel;
}
}
declare const IOBluetoothRFCOMMChannel: cocoascript.IOBluetoothRFCOMMChannel;

