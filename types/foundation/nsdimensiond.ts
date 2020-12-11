declare namespace cocoascript {
  /**
   * An abstract class representing a dimensional unit of measure.
   * doc://com.apple.documentation/documentation/foundation/nsdimension
   */
  interface NSDimension extends NSUnit {
    // doc://com.apple.documentation/documentation/foundation/nsdimension/1823633-initwithsymbol
    initWithSymbol_converter(symbol: cocoascript.NSString, converter: cocoascript.NSUnitConverter):cocoascript.NSDimension;
    // doc://com.apple.documentation/documentation/foundation/nsdimension/1823516-converter
    converter(): cocoascript.NSUnitConverter;
    setConverter(): void;
    //
    alloc():cocoascript.NSDimension;
    //
    init():cocoascript.NSDimension;
  }
}

declare const NSDimension: cocoascript.NSDimension;
