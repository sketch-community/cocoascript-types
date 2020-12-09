declare namespace cocoascript {
/**
 * A glyph attribute in an attributed string.
 * doc://com.apple.documentation/documentation/appkit/nsglyphinfo
 */
interface NSGlyphInfo extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsglyphinfo/2887163-basestring
  baseString(): cocoascript.NSString;
  setBaseString(): void;
  // doc://com.apple.documentation/documentation/appkit/nsglyphinfo/2887152-glyphid
  glyphID(): cocoascript.CGGlyph;
  setGlyphID(): void;
  // doc://com.apple.documentation/documentation/appkit/nsglyphinfo/1447120-characteridentifier
  characterIdentifier(): cocoascript.NSUInteger;
  setCharacterIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nsglyphinfo/1447136-charactercollection
  characterCollection(): cocoascript.NSCharacterCollection;
  setCharacterCollection(): void;
  // doc://com.apple.documentation/documentation/appkit/nsglyphinfo/1447132-glyphname
  glyphName(): cocoascript.NSString;
  setGlyphName(): void;
  // 
  alloc():cocoascript.NSGlyphInfo;
  // 
  init():cocoascript.NSGlyphInfo;
}
}
declare const NSGlyphInfo: cocoascript.NSGlyphInfo;

