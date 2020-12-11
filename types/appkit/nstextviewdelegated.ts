declare namespace cocoascript {
  /**
   * A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
   * doc://com.apple.documentation/documentation/appkit/nstextviewdelegate
   */
  interface NSTextViewDelegate extends NSTextDelegate {
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449225-undomanagerfortextview
    undoManagerForTextView(view: cocoascript.NSTextView):cocoascript.NSUndoManager;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449411-textview
    textView_willDisplayToolTip_forCharacterAtIndex(textView: cocoascript.NSTextView, tooltip: cocoascript.NSString, characterIndex: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449194-textview
    textView_URLForContentsOfTextAttachment_atIndex(textView: cocoascript.NSTextView, textAttachment: cocoascript.NSTextAttachment, charIndex: cocoascript.NSUInteger):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449227-textview
    textView_willChangeSelectionFromCharacterRange_toCharacterRange(textView: cocoascript.NSTextView, oldSelectedCharRange: cocoascript.NSRange, newSelectedCharRange: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449264-textview
    textView_willChangeSelectionFromCharacterRanges_toCharacterRanges(textView: cocoascript.NSTextView, oldSelectedCharRanges: cocoascript.NSValue, newSelectedCharRanges: cocoascript.NSValue):cocoascript.NSValue;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449363-textviewdidchangeselection
    textViewDidChangeSelection(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449485-textview
    textView_writablePasteboardTypesForCell_atIndex(view: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, charIndex: cocoascript.NSUInteger):cocoascript.NSPasteboardType;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449294-textview
    textView_writeCell_atIndex_toPasteboard_type(view: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, charIndex: cocoascript.NSUInteger, pboard: cocoascript.NSPasteboard, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449325-textview
    textView_shouldChangeTextInRange_replacementString(textView: cocoascript.NSTextView, affectedCharRange: cocoascript.NSRange, replacementString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449206-textview
    textView_shouldChangeTextInRanges_replacementStrings(textView: cocoascript.NSTextView, affectedRanges: cocoascript.NSValue, replacementStrings: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449376-textview
    textView_shouldChangeTypingAttributes_toAttributes(textView: cocoascript.NSTextView, oldTypingAttributes: cocoascript.NSTextViewDelegate, newTypingAttributes: cocoascript.NSTextViewDelegate):cocoascript.NSTextViewDelegate;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449303-textviewdidchangetypingattribute
    textViewDidChangeTypingAttributes(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449335-textview
    textView_clickedOnCell_inRect_atIndex(textView: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, cellFrame: cocoascript.NSRect, charIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449333-textview
    textView_doubleClickedOnCell_inRect_atIndex(textView: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, cellFrame: cocoascript.NSRect, charIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449527-textview
    textView_clickedOnLink_atIndex(textView: cocoascript.NSTextView, link: cocoascript.NSTextViewDelegate, charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449284-textview
    textView_shouldSetSpellingState_range(textView: cocoascript.NSTextView, value: cocoascript.NSInteger, affectedCharRange: cocoascript.NSRange):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449307-textview
    textView_willCheckTextInRange_options_types(view: cocoascript.NSTextView, range: cocoascript.NSRange, options: cocoascript.NSTextViewDelegate, checkingTypes: cocoascript.NSTextCheckingTypes):cocoascript.NSTextViewDelegate;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449317-textview
    textView_didCheckTextInRange_types_options_results_orthography_wordCount(view: cocoascript.NSTextView, range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSTextViewDelegate, results: cocoascript.NSTextCheckingResult, orthography: cocoascript.NSOrthography, wordCount: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449154-textview
    textView_draggedCell_inRect_event_atIndex(view: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, rect: cocoascript.NSRect, event: cocoascript.NSEvent, charIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449260-textview
    textView_completions_forPartialWordRange_indexOfSelectedItem(textView: cocoascript.NSTextView, words: cocoascript.NSString, charRange: cocoascript.NSRange, index: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449339-textview
    textView_willShowSharingServicePicker_forItems(textView: cocoascript.NSTextView, servicePicker: cocoascript.NSSharingServicePicker, items: cocoascript.NSArray):cocoascript.NSSharingServicePicker;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449419-textview
    textView_doCommandBySelector(textView: cocoascript.NSTextView, commandSelector: cocoascript.SEL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449341-textview
    textView_menu_forEvent_atIndex(view: cocoascript.NSTextView, menu: cocoascript.NSMenu, event: cocoascript.NSEvent, charIndex: cocoascript.NSUInteger):cocoascript.NSMenu;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449380-textview
    textView_clickedOnLink(textView: cocoascript.NSTextView, link: cocoascript.NSTextViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449185-textview
    textView_draggedCell_inRect_event(view: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, rect: cocoascript.NSRect, event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449495-textview
    textView_clickedOnCell_inRect(textView: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, cellFrame: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/1449374-textview
    textView_doubleClickedOnCell_inRect(textView: cocoascript.NSTextView, cell: cocoascript.NSTextAttachmentCell, cellFrame: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/2544692-textview
    textView_candidates_forSelectedRange(textView: cocoascript.NSTextView, candidates: cocoascript.NSTextCheckingResult, selectedRange: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/2544744-textview
    textView_candidatesForSelectedRange(textView: cocoascript.NSTextView, selectedRange: cocoascript.NSRange):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/2544682-textview
    textView_shouldSelectCandidateAtIndex(textView: cocoascript.NSTextView, index: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextviewdelegate/2544799-textview
    textView_shouldUpdateTouchBarItemIdentifiers(textView: cocoascript.NSTextView, identifiers: cocoascript.NSTouchBarItemIdentifier):cocoascript.NSTouchBarItemIdentifier;
  }
}
