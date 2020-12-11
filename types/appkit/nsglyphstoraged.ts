declare namespace cocoascript {
  /**
   * A set of methods that a glyph storage object must implement to interact properly with
   * doc://com.apple.documentation/documentation/appkit/nsglyphstorage
   */
  interface NSGlyphStorage {
    // doc://com.apple.documentation/documentation/appkit/nsglyphstorage/1425147-attributedstring
    attributedString():cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nsglyphstorage/1425149-layoutoptions
    layoutOptions():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nsglyphstorage/1425153-insertglyphs
    insertGlyphs_length_forStartingGlyphAtIndex_characterIndex(glyphs: cocoascript.NSGlyph, length: cocoascript.NSUInteger, glyphIndex: cocoascript.NSUInteger, charIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsglyphstorage/1425141-setintattribute
    setIntAttribute_value_forGlyphAtIndex(attributeTag: cocoascript.NSInteger, val: cocoascript.NSInteger, glyphIndex: cocoascript.NSUInteger):void;
  }
}
