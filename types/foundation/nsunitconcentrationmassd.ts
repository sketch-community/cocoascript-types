declare namespace cocoascript {
/**
 * A unit of measure for concentration of mass.
 * doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass
 */
interface NSUnitConcentrationMass extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass/1856019-gramsperliter
  gramsPerLiter(): cocoascript.NSUnitConcentrationMass;
  setGramsPerLiter(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitconcentrationmass/1856024-milligramsperdeciliter
  milligramsPerDeciliter(): cocoascript.NSUnitConcentrationMass;
  setMilligramsPerDeciliter(): void;
  // 
  alloc():cocoascript.NSUnitConcentrationMass;
  // 
  init():cocoascript.NSUnitConcentrationMass;
}
}
declare const NSUnitConcentrationMass: cocoascript.NSUnitConcentrationMass;

