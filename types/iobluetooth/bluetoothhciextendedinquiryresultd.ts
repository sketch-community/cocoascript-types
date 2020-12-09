declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult
 */
interface BluetoothHCIExtendedInquiryResult {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1431045-rssivalue
  RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
  setRSSIValue(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1430354-classofdevice
  classOfDevice(): cocoascript.BluetoothClassOfDevice;
  setClassOfDevice(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432232-clockoffset
  clockOffset(): cocoascript.BluetoothClockOffset;
  setClockOffset(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432527-deviceaddress
  deviceAddress(): cocoascript.BluetoothDeviceAddress;
  setDeviceAddress(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432761-extendedinquiryresponse
  extendedInquiryResponse(): cocoascript.BluetoothHCIExtendedInquiryResponse;
  setExtendedInquiryResponse(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1434761-numberofreponses
  numberOfReponses(): number;
  setNumberOfReponses(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1429705-pagescanrepetitionmode
  pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
  setPageScanRepetitionMode(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1430917-reserved
  reserved(): number;
  setReserved(): void;
}
}

