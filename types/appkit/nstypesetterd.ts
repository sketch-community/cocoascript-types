declare namespace cocoascript {
  /**
   * An abstract class that performs various type layout tasks.
   * doc://com.apple.documentation/documentation/appkit/nstypesetter
   */
  interface NSTypesetter extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534814-sharedsystemtypesetter
    sharedSystemTypesetter(): cocoascript.NSTypesetter;
    setSharedSystemTypesetter(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534626-defaulttypesetterbehavior
    defaultTypesetterBehavior(): cocoascript.NSTypesetterBehavior;
    setDefaultTypesetterBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535394-baselineoffsetinlayoutmanager
    baselineOffsetInLayoutManager_glyphIndex(layoutMgr: cocoascript.NSLayoutManager, glyphIndex: cocoascript.NSUInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533958-layoutmanager
    layoutManager(): cocoascript.NSLayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526716-usesfontleading
    usesFontLeading(): cocoascript.BOOL;
    setUsesFontLeading(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1528244-typesetterbehavior
    typesetterBehavior(): cocoascript.NSTypesetterBehavior;
    setTypesetterBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535877-hyphenationfactor
    hyphenationFactor(): number;
    setHyphenationFactor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534527-currenttextcontainer
    currentTextContainer(): cocoascript.NSTextContainer;
    setCurrentTextContainer(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526310-textcontainers
    textContainers(): cocoascript.NSTextContainer;
    setTextContainers(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1531129-linefragmentpadding
    lineFragmentPadding(): cocoascript.CGFloat;
    setLineFragmentPadding(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526766-substitutefontforfont
    substituteFontForFont(originalFont: cocoascript.NSFont):cocoascript.NSFont;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1524483-texttabforglyphlocation
    textTabForGlyphLocation_writingDirection_maxLocation(glyphLocation: cocoascript.CGFloat, direction: cocoascript.NSWritingDirection, maxLocation: cocoascript.CGFloat):cocoascript.NSTextTab;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533588-bidiprocessingenabled
    bidiProcessingEnabled(): cocoascript.BOOL;
    setBidiProcessingEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1528893-currentparagraphstyle
    currentParagraphStyle(): cocoascript.NSParagraphStyle;
    setCurrentParagraphStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1524704-attributedstring
    attributedString(): cocoascript.NSAttributedString;
    setAttributedString(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1530393-setparagraphglyphrange
    setParagraphGlyphRange_separatorGlyphRange(paragraphRange: cocoascript.NSRange, paragraphSeparatorRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1528301-paragraphglyphrange
    paragraphGlyphRange(): cocoascript.NSRange;
    setParagraphGlyphRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534165-paragraphseparatorglyphrange
    paragraphSeparatorGlyphRange(): cocoascript.NSRange;
    setParagraphSeparatorGlyphRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533422-paragraphcharacterrange
    paragraphCharacterRange(): cocoascript.NSRange;
    setParagraphCharacterRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1531746-paragraphseparatorcharacterrange
    paragraphSeparatorCharacterRange(): cocoascript.NSRange;
    setParagraphSeparatorCharacterRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534922-attributesforextralinefragment
    attributesForExtraLineFragment(): cocoascript.id;
    setAttributesForExtraLineFragment(): void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1532355-linespacingafterglyphatindex
    lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534661-paragraphspacingafterglyphatinde
    paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1525163-paragraphspacingbeforeglyphatind
    paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1528231-layoutparagraphatpoint
    layoutParagraphAtPoint(lineFragmentOrigin: cocoascript.NSPointPointer):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526595-beginparagraph
    beginParagraph():void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526802-endparagraph
    endParagraph():void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534305-beginlinewithglyphatindex
    beginLineWithGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1525531-endlinewithglyphrange
    endLineWithGlyphRange(lineGlyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535876-layoutcharactersinrange
    layoutCharactersInRange_forLayoutManager_maximumNumberOfLineFragments(characterRange: cocoascript.NSRange, layoutManager: cocoascript.NSLayoutManager, maxNumLines: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534233-layoutglyphsinlayoutmanager
    layoutGlyphsInLayoutManager_startingAtGlyphIndex_maxNumberOfLineFragments_nextGlyphIndex(layoutManager: cocoascript.NSLayoutManager, startGlyphIndex: cocoascript.NSUInteger, maxNumLines: cocoascript.NSUInteger, nextGlyph: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535355-boundingboxforcontrolglyphatinde
    boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(glyphIndex: cocoascript.NSUInteger, textContainer: cocoascript.NSTextContainer, proposedRect: cocoascript.NSRect, glyphPosition: cocoascript.NSPoint, charIndex: cocoascript.NSUInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533394-getlinefragmentrect
    getLineFragmentRect_usedRect_forParagraphSeparatorGlyphRange_atProposedOrigin(lineFragmentRect: cocoascript.NSRectPointer, lineFragmentUsedRect: cocoascript.NSRectPointer, paragraphSeparatorGlyphRange: cocoascript.NSRange, lineOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535809-getlinefragmentrect
    getLineFragmentRect_usedRect_remainingRect_forStartingGlyphAtIndex_proposedRect_lineSpacing_paragraphSpacingBefore_paragraphSpacingAfter(lineFragmentRect: cocoascript.NSRectPointer, lineFragmentUsedRect: cocoascript.NSRectPointer, remainingRect: cocoascript.NSRectPointer, startingGlyphIndex: cocoascript.NSUInteger, proposedRect: cocoascript.NSRect, lineSpacing: cocoascript.CGFloat, paragraphSpacingBefore: cocoascript.CGFloat, paragraphSpacingAfter: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1531874-hyphencharacterforglyphatindex
    hyphenCharacterForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533345-hyphenationfactorforglyphatindex
    hyphenationFactorForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534525-shouldbreaklinebyhyphenatingbefo
    shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1532732-shouldbreaklinebywordbeforechara
    shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1530261-willsetlinefragmentrect
    willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(lineRect: cocoascript.NSRectPointer, glyphRange: cocoascript.NSRange, usedRect: cocoascript.NSRectPointer, baselineOffset: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1529806-sethardinvalidation
    setHardInvalidation_forGlyphRange(flag: cocoascript.BOOL, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1524391-characterrangeforglyphrange
    characterRangeForGlyphRange_actualGlyphRange(glyphRange: cocoascript.NSRange, actualGlyphRange: cocoascript.NSRangePointer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1531461-glyphrangeforcharacterrange
    glyphRangeForCharacterRange_actualCharacterRange(charRange: cocoascript.NSRange, actualCharRange: cocoascript.NSRangePointer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1532282-setattachmentsize
    setAttachmentSize_forGlyphRange(attachmentSize: cocoascript.NSSize, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1532079-setbidilevels
    setBidiLevels_forGlyphRange(levels: number, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526312-setdrawsoutsidelinefragment
    setDrawsOutsideLineFragment_forGlyphRange(flag: cocoascript.BOOL, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1534015-setlinefragmentrect
    setLineFragmentRect_forGlyphRange_usedRect_baselineOffset(fragmentRect: cocoascript.NSRect, glyphRange: cocoascript.NSRange, usedRect: cocoascript.NSRect, baselineOffset: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1533806-setlocation
    setLocation_withAdvancements_forStartOfGlyphRange(location: cocoascript.NSPoint, advancements: cocoascript.CGFloat, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1530373-setnotshownattribute
    setNotShownAttribute_forGlyphRange(flag: cocoascript.BOOL, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1527684-actionforcontrolcharacteratindex
    actionForControlCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.NSTypesetterControlCharacterAction;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1535048-deleteglyphsinrange
    deleteGlyphsInRange(glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1529113-substituteglyphsinrange
    substituteGlyphsInRange_withGlyphs(glyphRange: cocoascript.NSRange, glyphs: cocoascript.NSGlyph):void;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1526102-getglyphsinrange
    getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits_bidiLevels(glyphsRange: cocoascript.NSRange, glyphBuffer: cocoascript.NSGlyph, charIndexBuffer: cocoascript.NSUInteger, inscribeBuffer: cocoascript.NSGlyphInscription, elasticBuffer: cocoascript.BOOL, bidiLevelBuffer: cocoascript.char):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nstypesetter/1528650-insertglyph
    insertGlyph_atGlyphIndex_characterIndex(glyph: cocoascript.NSGlyph, glyphIndex: cocoascript.NSUInteger, characterIndex: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.NSTypesetter;
    //
    init():cocoascript.NSTypesetter;
  }
}

declare const NSTypesetter: cocoascript.NSTypesetter;
