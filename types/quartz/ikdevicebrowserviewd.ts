declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview
 */
interface IKDeviceBrowserView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443071-selecteddevice
  selectedDevice(): cocoascript.ICDevice;
  setSelectedDevice(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443061-displayslocalcameras
  displaysLocalCameras(): cocoascript.BOOL;
  setDisplaysLocalCameras(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443056-displaysnetworkcameras
  displaysNetworkCameras(): cocoascript.BOOL;
  setDisplaysNetworkCameras(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443052-displayslocalscanners
  displaysLocalScanners(): cocoascript.BOOL;
  setDisplaysLocalScanners(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443078-displaysnetworkscanners
  displaysNetworkScanners(): cocoascript.BOOL;
  setDisplaysNetworkScanners(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443080-mode
  mode(): cocoascript.IKDeviceBrowserViewDisplayMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443054-delegate
  delegate(): cocoascript.IKDeviceBrowserViewDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.IKDeviceBrowserView;
  // 
  init():cocoascript.IKDeviceBrowserView;
}
}
declare const IKDeviceBrowserView: cocoascript.IKDeviceBrowserView;

