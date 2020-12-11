declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo
   */
  interface BluetoothHCIVersionInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1428632-hcirevision
    hciRevision(): number;
    setHciRevision(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1434821-hciversion
    hciVersion(): number;
    setHciVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1432347-lmpsubversion
    lmpSubVersion(): cocoascript.BluetoothLMPSubversion;
    setLmpSubVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1429564-lmpversion
    lmpVersion(): cocoascript.BluetoothLMPVersion;
    setLmpVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1432594-manufacturername
    manufacturerName(): cocoascript.BluetoothManufacturerName;
    setManufacturerName(): void;
  }
}
