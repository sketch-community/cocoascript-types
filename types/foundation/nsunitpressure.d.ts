declare namespace cocoascript {
  /**
   * A unit of measure for pressure.
   * doc://com.apple.documentation/documentation/foundation/nsunitpressure
   */
  interface NSUnitPressure extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1855983-gigapascals
    gigapascals(): cocoascript.NSUnitPressure;
    setGigapascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856115-megapascals
    megapascals(): cocoascript.NSUnitPressure;
    setMegapascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856057-kilopascals
    kilopascals(): cocoascript.NSUnitPressure;
    setKilopascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856111-hectopascals
    hectopascals(): cocoascript.NSUnitPressure;
    setHectopascals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856074-inchesofmercury
    inchesOfMercury(): cocoascript.NSUnitPressure;
    setInchesOfMercury(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856109-bars
    bars(): cocoascript.NSUnitPressure;
    setBars(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856093-millibars
    millibars(): cocoascript.NSUnitPressure;
    setMillibars(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856052-millimetersofmercury
    millimetersOfMercury(): cocoascript.NSUnitPressure;
    setMillimetersOfMercury(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856096-newtonspermeterssquared
    newtonsPerMetersSquared(): cocoascript.NSUnitPressure;
    setNewtonsPerMetersSquared(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitpressure/1856077-poundsforcepersquareinch
    poundsForcePerSquareInch(): cocoascript.NSUnitPressure;
    setPoundsForcePerSquareInch(): void;
    //
    alloc():cocoascript.NSUnitPressure;
    //
    init():cocoascript.NSUnitPressure;
  }
}

declare const NSUnitPressure: cocoascript.NSUnitPressure;
