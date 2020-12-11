declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult
   */
  interface BluetoothHCIInquiryWithRSSIResult {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1428639-rssivalue
    RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
    setRSSIValue(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1433847-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1433335-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1431687-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1432813-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1434628-reserved
    reserved(): number;
    setReserved(): void;
  }
}
