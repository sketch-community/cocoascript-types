declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults
   */
  interface BluetoothHCIReadLMPHandleResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults/1430070-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults/1429898-lmp_handle
    lmp_handle(): cocoascript.BluetoothLMPHandle;
    setLmp_handle(): void;
  }
}
