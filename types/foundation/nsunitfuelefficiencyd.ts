declare namespace cocoascript {
  /**
   * A unit of measure for fuel efficiency.
   * doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency
   */
  interface NSUnitFuelEfficiency extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856089-milesperimperialgallon
    milesPerImperialGallon(): cocoascript.NSUnitFuelEfficiency;
    setMilesPerImperialGallon(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856054-litersper100kilometers
    litersPer100Kilometers(): cocoascript.NSUnitFuelEfficiency;
    setLitersPer100Kilometers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitfuelefficiency/1856085-milespergallon
    milesPerGallon(): cocoascript.NSUnitFuelEfficiency;
    setMilesPerGallon(): void;
    //
    alloc():cocoascript.NSUnitFuelEfficiency;
    //
    init():cocoascript.NSUnitFuelEfficiency;
  }
}

declare const NSUnitFuelEfficiency: cocoascript.NSUnitFuelEfficiency;
