declare namespace cocoascript {
/**
 * The properties you use to configure a text image generator filter.
 * doc://com.apple.documentation/documentation/coreimage/citextimagegenerator
 */
interface CITextImageGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228785-fontname
  fontName(): cocoascript.NSString;
  setFontName(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228786-fontsize
  fontSize(): number;
  setFontSize(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228787-scalefactor
  scaleFactor(): number;
  setScaleFactor(): void;
  // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228788-text
  text(): cocoascript.NSString;
  setText(): void;
}
}

