declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller
 */
interface NSTextCheckingController extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242753-initwithclient
  initWithClient(client: cocoascript.NSTextCheckingClient):cocoascript.NSTextCheckingController;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242748-client
  client(): cocoascript.NSTextCheckingClient;
  setClient(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242759-spellcheckerdocumenttag
  spellCheckerDocumentTag(): cocoascript.NSInteger;
  setSpellCheckerDocumentTag(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242743-changespelling
  changeSpelling(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242744-checkspelling
  checkSpelling(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242746-checktextinrange
  checkTextInRange_types_options(range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242745-checktextindocument
  checkTextInDocument(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242747-checktextinselection
  checkTextInSelection(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242749-considertextcheckingforrange
  considerTextCheckingForRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242750-didchangeselectedrange
  didChangeSelectedRange():void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242751-didchangetextinrange
  didChangeTextInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242752-ignorespelling
  ignoreSpelling(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242754-insertedtextinrange
  insertedTextInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242755-invalidate
  invalidate():void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242756-menuatindex
  menuAtIndex_clickedOnSelection_effectiveRange(location: cocoascript.NSUInteger, clickedOnSelection: cocoascript.BOOL, effectiveRange: cocoascript.NSRangePointer):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242757-orderfrontsubstitutionspanel
  orderFrontSubstitutionsPanel(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242758-showguesspanel
  showGuessPanel(sender: cocoascript.NSTextCheckingController):void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242760-updatecandidates
  updateCandidates():void;
  // doc://com.apple.documentation/documentation/appkit/nstextcheckingcontroller/3242761-validannotations
  validAnnotations():cocoascript.NSAttributedStringKey;
  // 
  alloc():cocoascript.NSTextCheckingController;
  // 
  init():cocoascript.NSTextCheckingController;
}
}
declare const NSTextCheckingController: cocoascript.NSTextCheckingController;

