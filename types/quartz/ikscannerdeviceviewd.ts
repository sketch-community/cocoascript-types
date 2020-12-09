declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview
 */
interface IKScannerDeviceView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504379-scannerdevice
  scannerDevice(): cocoascript.ICScannerDevice;
  setScannerDevice(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504321-mode
  mode(): cocoascript.IKScannerDeviceViewDisplayMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503437-hasdisplaymodeadvanced
  hasDisplayModeAdvanced(): cocoascript.BOOL;
  setHasDisplayModeAdvanced(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504506-hasdisplaymodesimple
  hasDisplayModeSimple(): cocoascript.BOOL;
  setHasDisplayModeSimple(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503830-displaysdownloadsdirectorycontro
  displaysDownloadsDirectoryControl(): cocoascript.BOOL;
  setDisplaysDownloadsDirectoryControl(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503585-downloadsdirectory
  downloadsDirectory(): cocoascript.NSURL;
  setDownloadsDirectory(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505017-transfermode
  transferMode(): cocoascript.IKScannerDeviceViewTransferMode;
  setTransferMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503744-documentname
  documentName(): cocoascript.NSString;
  setDocumentName(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505053-displayspostprocessapplicationco
  displaysPostProcessApplicationControl(): cocoascript.BOOL;
  setDisplaysPostProcessApplicationControl(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505215-postprocessapplication
  postProcessApplication(): cocoascript.NSURL;
  setPostProcessApplication(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504170-delegate
  delegate(): cocoascript.IKScannerDeviceViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504055-overviewcontrollabel
  overviewControlLabel(): cocoascript.NSString;
  setOverviewControlLabel(): void;
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504143-scancontrollabel
  scanControlLabel(): cocoascript.NSString;
  setScanControlLabel(): void;
  // 
  alloc():cocoascript.IKScannerDeviceView;
  // 
  init():cocoascript.IKScannerDeviceView;
}
}
declare const IKScannerDeviceView: cocoascript.IKScannerDeviceView;

