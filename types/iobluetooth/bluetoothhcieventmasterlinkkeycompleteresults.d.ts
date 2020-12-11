declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults
   */
  interface BluetoothHCIEventMasterLinkKeyCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults/1428318-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults/1430706-keyflag
    keyFlag(): cocoascript.BluetoothKeyFlag;
    setKeyFlag(): void;
  }
}
