declare namespace cocoascript {
  /**
   * A set of methods that you must implement to track user interactions with a document menu view controller.
   * doc://com.apple.documentation/documentation/uikit/uidocumentmenudelegate
   */
  interface UIDocumentMenuDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidocumentmenudelegate/1614188-documentmenu
    documentMenu_didPickDocumentPicker(documentMenu: cocoascript.UIDocumentMenuViewController, documentPicker: cocoascript.UIDocumentPickerViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentmenudelegate/1614190-documentmenuwascancelled
    documentMenuWasCancelled(documentMenu: cocoascript.UIDocumentMenuViewController):void;
  }
}
