declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nseditor
   */
  interface NSEditor extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nseditor/3005183-commitediting
    commitEditing():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nseditor/3005185-commiteditingwithdelegate
    commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: cocoascript.NSEditor, didCommitSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nseditor/3005184-commiteditingandreturnerror
    commitEditingAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nseditor/3005186-discardediting
    discardEditing():void;
  }
}
