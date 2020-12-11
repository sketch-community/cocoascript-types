declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult
   */
  interface BluetoothHCIInquiryResult {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1433781-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1429819-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1428792-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1432705-pagescanmode
    pageScanMode(): cocoascript.BluetoothHCIPageScanMode;
    setPageScanMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1433231-pagescanperiodmode
    pageScanPeriodMode(): cocoascript.BluetoothHCIPageScanPeriodMode;
    setPageScanPeriodMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1432291-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
  }
}
