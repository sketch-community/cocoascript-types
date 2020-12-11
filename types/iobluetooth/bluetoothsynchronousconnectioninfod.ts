declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo
   */
  interface BluetoothSynchronousConnectionInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1429892-maxlatency
    maxLatency(): cocoascript.BluetoothHCIMaxLatency;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432573-packettype
    packetType(): cocoascript.BluetoothPacketType;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432830-receivebandwidth
    receiveBandWidth(): cocoascript.BluetoothHCIReceiveBandwidth;
    setReceiveBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432285-retransmissioneffort
    retransmissionEffort(): cocoascript.BluetoothHCIRetransmissionEffort;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1430658-transmitbandwidth
    transmitBandWidth(): cocoascript.BluetoothHCITransmitBandwidth;
    setTransmitBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1430372-voicesetting
    voiceSetting(): cocoascript.BluetoothHCIVoiceSetting;
    setVoiceSetting(): void;
  }
}
