declare namespace cocoascript {
  /**
   * A user interface that manages the printing of documents, images, and other printable content in iOS.
   * doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller
   */
  interface UIPrintInteractionController extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618159-sharedprintcontroller
    sharedPrintController(): cocoascript.UIPrintInteractionController;
    setSharedPrintController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618153-delegate
    delegate(): cocoascript.UIPrintInteractionControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618183-printingavailable
    printingAvailable(): cocoascript.BOOL;
    setPrintingAvailable(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618150-printableutis
    printableUTIs(): cocoascript.NSString;
    setPrintableUTIs(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618157-printingitem
    printingItem(): cocoascript.id;
    setPrintingItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618156-printingitems
    printingItems(): cocoascript.NSArray;
    setPrintingItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618148-printpagerenderer
    printPageRenderer(): cocoascript.UIPrintPageRenderer;
    setPrintPageRenderer(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618152-printformatter
    printFormatter(): cocoascript.UIPrintFormatter;
    setPrintFormatter(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618149-presentanimated
    presentAnimated_completionHandler(animated: cocoascript.BOOL, completion: cocoascript.UIPrintInteractionCompletionHandler):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618169-presentfrombarbuttonitem
    presentFromBarButtonItem_animated_completionHandler(item: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL, completion: cocoascript.UIPrintInteractionCompletionHandler):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618176-presentfromrect
    presentFromRect_inView_animated_completionHandler(rect: cocoascript.CGRect, view: cocoascript.UIView, animated: cocoascript.BOOL, completion: cocoascript.UIPrintInteractionCompletionHandler):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618166-dismissanimated
    dismissAnimated(animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618174-printtoprinter
    printToPrinter_completionHandler(printer: cocoascript.UIPrinter, completion: cocoascript.UIPrintInteractionCompletionHandler):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618171-printinfo
    printInfo(): cocoascript.UIPrintInfo;
    setPrintInfo(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618165-printpaper
    printPaper(): cocoascript.UIPrintPaper;
    setPrintPaper(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618177-showsnumberofcopies
    showsNumberOfCopies(): cocoascript.BOOL;
    setShowsNumberOfCopies(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618164-showspaperselectionforloadedpape
    showsPaperSelectionForLoadedPapers(): cocoascript.BOOL;
    setShowsPaperSelectionForLoadedPapers(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinteractioncontroller/1618180-showspagerange
    showsPageRange(): cocoascript.BOOL;
    setShowsPageRange(): void;
    //
    alloc():cocoascript.UIPrintInteractionController;
    //
    init():cocoascript.UIPrintInteractionController;
  }
}

declare const UIPrintInteractionController: cocoascript.UIPrintInteractionController;
