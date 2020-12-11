declare namespace cocoascript {
  /**
   * A set of methods for interacting with the text input system and enabling features, such as autocorrect and multistage text input, in documents.
   * doc://com.apple.documentation/documentation/uikit/uitextinput
   */
  interface UITextInput extends UIKeyInput {
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614508-inputdelegate
    inputDelegate(): cocoascript.UITextInputDelegate;
    setInputDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614527-textinrange
    textInRange(range: cocoascript.UITextRange):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614558-replacerange
    replaceRange_withText(range: cocoascript.UITextRange, text: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614495-shouldchangetextinrange
    shouldChangeTextInRange_replacementText(range: cocoascript.UITextRange, text: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614541-selectedtextrange
    selectedTextRange(): cocoascript.UITextRange;
    setSelectedTextRange(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614489-markedtextrange
    markedTextRange(): cocoascript.UITextRange;
    setMarkedTextRange(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614500-markedtextstyle
    markedTextStyle(): cocoascript.id;
    setMarkedTextStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614465-setmarkedtext
    setMarkedText_selectedRange(markedText: cocoascript.NSString, selectedRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/3213955-setattributedmarkedtext
    setAttributedMarkedText_selectedRange(markedText: cocoascript.NSAttributedString, selectedRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614512-unmarktext
    unmarkText():void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614539-selectionaffinity
    selectionAffinity(): cocoascript.UITextStorageDirection;
    setSelectionAffinity(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614573-textrangefromposition
    textRangeFromPosition_toPosition(fromPosition: cocoascript.UITextPosition, toPosition: cocoascript.UITextPosition):cocoascript.UITextRange;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614511-positionfromposition
    positionFromPosition_offset(position: cocoascript.UITextPosition, offset: cocoascript.NSInteger):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614515-positionfromposition
    positionFromPosition_inDirection_offset(position: cocoascript.UITextPosition, direction: cocoascript.UITextLayoutDirection, offset: cocoascript.NSInteger):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614528-beginningofdocument
    beginningOfDocument(): cocoascript.UITextPosition;
    setBeginningOfDocument(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614555-endofdocument
    endOfDocument(): cocoascript.UITextPosition;
    setEndOfDocument(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614526-compareposition
    comparePosition_toPosition(position: cocoascript.UITextPosition, other: cocoascript.UITextPosition):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614473-offsetfromposition
    offsetFromPosition_toPosition(from: cocoascript.UITextPosition, toPosition: cocoascript.UITextPosition):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614547-positionwithinrange
    positionWithinRange_farthestInDirection(range: cocoascript.UITextRange, direction: cocoascript.UITextLayoutDirection):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614462-characterrangebyextendingpositio
    characterRangeByExtendingPosition_inDirection(position: cocoascript.UITextPosition, direction: cocoascript.UITextLayoutDirection):cocoascript.UITextRange;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614502-basewritingdirectionforposition
    baseWritingDirectionForPosition_inDirection(position: cocoascript.UITextPosition, direction: cocoascript.UITextStorageDirection):cocoascript.NSWritingDirection;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614563-setbasewritingdirection
    setBaseWritingDirection_forRange(writingDirection: cocoascript.NSWritingDirection, range: cocoascript.UITextRange):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614570-firstrectforrange
    firstRectForRange(range: cocoascript.UITextRange):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614518-caretrectforposition
    caretRectForPosition(position: cocoascript.UITextPosition):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614523-closestpositiontopoint
    closestPositionToPoint(point: cocoascript.CGPoint):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614458-selectionrectsforrange
    selectionRectsForRange(range: cocoascript.UITextRange):cocoascript.UITextSelectionRect;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614533-closestpositiontopoint
    closestPositionToPoint_withinRange(point: cocoascript.CGPoint, range: cocoascript.UITextRange):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614574-characterrangeatpoint
    characterRangeAtPoint(point: cocoascript.CGPoint):cocoascript.UITextRange;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614537-tokenizer
    tokenizer(): cocoascript.UITextInputTokenizer;
    setTokenizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614557-beginfloatingcursoratpoint
    beginFloatingCursorAtPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614550-updatefloatingcursoratpoint
    updateFloatingCursorAtPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614497-endfloatingcursor
    endFloatingCursor():void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614507-dictationrecordingdidend
    dictationRecordingDidEnd():void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614519-dictationrecognitionfailed
    dictationRecognitionFailed():void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614568-insertdictationresult
    insertDictationResult(dictationResult: cocoascript.UIDictationPhrase):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614466-insertdictationresultplaceholder
    insertDictationResultPlaceholder(): cocoascript.id;
    setInsertDictationResultPlaceholder(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614493-framefordictationresultplacehold
    frameForDictationResultPlaceholder(placeholder: cocoascript.UITextInput):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614546-removedictationresultplaceholder
    removeDictationResultPlaceholder_willInsertResult(placeholder: cocoascript.UITextInput, willInsertResult: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/3213953-inserttextplaceholderwithsize
    insertTextPlaceholderWithSize(size: cocoascript.CGSize):cocoascript.UITextPlaceholder;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/3213954-removetextplaceholder
    removeTextPlaceholder(textPlaceholder: cocoascript.UITextPlaceholder):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/3213952-inserttext
    insertText_alternatives_style(text: cocoascript.NSString, alternatives: cocoascript.NSString, style: cocoascript.UITextAlternativeStyle):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614566-textstylingatposition
    textStylingAtPosition_inDirection(position: cocoascript.UITextPosition, direction: cocoascript.UITextStorageDirection):cocoascript.UITextInput;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614542-positionwithinrange
    positionWithinRange_atCharacterOffset(range: cocoascript.UITextRange, offset: cocoascript.NSInteger):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614545-characteroffsetofposition
    characterOffsetOfPosition_withinRange(position: cocoascript.UITextPosition, range: cocoascript.UITextRange):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uitextinput/1614564-textinputview
    textInputView(): cocoascript.UIView;
    setTextInputView(): void;
  }
}
