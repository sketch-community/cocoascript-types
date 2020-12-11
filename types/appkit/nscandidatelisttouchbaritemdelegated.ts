declare namespace cocoascript {
  /**
   * A set of methods that a candidate list item delegate uses to enable selection state and list visibility.
   * doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritemdelegate
   */
  interface NSCandidateListTouchBarItemDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritemdelegate/2544747-candidatelisttouchbaritem
    candidateListTouchBarItem_beginSelectingCandidateAtIndex(anItem: cocoascript.NSCandidateListTouchBarItem, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritemdelegate/2544677-candidatelisttouchbaritem
    candidateListTouchBarItem_changeSelectionFromCandidateAtIndex_toIndex(anItem: cocoascript.NSCandidateListTouchBarItem, previousIndex: cocoascript.NSInteger, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritemdelegate/2544704-candidatelisttouchbaritem
    candidateListTouchBarItem_endSelectingCandidateAtIndex(anItem: cocoascript.NSCandidateListTouchBarItem, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscandidatelisttouchbaritemdelegate/2544878-candidatelisttouchbaritem
    candidateListTouchBarItem_changedCandidateListVisibility(anItem: cocoascript.NSCandidateListTouchBarItem, isVisible: cocoascript.BOOL):void;
  }
}
