declare namespace cocoascript {
  /**
   * A set of methods that you implement to track when the user selects a document or destination, or to track when the operation is canceled.
   * doc://com.apple.documentation/documentation/uikit/uidocumentpickerdelegate
   */
  interface UIDocumentPickerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidocumentpickerdelegate/2902364-documentpicker
    documentPicker_didPickDocumentsAtURLs(controller: cocoascript.UIDocumentPickerViewController, urls: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentpickerdelegate/1618679-documentpickerwascancelled
    documentPickerWasCancelled(controller: cocoascript.UIDocumentPickerViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentpickerdelegate/1618680-documentpicker
    documentPicker_didPickDocumentAtURL(controller: cocoascript.UIDocumentPickerViewController, url: cocoascript.NSURL):void;
  }
}
