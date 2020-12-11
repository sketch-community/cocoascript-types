declare namespace cocoascript {
  /**
   * The protocol you implement to respond as the user interacts with the document browser.
   * doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate
   */
  interface UIDocumentBrowserViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874199-documentbrowser
    documentBrowser_didRequestDocumentCreationWithHandler(controller: cocoascript.UIDocumentBrowserViewController, importHandler: cocoascript.UIDocumentBrowserImportMode):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874196-documentbrowser
    documentBrowser_didImportDocumentAtURL_toDestinationURL(controller: cocoascript.UIDocumentBrowserViewController, sourceURL: cocoascript.NSURL, destinationURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874190-documentbrowser
    documentBrowser_failedToImportDocumentAtURL_error(controller: cocoascript.UIDocumentBrowserViewController, documentURL: cocoascript.NSURL, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/3019588-documentbrowser
    documentBrowser_didPickDocumentsAtURLs(controller: cocoascript.UIDocumentBrowserViewController, documentURLs: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874186-documentbrowser
    documentBrowser_willPresentActivityViewController(controller: cocoascript.UIDocumentBrowserViewController, activityViewController: cocoascript.UIActivityViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874194-documentbrowser
    documentBrowser_applicationActivitiesForDocumentURLs(controller: cocoascript.UIDocumentBrowserViewController, documentURLs: cocoascript.NSURL):cocoascript.UIActivity;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/2874187-documentbrowser
    documentBrowser_didPickDocumentURLs(controller: cocoascript.UIDocumentBrowserViewController, documentURLs: cocoascript.NSURL):void;
  }
}
