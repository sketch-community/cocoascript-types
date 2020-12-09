declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams
 */
interface BluetoothHCISetupSynchronousConnectionParams {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1433424-maxlatency
  maxLatency(): number;
  setMaxLatency(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1430801-packettype
  packetType(): number;
  setPacketType(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1430537-retransmissioneffort
  retransmissionEffort(): number;
  setRetransmissionEffort(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1429974-voicesetting
  voiceSetting(): number;
  setVoiceSetting(): void;
}
}

