declare namespace cocoascript {
/**
 * A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
 * doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem
 */
interface NSCandidateListTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544873-client
  client(): cocoascript.NSTextInputClient;
  setClient(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544820-delegate
  delegate(): cocoascript.NSCandidateListTouchBarItemDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544701-setcandidates
  setCandidates_forSelectedRange_inString(candidates: cocoascript.NSArray, selectedRange: cocoascript.NSRange, originalString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544728-candidates
  candidates(): cocoascript.CandidateType;
  setCandidates(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544823-attributedstringforcandidate
  attributedStringForCandidate(): cocoascript.NSInteger;
  setAttributedStringForCandidate(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544668-allowstextinputcontextcandidates
  allowsTextInputContextCandidates(): cocoascript.BOOL;
  setAllowsTextInputContextCandidates(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544718-allowscollapsing
  allowsCollapsing(): cocoascript.BOOL;
  setAllowsCollapsing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544733-collapsed
  collapsed(): cocoascript.BOOL;
  setCollapsed(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544870-candidatelistvisible
  candidateListVisible(): cocoascript.BOOL;
  setCandidateListVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544658-updatewithinsertionpointvisibili
  updateWithInsertionPointVisibility(isVisible: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritem/2544821-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // 
  alloc():cocoascript.NSCandidateListTouchBarItem;
  // 
  init():cocoascript.NSCandidateListTouchBarItem;
}
}
declare const NSCandidateListTouchBarItem: cocoascript.NSCandidateListTouchBarItem;

