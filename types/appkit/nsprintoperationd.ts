declare namespace cocoascript {
  /**
   * An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.
   * doc://com.apple.documentation/documentation/appkit/nsprintoperation
   */
  interface NSPrintOperation extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1524255-currentoperation
    currentOperation(): cocoascript.NSPrintOperation;
    setCurrentOperation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1534206-copyingoperation
    copyingOperation(): cocoascript.BOOL;
    setCopyingOperation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1535187-printinfo
    printInfo(): cocoascript.NSPrintInfo;
    setPrintInfo(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1530311-view
    view(): cocoascript.NSView;
    setView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1529716-preferredrenderingquality
    preferredRenderingQuality(): cocoascript.NSPrintRenderingQuality;
    setPreferredRenderingQuality(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1532039-runoperation
    runOperation():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1532065-runoperationmodalforwindow
    runOperationModalForWindow_delegate_didRunSelector_contextInfo(docWindow: cocoascript.NSWindow, delegate: cocoascript.NSPrintOperation, didRunSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1534126-cleanupoperation
    cleanUpOperation():void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1530693-deliverresult
    deliverResult():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1530666-showsprintpanel
    showsPrintPanel(): cocoascript.BOOL;
    setShowsPrintPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1535665-showsprogresspanel
    showsProgressPanel(): cocoascript.BOOL;
    setShowsProgressPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1535322-jobtitle
    jobTitle(): cocoascript.NSString;
    setJobTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1529626-printpanel
    printPanel(): cocoascript.NSPrintPanel;
    setPrintPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1526838-pdfpanel
    PDFPanel(): cocoascript.NSPDFPanel;
    setPDFPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1534162-context
    context(): cocoascript.NSGraphicsContext;
    setContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1526832-createcontext
    createContext():cocoascript.NSGraphicsContext;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1529896-destroycontext
    destroyContext():void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1534881-currentpage
    currentPage(): cocoascript.NSInteger;
    setCurrentPage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1524601-pagerange
    pageRange(): cocoascript.NSRange;
    setPageRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1532990-pageorder
    pageOrder(): cocoascript.NSPrintingPageOrder;
    setPageOrder(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1532487-canspawnseparatethread
    canSpawnSeparateThread(): cocoascript.BOOL;
    setCanSpawnSeparateThread(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579094-jobstylehint
    jobStyleHint():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579097-setjobstylehint
    setJobStyleHint(hint: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579098-accessoryview
    accessoryView():cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579096-setaccessoryview
    setAccessoryView(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579099-showpanels
    showPanels():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperation/1579095-setshowpanels
    setShowPanels(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsprintoperationexistsexception
    NSPrintOperationExistsException(): cocoascript.NSExceptionName;
    setNSPrintOperationExistsException(): void;
    //
    alloc():cocoascript.NSPrintOperation;
    //
    init():cocoascript.NSPrintOperation;
  }
}

declare const NSPrintOperation: cocoascript.NSPrintOperation;
