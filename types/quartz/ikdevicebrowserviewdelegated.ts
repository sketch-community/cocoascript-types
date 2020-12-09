declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate
 */
interface IKDeviceBrowserViewDelegate {
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate/1443059-devicebrowserview
  deviceBrowserView_selectionDidChange(deviceBrowserView: cocoascript.IKDeviceBrowserView, device: cocoascript.ICDevice):void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate/1443076-devicebrowserview
  deviceBrowserView_didEncounterError(deviceBrowserView: cocoascript.IKDeviceBrowserView, error: cocoascript.NSError):void;
}
}

