declare namespace cocoascript {
/**
 * An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
 * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel
 */
interface IOBluetoothL2CAPChannel extends IOBluetoothObject {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1432783-psm
  PSM(): cocoascript.BluetoothL2CAPPSM;
  setPSM(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433430-device
  device(): cocoascript.IOBluetoothDevice;
  setDevice(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431269-incomingmtu
  incomingMTU(): cocoascript.BluetoothL2CAPMTU;
  setIncomingMTU(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1434996-localchannelid
  localChannelID(): cocoascript.BluetoothL2CAPChannelID;
  setLocalChannelID(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1428413-objectid
  objectID(): cocoascript.IOBluetoothObjectID;
  setObjectID(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433700-outgoingmtu
  outgoingMTU(): cocoascript.BluetoothL2CAPMTU;
  setOutgoingMTU(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1434793-remotechannelid
  remoteChannelID(): cocoascript.BluetoothL2CAPChannelID;
  setRemoteChannelID(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433617-closechannel
  closeChannel():cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431693-delegate
  delegate():cocoascript.IOBluetoothL2CAPChannel;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1435024-isincoming
  isIncoming():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1432240-registerforchannelclosenotificat
  registerForChannelCloseNotification_selector(observer: cocoascript.IOBluetoothL2CAPChannel, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430453-requestremotemtu
  requestRemoteMTU(remoteMTU: cocoascript.BluetoothL2CAPMTU):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430338-setdelegate
  setDelegate(channelDelegate: cocoascript.IOBluetoothL2CAPChannel):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430853-setdelegate
  setDelegate_withConfiguration(channelDelegate: cocoascript.IOBluetoothL2CAPChannel, channelConfiguration: cocoascript.NSDictionary):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431569-writeasync
  writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/2980981-writeasynctrap
  writeAsyncTrap_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433699-writesync
  writeSync_length(data: void, length: cocoascript.UInt16):cocoascript.IOReturn;
  // 
  alloc():cocoascript.IOBluetoothL2CAPChannel;
  // 
  init():cocoascript.IOBluetoothL2CAPChannel;
}
}
declare const IOBluetoothL2CAPChannel: cocoascript.IOBluetoothL2CAPChannel;

