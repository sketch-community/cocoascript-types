declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions
 */
interface BluetoothL2CAPRetransmissionAndFlowControlOptions {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1434784-flags
  flags(): number;
  setFlags(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1433588-maxpdupayloadsize
  maxPDUPayloadSize(): number;
  setMaxPDUPayloadSize(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1430318-maxtransmit
  maxTransmit(): number;
  setMaxTransmit(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1431055-monitortimeout
  monitorTimeout(): number;
  setMonitorTimeout(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1430787-retransmissiontimeout
  retransmissionTimeout(): number;
  setRetransmissionTimeout(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1433714-txwindowsize
  txWindowSize(): number;
  setTxWindowSize(): void;
}
}

