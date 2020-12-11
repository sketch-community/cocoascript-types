declare namespace cocoascript {
  /**
   * A set of methods that your delegate object must implement to respond to the video editor.
   * doc://com.apple.documentation/documentation/uikit/uivideoeditorcontrollerdelegate
   */
  interface UIVideoEditorControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontrollerdelegate/1622336-videoeditorcontroller
    videoEditorController_didSaveEditedVideoToPath(editor: cocoascript.UIVideoEditorController, editedVideoPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontrollerdelegate/1622335-videoeditorcontrollerdidcancel
    videoEditorControllerDidCancel(editor: cocoascript.UIVideoEditorController):void;
    // doc://com.apple.documentation/documentation/uikit/uivideoeditorcontrollerdelegate/1622342-videoeditorcontroller
    videoEditorController_didFailWithError(editor: cocoascript.UIVideoEditorController, error: cocoascript.NSError):void;
  }
}
