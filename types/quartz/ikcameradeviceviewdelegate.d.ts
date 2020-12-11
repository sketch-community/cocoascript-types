declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate
   */
  interface IKCameraDeviceViewDelegate {
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1503524-cameradeviceview
    cameraDeviceView_didDownloadFile_location_fileData_error(cameraDeviceView: cocoascript.IKCameraDeviceView, file: cocoascript.ICCameraFile, url: cocoascript.NSURL, data: cocoascript.NSData, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1505308-cameradeviceviewselectiondidchan
    cameraDeviceViewSelectionDidChange(cameraDeviceView: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1505239-cameradeviceview
    cameraDeviceView_didEncounterError(cameraDeviceView: cocoascript.IKCameraDeviceView, error: cocoascript.NSError):void;
  }
}
