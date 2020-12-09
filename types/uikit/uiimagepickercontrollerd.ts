declare namespace cocoascript {
/**
 * A view controller that manages the system interfaces for taking pictures, recording movies, and choosing items from the user's media library. 
 * doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller
 */
interface UIImagePickerController extends UINavigationController {
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619145-delegate
  delegate(): cocoascript.UIImagePickerControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619167-sourcetype
  sourceType(): cocoascript.UIImagePickerControllerSourceType;
  setSourceType(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619173-mediatypes
  mediaTypes(): cocoascript.NSString;
  setMediaTypes(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619137-allowsediting
  allowsEditing(): cocoascript.BOOL;
  setAllowsEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619115-allowsimageediting
  allowsImageEditing(): cocoascript.BOOL;
  setAllowsImageEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619154-videoquality
  videoQuality(): cocoascript.UIImagePickerControllerQualityType;
  setVideoQuality(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619146-videomaximumduration
  videoMaximumDuration(): cocoascript.NSTimeInterval;
  setVideoMaximumDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619129-showscameracontrols
  showsCameraControls(): cocoascript.BOOL;
  setShowsCameraControls(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619113-cameraoverlayview
  cameraOverlayView(): cocoascript.UIView;
  setCameraOverlayView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619142-cameraviewtransform
  cameraViewTransform(): cocoascript.CGAffineTransform;
  setCameraViewTransform(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619160-takepicture
  takePicture():void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619123-startvideocapture
  startVideoCapture():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619140-stopvideocapture
  stopVideoCapture():void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619117-cameradevice
  cameraDevice(): cocoascript.UIImagePickerControllerCameraDevice;
  setCameraDevice(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619141-cameracapturemode
  cameraCaptureMode(): cocoascript.UIImagePickerControllerCameraCaptureMode;
  setCameraCaptureMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/1619124-cameraflashmode
  cameraFlashMode(): cocoascript.UIImagePickerControllerCameraFlashMode;
  setCameraFlashMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/2897484-imageexportpreset
  imageExportPreset(): cocoascript.UIImagePickerControllerImageURLExportPreset;
  setImageExportPreset(): void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontroller/2890964-videoexportpreset
  videoExportPreset(): cocoascript.NSString;
  setVideoExportPreset(): void;
  // 
  alloc():cocoascript.UIImagePickerController;
  // 
  init():cocoascript.UIImagePickerController;
}
}
declare const UIImagePickerController: cocoascript.UIImagePickerController;

