declare namespace cocoascript {
  /**
   * An object that implements the standard loading and transition animations for a document browser.
   * doc://com.apple.documentation/documentation/uikit/uidocumentbrowsertransitioncontroller
   */
  interface UIDocumentBrowserTransitionController extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowsertransitioncontroller/2874195-loadingprogress
    loadingProgress(): cocoascript.NSProgress;
    setLoadingProgress(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowsertransitioncontroller/2874176-targetview
    targetView(): cocoascript.UIView;
    setTargetView(): void;
    //
    alloc():cocoascript.UIDocumentBrowserTransitionController;
    //
    init():cocoascript.UIDocumentBrowserTransitionController;
  }
}

declare const UIDocumentBrowserTransitionController: cocoascript.UIDocumentBrowserTransitionController;
