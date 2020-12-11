declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nstextcheckingclient
   */
  interface NSTextCheckingClient extends NSTextInputClient {
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242719-addannotations
    addAnnotations_range(annotations: cocoascript.NSString, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242720-annotatedsubstringforproposedran
    annotatedSubstringForProposedRange_actualRange(range: cocoascript.NSRange, actualRange: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242721-candidatelisttouchbaritem
    candidateListTouchBarItem():cocoascript.NSCandidateListTouchBarItem;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242722-removeannotation
    removeAnnotation_range(annotationName: cocoascript.NSAttributedStringKey, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242723-replacecharactersinrange
    replaceCharactersInRange_withAnnotatedString(range: cocoascript.NSRange, annotatedString: cocoascript.NSAttributedString):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242724-selectandshowrange
    selectAndShowRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242725-setannotations
    setAnnotations_range(annotations: cocoascript.NSString, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcheckingclient/3242726-viewforrange
    viewForRange_firstRect_actualRange(range: cocoascript.NSRange, firstRect: cocoascript.NSRectPointer, actualRange: cocoascript.NSRangePointer):cocoascript.NSView;
  }
}
