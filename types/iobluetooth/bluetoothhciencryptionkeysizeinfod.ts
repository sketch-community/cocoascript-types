declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo
   */
  interface BluetoothHCIEncryptionKeySizeInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo/3197683-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo/3197684-keysize
    keySize(): cocoascript.BluetoothHCIEncryptionKeySize;
    setKeySize(): void;
  }
}
