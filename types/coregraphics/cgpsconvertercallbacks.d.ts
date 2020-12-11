declare namespace cocoascript {
  /**
   * A structure for holding the callbacks provided when you create a PostScript converter object.
   * doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks
   */
  interface CGPSConverterCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1456036-begindocument
    beginDocument(): cocoascript.CGPSConverterBeginDocumentCallback;
    setBeginDocument(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454345-beginpage
    beginPage(): cocoascript.CGPSConverterBeginPageCallback;
    setBeginPage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454481-enddocument
    endDocument(): cocoascript.CGPSConverterEndDocumentCallback;
    setEndDocument(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454830-endpage
    endPage(): cocoascript.CGPSConverterEndPageCallback;
    setEndPage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455859-notemessage
    noteMessage(): cocoascript.CGPSConverterMessageCallback;
    setNoteMessage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455344-noteprogress
    noteProgress(): cocoascript.CGPSConverterProgressCallback;
    setNoteProgress(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455599-releaseinfo
    releaseInfo(): cocoascript.CGPSConverterReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
