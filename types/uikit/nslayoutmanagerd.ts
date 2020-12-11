declare namespace cocoascript {
  /**
   * An object that coordinates the layout and display of text characters.
   * doc://com.apple.documentation/documentation/uikit/nslayoutmanager
   */
  interface NSLayoutManager extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402975-init
    init():cocoascript.NSLayoutManager;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403043-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSLayoutManager;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402920-delegate
    delegate(): cocoascript.NSLayoutManagerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403015-textstorage
    textStorage(): cocoascript.NSTextStorage;
    setTextStorage(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403227-replacetextstorage
    replaceTextStorage(newTextStorage: cocoascript.NSTextStorage):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403197-allowsnoncontiguouslayout
    allowsNonContiguousLayout(): cocoascript.BOOL;
    setAllowsNonContiguousLayout(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403207-hasnoncontiguouslayout
    hasNonContiguousLayout(): cocoascript.BOOL;
    setHasNonContiguousLayout(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403254-showsinvisiblecharacters
    showsInvisibleCharacters(): cocoascript.BOOL;
    setShowsInvisibleCharacters(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402912-showscontrolcharacters
    showsControlCharacters(): cocoascript.BOOL;
    setShowsControlCharacters(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403156-usesfontleading
    usesFontLeading(): cocoascript.BOOL;
    setUsesFontLeading(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402952-backgroundlayoutenabled
    backgroundLayoutEnabled(): cocoascript.BOOL;
    setBackgroundLayoutEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/3021179-limitslayoutforsuspiciouscontent
    limitsLayoutForSuspiciousContents(): cocoascript.BOOL;
    setLimitsLayoutForSuspiciousContents(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/3180380-usesdefaulthyphenation
    usesDefaultHyphenation(): cocoascript.BOOL;
    setUsesDefaultHyphenation(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403144-textcontainers
    textContainers(): cocoascript.NSTextContainer;
    setTextContainers(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402946-addtextcontainer
    addTextContainer(container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403010-inserttextcontainer
    insertTextContainer_atIndex(container: cocoascript.NSTextContainer, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403017-removetextcontaineratindex
    removeTextContainerAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403241-settextcontainer
    setTextContainer_forGlyphRange(container: cocoascript.NSTextContainer, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403091-textcontainerchangedgeometry
    textContainerChangedGeometry(container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403229-textcontainerchangedtextview
    textContainerChangedTextView(container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403110-textcontainerforglyphatindex
    textContainerForGlyphAtIndex_effectiveRange(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer):cocoascript.NSTextContainer;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403055-textcontainerforglyphatindex
    textContainerForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer, flag: cocoascript.BOOL):cocoascript.NSTextContainer;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402980-usedrectfortextcontainer
    usedRectForTextContainer(container: cocoascript.NSTextContainer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402924-invalidatedisplayforcharacterran
    invalidateDisplayForCharacterRange(charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403118-invalidatedisplayforglyphrange
    invalidateDisplayForGlyphRange(glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403171-invalidateglyphsforcharacterrang
    invalidateGlyphsForCharacterRange_changeInLength_actualCharacterRange(charRange: cocoascript.NSRange, delta: cocoascript.NSInteger, actualCharRange: cocoascript.NSRangePointer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403248-invalidatelayoutforcharacterrang
    invalidateLayoutForCharacterRange_actualCharacterRange(charRange: cocoascript.NSRange, actualCharRange: cocoascript.NSRangePointer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403065-processeditingfortextstorage
    processEditingForTextStorage_edited_range_changeInLength_invalidatedRange(textStorage: cocoascript.NSTextStorage, editMask: cocoascript.NSTextStorageEditActions, newCharRange: cocoascript.NSRange, delta: cocoascript.NSInteger, invalidatedCharRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403189-ensureglyphsforcharacterrange
    ensureGlyphsForCharacterRange(charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403219-ensureglyphsforglyphrange
    ensureGlyphsForGlyphRange(glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402962-ensurelayoutforboundingrect
    ensureLayoutForBoundingRect_inTextContainer(bounds: cocoascript.CGRect, container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402986-ensurelayoutforcharacterrange
    ensureLayoutForCharacterRange(charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402939-ensurelayoutforglyphrange
    ensureLayoutForGlyphRange(glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402967-ensurelayoutfortextcontainer
    ensureLayoutForTextContainer(container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403069-glyphgenerator
    glyphGenerator(): cocoascript.NSGlyphGenerator;
    setGlyphGenerator(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403104-getglyphsinrange
    getGlyphsInRange_glyphs_properties_characterIndexes_bidiLevels(glyphRange: cocoascript.NSRange, glyphBuffer: cocoascript.CGGlyph, props: cocoascript.NSGlyphProperty, charIndexBuffer: cocoascript.NSUInteger, bidiLevelBuffer: cocoascript.char):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403039-cgglyphatindex
    CGGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.CGGlyph;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403132-cgglyphatindex
    CGGlyphAtIndex_isValidIndex(glyphIndex: cocoascript.NSUInteger, isValidIndex: cocoascript.BOOL):cocoascript.CGGlyph;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403030-setglyphs
    setGlyphs_properties_characterIndexes_font_forGlyphRange(glyphs: cocoascript.CGGlyph, props: cocoascript.NSGlyphProperty, charIndexes: cocoascript.NSUInteger, aFont: cocoascript.UIFont, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402944-characterindexforglyphatindex
    characterIndexForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403001-glyphindexforcharacteratindex
    glyphIndexForCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402950-isvalidglyphindex
    isValidGlyphIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402937-numberofglyphs
    numberOfGlyphs(): cocoascript.NSUInteger;
    setNumberOfGlyphs(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403014-propertyforglyphatindex
    propertyForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.NSGlyphProperty;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403047-setattachmentsize
    setAttachmentSize_forGlyphRange(attachmentSize: cocoascript.CGSize, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402964-setdrawsoutsidelinefragment
    setDrawsOutsideLineFragment_forGlyphAtIndex(flag: cocoascript.BOOL, glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403071-setextralinefragmentrect
    setExtraLineFragmentRect_usedRect_textContainer(fragmentRect: cocoascript.CGRect, usedRect: cocoascript.CGRect, container: cocoascript.NSTextContainer):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402935-setlinefragmentrect
    setLineFragmentRect_forGlyphRange_usedRect(fragmentRect: cocoascript.CGRect, glyphRange: cocoascript.NSRange, usedRect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402982-setlocation
    setLocation_forStartOfGlyphRange(location: cocoascript.CGPoint, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403078-setnotshownattribute
    setNotShownAttribute_forGlyphAtIndex(flag: cocoascript.BOOL, glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403099-attachmentsizeforglyphatindex
    attachmentSizeForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403003-drawsoutsidelinefragmentforglyph
    drawsOutsideLineFragmentForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403175-extralinefragmentrect
    extraLineFragmentRect(): cocoascript.CGRect;
    setExtraLineFragmentRect(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403165-extralinefragmenttextcontainer
    extraLineFragmentTextContainer(): cocoascript.NSTextContainer;
    setExtraLineFragmentTextContainer(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402988-extralinefragmentusedrect
    extraLineFragmentUsedRect(): cocoascript.CGRect;
    setExtraLineFragmentUsedRect(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403067-firstunlaidcharacterindex
    firstUnlaidCharacterIndex():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403245-firstunlaidglyphindex
    firstUnlaidGlyphIndex():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403187-getfirstunlaidcharacterindex
    getFirstUnlaidCharacterIndex_glyphIndex(charIndex: cocoascript.NSUInteger, glyphIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403140-linefragmentrectforglyphatindex
    lineFragmentRectForGlyphAtIndex_effectiveRange(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403116-linefragmentrectforglyphatindex
    lineFragmentRectForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer, flag: cocoascript.BOOL):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403193-linefragmentusedrectforglyphatin
    lineFragmentUsedRectForGlyphAtIndex_effectiveRange(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403035-linefragmentusedrectforglyphatin
    lineFragmentUsedRectForGlyphAtIndex_effectiveRange_withoutAdditionalLayout(glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer, flag: cocoascript.BOOL):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403239-locationforglyphatindex
    locationForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402931-notshownattributeforglyphatindex
    notShownAttributeForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403203-truncatedglyphrangeinlinefragmen
    truncatedGlyphRangeInLineFragmentForGlyphAtIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403255-boundingrectforglyphrange
    boundingRectForGlyphRange_inTextContainer(glyphRange: cocoascript.NSRange, container: cocoascript.NSTextContainer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403028-characterindexforpoint
    characterIndexForPoint_inTextContainer_fractionOfDistanceBetweenInsertionPoints(point: cocoascript.CGPoint, container: cocoascript.NSTextContainer, partialFraction: cocoascript.CGFloat):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403225-characterrangeforglyphrange
    characterRangeForGlyphRange_actualGlyphRange(glyphRange: cocoascript.NSRange, actualGlyphRange: cocoascript.NSRangePointer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403021-enumerateenclosingrectsforglyphr
    enumerateEnclosingRectsForGlyphRange_withinSelectedGlyphRange_inTextContainer_usingBlock(glyphRange: cocoascript.NSRange, selectedRange: cocoascript.NSRange, textContainer: cocoascript.NSTextContainer, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403160-enumeratelinefragmentsforglyphra
    enumerateLineFragmentsForGlyphRange_usingBlock(glyphRange: cocoascript.NSRange, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403097-fractionofdistancethroughglyphfo
    fractionOfDistanceThroughGlyphForPoint_inTextContainer(point: cocoascript.CGPoint, container: cocoascript.NSTextContainer):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403012-getlinefragmentinsertionpointsfo
    getLineFragmentInsertionPointsForCharacterAtIndex_alternatePositions_inDisplayOrder_positions_characterIndexes(charIndex: cocoascript.NSUInteger, aFlag: cocoascript.BOOL, dFlag: cocoascript.BOOL, positions: cocoascript.CGFloat, charIndexes: cocoascript.NSUInteger):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403112-glyphindexforpoint
    glyphIndexForPoint_inTextContainer(point: cocoascript.CGPoint, container: cocoascript.NSTextContainer):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402933-glyphindexforpoint
    glyphIndexForPoint_inTextContainer_fractionOfDistanceThroughGlyph(point: cocoascript.CGPoint, container: cocoascript.NSTextContainer, partialFraction: cocoascript.CGFloat):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403053-glyphrangeforboundingrect
    glyphRangeForBoundingRect_inTextContainer(bounds: cocoascript.CGRect, container: cocoascript.NSTextContainer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403183-glyphrangeforboundingrectwithout
    glyphRangeForBoundingRectWithoutAdditionalLayout_inTextContainer(bounds: cocoascript.CGRect, container: cocoascript.NSTextContainer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403041-glyphrangefortextcontainer
    glyphRangeForTextContainer(container: cocoascript.NSTextContainer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402999-glyphrangeforcharacterrange
    glyphRangeForCharacterRange_actualCharacterRange(charRange: cocoascript.NSRange, actualCharRange: cocoascript.NSRangePointer):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403152-rangeofnominallyspacedglyphscont
    rangeOfNominallySpacedGlyphsContainingIndex(glyphIndex: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1402949-drawbackgroundforglyphrange
    drawBackgroundForGlyphRange_atPoint(glyphsToShow: cocoascript.NSRange, origin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403158-drawglyphsforglyphrange
    drawGlyphsForGlyphRange_atPoint(glyphsToShow: cocoascript.NSRange, origin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403169-drawstrikethroughforglyphrange
    drawStrikethroughForGlyphRange_strikethroughType_baselineOffset_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: cocoascript.NSRange, strikethroughVal: cocoascript.NSUnderlineStyle, baselineOffset: cocoascript.CGFloat, lineRect: cocoascript.CGRect, lineGlyphRange: cocoascript.NSRange, containerOrigin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403079-drawunderlineforglyphrange
    drawUnderlineForGlyphRange_underlineType_baselineOffset_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: cocoascript.NSRange, underlineVal: cocoascript.NSUnderlineStyle, baselineOffset: cocoascript.CGFloat, lineRect: cocoascript.CGRect, lineGlyphRange: cocoascript.NSRange, containerOrigin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403161-fillbackgroundrectarray
    fillBackgroundRectArray_count_forCharacterRange_color(rectArray: cocoascript.CGRect, rectCount: cocoascript.NSUInteger, charRange: cocoascript.NSRange, color: cocoascript.UIColor):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/3180379-showcgglyphs
    showCGGlyphs_positions_count_font_textMatrix_attributes_inContext(glyphs: cocoascript.CGGlyph, positions: cocoascript.CGPoint, glyphCount: cocoascript.NSInteger, font: cocoascript.UIFont, textMatrix: cocoascript.CGAffineTransform, attributes: cocoascript.NSLayoutManager, CGContext: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403009-strikethroughglyphrange
    strikethroughGlyphRange_strikethroughType_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: cocoascript.NSRange, strikethroughVal: cocoascript.NSUnderlineStyle, lineRect: cocoascript.CGRect, lineGlyphRange: cocoascript.NSRange, containerOrigin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanager/1403114-underlineglyphrange
    underlineGlyphRange_underlineType_lineFragmentRect_lineFragmentGlyphRange_containerOrigin(glyphRange: cocoascript.NSRange, underlineVal: cocoascript.NSUnderlineStyle, lineRect: cocoascript.CGRect, lineGlyphRange: cocoascript.NSRange, containerOrigin: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402929-setlayoutrect
    setLayoutRect_forTextBlock_glyphRange(rect: cocoascript.NSRect, block: cocoascript.NSTextBlock, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403201-layoutrectfortextblock
    layoutRectForTextBlock_glyphRange(block: cocoascript.NSTextBlock, glyphRange: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402991-setboundsrect
    setBoundsRect_forTextBlock_glyphRange(rect: cocoascript.NSRect, block: cocoascript.NSTextBlock, glyphRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403138-boundsrectfortextblock
    boundsRectForTextBlock_glyphRange(block: cocoascript.NSTextBlock, glyphRange: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403102-layoutrectfortextblock
    layoutRectForTextBlock_atIndex_effectiveRange(block: cocoascript.NSTextBlock, glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402956-boundsrectfortextblock
    boundsRectForTextBlock_atIndex_effectiveRange(block: cocoascript.NSTextBlock, glyphIndex: cocoascript.NSUInteger, effectiveGlyphRange: cocoascript.NSRangePointer):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403045-defaultattachmentscaling
    defaultAttachmentScaling(): cocoascript.NSImageScaling;
    setDefaultAttachmentScaling(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402965-showattachmentcell
    showAttachmentCell_inRect_characterIndex(cell: cocoascript.NSCell, rect: cocoascript.NSRect, attachmentIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403130-ruleraccessoryviewfortextview
    rulerAccessoryViewForTextView_paragraphStyle_ruler_enabled(view: cocoascript.NSTextView, style: cocoascript.NSParagraphStyle, ruler: cocoascript.NSRulerView, isEnabled: cocoascript.BOOL):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403163-rulermarkersfortextview
    rulerMarkersForTextView_paragraphStyle_ruler(view: cocoascript.NSTextView, style: cocoascript.NSParagraphStyle, ruler: cocoascript.NSRulerView):cocoascript.NSRulerMarker;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403026-layoutmanagerownsfirstresponderi
    layoutManagerOwnsFirstResponderInWindow(window: cocoascript.NSWindow):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402995-firsttextview
    firstTextView(): cocoascript.NSTextView;
    setFirstTextView(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403089-textviewforbeginningofselection
    textViewForBeginningOfSelection(): cocoascript.NSTextView;
    setTextViewForBeginningOfSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403205-typesetter
    typesetter(): cocoascript.NSTypesetter;
    setTypesetter(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403199-typesetterbehavior
    typesetterBehavior(): cocoascript.NSTypesetterBehavior;
    setTypesetterBehavior(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403007-defaultlineheightforfont
    defaultLineHeightForFont(theFont: cocoascript.NSFont):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403058-defaultbaselineoffsetforfont
    defaultBaselineOffsetForFont(theFont: cocoascript.NSFont):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403250-addtemporaryattributes
    addTemporaryAttributes_forCharacterRange(attrs: cocoascript.NSLayoutManager, charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403005-addtemporaryattribute
    addTemporaryAttribute_value_forCharacterRange(attrName: cocoascript.NSAttributedStringKey, value: cocoascript.NSLayoutManager, charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403037-settemporaryattributes
    setTemporaryAttributes_forCharacterRange(attrs: cocoascript.NSLayoutManager, charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403087-removetemporaryattribute
    removeTemporaryAttribute_forCharacterRange(attrName: cocoascript.NSAttributedStringKey, charRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1402969-temporaryattribute
    temporaryAttribute_atCharacterIndex_effectiveRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSLayoutManager;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403223-temporaryattribute
    temporaryAttribute_atCharacterIndex_longestEffectiveRange_inRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSLayoutManager;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403033-temporaryattributesatcharacterin
    temporaryAttributesAtCharacterIndex_effectiveRange(charIndex: cocoascript.NSUInteger, effectiveCharRange: cocoascript.NSRangePointer):cocoascript.NSLayoutManager;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanager/1403060-temporaryattributesatcharacterin
    temporaryAttributesAtCharacterIndex_longestEffectiveRange_inRange(location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSLayoutManager;
    //
    alloc():cocoascript.NSLayoutManager;
    //
    init():cocoascript.NSLayoutManager;
  }
}

declare const NSLayoutManager: cocoascript.NSLayoutManager;
