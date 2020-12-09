declare namespace cocoascript {
/**
 * An object that performs the initial, nominal glyph generation phase in the layout process.
 * doc://com.apple.documentation/documentation/appkit/nsglyphgenerator
 */
interface NSGlyphGenerator extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsglyphgenerator/1425155-sharedglyphgenerator
  sharedGlyphGenerator(): cocoascript.NSGlyphGenerator;
  setSharedGlyphGenerator(): void;
  // doc://com.apple.documentation/documentation/appkit/nsglyphgenerator/1425139-generateglyphsforglyphstorage
  generateGlyphsForGlyphStorage_desiredNumberOfCharacters_glyphIndex_characterIndex(glyphStorage: cocoascript.NSGlyphStorage, nChars: cocoascript.NSUInteger, glyphIndex: cocoascript.NSUInteger, charIndex: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.NSGlyphGenerator;
  // 
  init():cocoascript.NSGlyphGenerator;
}
}
declare const NSGlyphGenerator: cocoascript.NSGlyphGenerator;

