declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults
   */
  interface BluetoothHCIEventPageScanModeChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults/1428708-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults/1434333-pagescanmode
    pageScanMode(): cocoascript.BluetoothPageScanMode;
    setPageScanMode(): void;
  }
}
