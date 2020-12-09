declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikcameradeviceview
 */
interface IKCameraDeviceView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503753-cameradevice
  cameraDevice(): cocoascript.ICCameraDevice;
  setCameraDevice(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504002-iconsize
  iconSize(): cocoascript.NSUInteger;
  setIconSize(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504881-mode
  mode(): cocoascript.IKCameraDeviceViewDisplayMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504417-hasdisplaymodeicon
  hasDisplayModeIcon(): cocoascript.BOOL;
  setHasDisplayModeIcon(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503413-hasdisplaymodetable
  hasDisplayModeTable(): cocoascript.BOOL;
  setHasDisplayModeTable(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503771-transfermode
  transferMode(): cocoascript.IKCameraDeviceViewTransferMode;
  setTransferMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504639-candownloadselecteditems
  canDownloadSelectedItems(): cocoascript.BOOL;
  setCanDownloadSelectedItems(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503702-downloadsdirectory
  downloadsDirectory(): cocoascript.NSURL;
  setDownloadsDirectory(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504833-downloadselecteditems
  downloadSelectedItems(sender: cocoascript.IKCameraDeviceView):void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504326-downloadallitems
  downloadAllItems(sender: cocoascript.IKCameraDeviceView):void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503822-downloadselectedcontrollabel
  downloadSelectedControlLabel(): cocoascript.NSString;
  setDownloadSelectedControlLabel(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504281-downloadallcontrollabel
  downloadAllControlLabel(): cocoascript.NSString;
  setDownloadAllControlLabel(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1505006-displaysdownloadsdirectorycontro
  displaysDownloadsDirectoryControl(): cocoascript.BOOL;
  setDisplaysDownloadsDirectoryControl(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503644-displayspostprocessapplicationco
  displaysPostProcessApplicationControl(): cocoascript.BOOL;
  setDisplaysPostProcessApplicationControl(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504227-postprocessapplication
  postProcessApplication(): cocoascript.NSURL;
  setPostProcessApplication(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504949-candeleteselecteditems
  canDeleteSelectedItems(): cocoascript.BOOL;
  setCanDeleteSelectedItems(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504333-deleteselecteditems
  deleteSelectedItems(sender: cocoascript.IKCameraDeviceView):void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503804-selectindexes
  selectIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extend: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504546-selectedindexes
  selectedIndexes():cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504315-delegate
  delegate(): cocoascript.IKCameraDeviceViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503947-canrotateselecteditemsleft
  canRotateSelectedItemsLeft(): cocoascript.BOOL;
  setCanRotateSelectedItemsLeft(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503525-canrotateselecteditemsright
  canRotateSelectedItemsRight(): cocoascript.BOOL;
  setCanRotateSelectedItemsRight(): void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503662-rotateleft
  rotateLeft(sender: cocoascript.IKCameraDeviceView):void;
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1505123-rotateright
  rotateRight(sender: cocoascript.IKCameraDeviceView):void;
  // 
  alloc():cocoascript.IKCameraDeviceView;
  // 
  init():cocoascript.IKCameraDeviceView;
}
}
declare const IKCameraDeviceView: cocoascript.IKCameraDeviceView;

