declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults
   */
  interface BluetoothHCIEventModeChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1429686-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1432036-mode
    mode(): cocoascript.BluetoothHCIConnectionMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1429182-modeinterval
    modeInterval(): cocoascript.BluetoothHCIModeInterval;
    setModeInterval(): void;
  }
}
