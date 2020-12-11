declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate
   */
  interface IKScannerDeviceViewDelegate {
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1504462-scannerdeviceview
    scannerDeviceView_didScanToURL_fileData_error(scannerDeviceView: cocoascript.IKScannerDeviceView, url: cocoascript.NSURL, data: cocoascript.NSData, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1503476-scannerdeviceview
    scannerDeviceView_didEncounterError(scannerDeviceView: cocoascript.IKScannerDeviceView, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1503867-scannerdeviceview
    scannerDeviceView_didScanToBandData_scanInfo_error(scannerDeviceView: cocoascript.IKScannerDeviceView, data: cocoascript.ICScannerBandData, scanInfo: cocoascript.NSDictionary, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1504768-scannerdeviceview
    scannerDeviceView_didScanToURL_error(scannerDeviceView: cocoascript.IKScannerDeviceView, url: cocoascript.NSURL, error: cocoascript.NSError):void;
  }
}
