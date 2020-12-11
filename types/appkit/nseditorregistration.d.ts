declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nseditorregistration
   */
  interface NSEditorRegistration extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nseditorregistration/3005188-objectdidbeginediting
    objectDidBeginEditing(editor: cocoascript.NSEditor):void;
    // doc://com.apple.documentation/documentation/appkit/nseditorregistration/3005189-objectdidendediting
    objectDidEndEditing(editor: cocoascript.NSEditor):void;
  }
}
