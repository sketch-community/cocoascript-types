declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite
   */
  interface BluetoothHCICurrentInquiryAccessCodesForWrite {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite/1429848-codes
    codes(): number;
    setCodes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite/1433549-count
    count(): cocoascript.BluetoothHCIInquiryAccessCodeCount;
    setCount(): void;
  }
}
