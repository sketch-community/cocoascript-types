declare namespace cocoascript {
  /**
   * A concrete typesetter object that places glyphs during the text layout process.
   * doc://com.apple.documentation/documentation/appkit/nsatstypesetter
   */
  interface NSATSTypesetter extends NSTypesetter {
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1530993-sharedtypesetter
    sharedTypesetter(): cocoascript.NSATSTypesetter;
    setSharedTypesetter(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1535366-layoutmanager
    layoutManager(): cocoascript.NSLayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1533331-usesfontleading
    usesFontLeading(): cocoascript.BOOL;
    setUsesFontLeading(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1533819-typesetterbehavior
    typesetterBehavior(): cocoascript.NSTypesetterBehavior;
    setTypesetterBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1526758-hyphenationfactor
    hyphenationFactor(): number;
    setHyphenationFactor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1524295-bidiprocessingenabled
    bidiProcessingEnabled(): cocoascript.BOOL;
    setBidiProcessingEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1527830-currenttextcontainer
    currentTextContainer(): cocoascript.NSTextContainer;
    setCurrentTextContainer(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1532628-linefragmentpadding
    lineFragmentPadding(): cocoascript.CGFloat;
    setLineFragmentPadding(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1535433-substitutefontforfont
    substituteFontForFont(originalFont: cocoascript.NSFont):cocoascript.NSFont;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1531288-texttabforglyphlocation
    textTabForGlyphLocation_writingDirection_maxLocation(glyphLocation: cocoascript.CGFloat, direction: cocoascript.NSWritingDirection, maxLocation: cocoascript.CGFloat):cocoascript.NSTextTab;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1530598-attributedstring
    attributedString(): cocoascript.NSAttributedString;
    setAttributedString(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1534099-setparagraphglyphrange
    setParagraphGlyphRange_separatorGlyphRange(paragraphRange: cocoascript.NSRange, paragraphSeparatorRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1528373-paragraphglyphrange
    paragraphGlyphRange(): cocoascript.NSRange;
    setParagraphGlyphRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1531108-paragraphseparatorglyphrange
    paragraphSeparatorGlyphRange(): cocoascript.NSRange;
    setParagraphSeparatorGlyphRange(): void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1525179-layoutparagraphatpoint
    layoutParagraphAtPoint(lineFragmentOrigin: cocoascript.NSPoint):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1533513-linespacingafterglyphatindex
    lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1532075-paragraphspacingafterglyphatinde
    paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1530080-paragraphspacingbeforeglyphatind
    paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: cocoascript.NSUInteger, rect: cocoascript.NSRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1535434-boundingboxforcontrolglyphatinde
    boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(glyphIndex: cocoascript.NSUInteger, textContainer: cocoascript.NSTextContainer, proposedRect: cocoascript.NSRect, glyphPosition: cocoascript.NSPoint, charIndex: cocoascript.NSUInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1528343-getlinefragmentrect
    getLineFragmentRect_usedRect_forParagraphSeparatorGlyphRange_atProposedOrigin(lineFragmentRect: cocoascript.NSRect, lineFragmentUsedRect: cocoascript.NSRect, paragraphSeparatorGlyphRange: cocoascript.NSRange, lineOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1525948-hyphencharacterforglyphatindex
    hyphenCharacterForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1533979-hyphenationfactorforglyphatindex
    hyphenationFactorForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1534510-shouldbreaklinebyhyphenatingbefo
    shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1528327-shouldbreaklinebywordbeforechara
    shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1526615-willsetlinefragmentrect
    willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(lineRect: cocoascript.NSRect, glyphRange: cocoascript.NSRange, usedRect: cocoascript.NSRect, baselineOffset: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1526532-sethardinvalidation
    setHardInvalidation_forGlyphRange(flag: cocoascript.BOOL, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1527411-getglyphsinrange
    getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits(glyphsRange: cocoascript.NSRange, glyphBuffer: cocoascript.NSGlyph, charIndexBuffer: cocoascript.NSUInteger, inscribeBuffer: cocoascript.NSGlyphInscription, elasticBuffer: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nsatstypesetter/1579672-linefragmentrectforproposedrect
    lineFragmentRectForProposedRect_remainingRect(proposedRect: cocoascript.NSRect, remainingRect: cocoascript.NSRectPointer):cocoascript.NSRect;
    //
    alloc():cocoascript.NSATSTypesetter;
    //
    init():cocoascript.NSATSTypesetter;
  }
}

declare const NSATSTypesetter: cocoascript.NSATSTypesetter;
