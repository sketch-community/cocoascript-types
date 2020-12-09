declare namespace cocoascript {
/**
 * A unit of measure for energy.
 * doc://com.apple.documentation/documentation/foundation/nsunitenergy
 */
interface NSUnitEnergy extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856113-kilojoules
  kilojoules(): cocoascript.NSUnitEnergy;
  setKilojoules(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1855987-joules
  joules(): cocoascript.NSUnitEnergy;
  setJoules(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856028-kilocalories
  kilocalories(): cocoascript.NSUnitEnergy;
  setKilocalories(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1855990-calories
  calories(): cocoascript.NSUnitEnergy;
  setCalories(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitenergy/1856092-kilowatthours
  kilowattHours(): cocoascript.NSUnitEnergy;
  setKilowattHours(): void;
  // 
  alloc():cocoascript.NSUnitEnergy;
  // 
  init():cocoascript.NSUnitEnergy;
}
}
declare const NSUnitEnergy: cocoascript.NSUnitEnergy;

