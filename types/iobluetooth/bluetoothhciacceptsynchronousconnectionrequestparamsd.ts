declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams
   */
  interface BluetoothHCIAcceptSynchronousConnectionRequestParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1431571-contentformat
    contentFormat(): number;
    setContentFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1432730-maxlatency
    maxLatency(): number;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1434626-packettype
    packetType(): number;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1432275-retransmissioneffort
    retransmissionEffort(): number;
    setRetransmissionEffort(): void;
  }
}
