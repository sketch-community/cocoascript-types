declare namespace cocoascript {
  /**
   * A set of optional methods that delegates of layout manager objects implement.
   * doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate
   */
  interface NSLayoutManagerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1402993-layoutmanagerdidinvalidatelayout
    layoutManagerDidInvalidateLayout(sender: cocoascript.NSLayoutManager):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403073-layoutmanager
    layoutManager_shouldGenerateGlyphs_properties_characterIndexes_font_forGlyphRange(layoutManager: cocoascript.NSLayoutManager, glyphs: cocoascript.CGGlyph, props: cocoascript.NSGlyphProperty, charIndexes: cocoascript.NSUInteger, aFont: cocoascript.UIFont, glyphRange: cocoascript.NSRange):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403167-layoutmanager
    layoutManager_shouldUseAction_forControlCharacterAtIndex(layoutManager: cocoascript.NSLayoutManager, action: cocoascript.NSControlCharacterAction, charIndex: cocoascript.NSUInteger):cocoascript.NSControlCharacterAction;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1402926-layoutmanager
    layoutManager_didCompleteLayoutForTextContainer_atEnd(layoutManager: cocoascript.NSLayoutManager, textContainer: cocoascript.NSTextContainer, layoutFinishedFlag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403049-layoutmanager
    layoutManager_textContainer_didChangeGeometryFromSize(layoutManager: cocoascript.NSLayoutManager, textContainer: cocoascript.NSTextContainer, oldSize: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403128-layoutmanager
    layoutManager_shouldBreakLineByHyphenatingBeforeCharacterAtIndex(layoutManager: cocoascript.NSLayoutManager, charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403051-layoutmanager
    layoutManager_shouldBreakLineByWordBeforeCharacterAtIndex(layoutManager: cocoascript.NSLayoutManager, charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1402948-layoutmanager
    layoutManager_lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(layoutManager: cocoascript.NSLayoutManager, glyphIndex: cocoascript.NSUInteger, rect: cocoascript.CGRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403076-layoutmanager
    layoutManager_paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(layoutManager: cocoascript.NSLayoutManager, glyphIndex: cocoascript.NSUInteger, rect: cocoascript.CGRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403177-layoutmanager
    layoutManager_paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(layoutManager: cocoascript.NSLayoutManager, glyphIndex: cocoascript.NSUInteger, rect: cocoascript.CGRect):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1402922-layoutmanager
    layoutManager_boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(layoutManager: cocoascript.NSLayoutManager, glyphIndex: cocoascript.NSUInteger, textContainer: cocoascript.NSTextContainer, proposedRect: cocoascript.CGRect, glyphPosition: cocoascript.CGPoint, charIndex: cocoascript.NSUInteger):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nslayoutmanagerdelegate/1403122-layoutmanager
    layoutManager_shouldSetLineFragmentRect_lineFragmentUsedRect_baselineOffset_inTextContainer_forGlyphRange(layoutManager: cocoascript.NSLayoutManager, lineFragmentRect: cocoascript.CGRect, lineFragmentUsedRect: cocoascript.CGRect, baselineOffset: cocoascript.CGFloat, textContainer: cocoascript.NSTextContainer, glyphRange: cocoascript.NSRange):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nslayoutmanagerdelegate/1403085-layoutmanager
    layoutManager_shouldUseTemporaryAttributes_forDrawingToScreen_atCharacterIndex_effectiveRange(layoutManager: cocoascript.NSLayoutManager, attrs: cocoascript.NSLayoutManagerDelegate, toScreen: cocoascript.BOOL, charIndex: cocoascript.NSUInteger, effectiveCharRange: cocoascript.NSRangePointer):cocoascript.NSLayoutManagerDelegate;
  }
}
