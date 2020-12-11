declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults
   */
  interface BluetoothHCIEventReadRemoteVersionInfoResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1434522-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1431939-lmpsubversion
    lmpSubversion(): cocoascript.BluetoothLMPSubversion;
    setLmpSubversion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1430422-lmpversion
    lmpVersion(): cocoascript.BluetoothLMPVersion;
    setLmpVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1431958-manufacturername
    manufacturerName(): cocoascript.BluetoothManufacturerName;
    setManufacturerName(): void;
  }
}
