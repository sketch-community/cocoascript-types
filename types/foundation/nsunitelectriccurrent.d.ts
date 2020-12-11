declare namespace cocoascript {
  /**
   * A unit of measure for electric current.
   * doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent
   */
  interface NSUnitElectricCurrent extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1855980-megaamperes
    megaamperes(): cocoascript.NSUnitElectricCurrent;
    setMegaamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856001-kiloamperes
    kiloamperes(): cocoascript.NSUnitElectricCurrent;
    setKiloamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1855973-amperes
    amperes(): cocoascript.NSUnitElectricCurrent;
    setAmperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856058-milliamperes
    milliamperes(): cocoascript.NSUnitElectricCurrent;
    setMilliamperes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitelectriccurrent/1856047-microamperes
    microamperes(): cocoascript.NSUnitElectricCurrent;
    setMicroamperes(): void;
    //
    alloc():cocoascript.NSUnitElectricCurrent;
    //
    init():cocoascript.NSUnitElectricCurrent;
  }
}

declare const NSUnitElectricCurrent: cocoascript.NSUnitElectricCurrent;
