declare namespace cocoascript {
  /**
   * A view controller that manages the system interface for trimming video frames and encoding a previously recorded movie.
   * doc://com.apple.documentation/documentation/uikit/uivideoeditorcontroller
   */
  interface UIVideoEditorController extends UINavigationController {
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontroller/1622341-delegate
    delegate(): cocoascript.UIVideoEditorControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontroller/1622338-videomaximumduration
    videoMaximumDuration(): cocoascript.NSTimeInterval;
    setVideoMaximumDuration(): void;
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontroller/1622343-videopath
    videoPath(): cocoascript.NSString;
    setVideoPath(): void;
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontroller/1622339-videoquality
    videoQuality(): cocoascript.UIImagePickerControllerQualityType;
    setVideoQuality(): void;
    //
    alloc():cocoascript.UIVideoEditorController;
    //
    init():cocoascript.UIVideoEditorController;
  }
}

declare const UIVideoEditorController: cocoascript.UIVideoEditorController;
