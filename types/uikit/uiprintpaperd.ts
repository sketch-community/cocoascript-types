declare namespace cocoascript {
  /**
   * The size of paper for a print job, and the rectangular area that the content prints within.
   * doc://com.apple.documentation/documentation/uikit/uiprintpaper
   */
  interface UIPrintPaper extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiprintpaper/1623529-papersize
    paperSize(): cocoascript.CGSize;
    setPaperSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintpaper/1623530-printablerect
    printableRect(): cocoascript.CGRect;
    setPrintableRect(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintpaper/1623528-printrect
    printRect():cocoascript.CGRect;
    //
    alloc():cocoascript.UIPrintPaper;
    //
    init():cocoascript.UIPrintPaper;
  }
}

declare const UIPrintPaper: cocoascript.UIPrintPaper;
