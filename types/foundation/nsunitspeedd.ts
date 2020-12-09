declare namespace cocoascript {
/**
 * A unit of measure for speed.
 * doc://com.apple.documentation/documentation/foundation/nsunitspeed
 */
interface NSUnitSpeed extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856079-meterspersecond
  metersPerSecond(): cocoascript.NSUnitSpeed;
  setMetersPerSecond(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856044-kilometersperhour
  kilometersPerHour(): cocoascript.NSUnitSpeed;
  setKilometersPerHour(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856098-milesperhour
  milesPerHour(): cocoascript.NSUnitSpeed;
  setMilesPerHour(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitspeed/1856050-knots
  knots(): cocoascript.NSUnitSpeed;
  setKnots(): void;
  // 
  alloc():cocoascript.NSUnitSpeed;
  // 
  init():cocoascript.NSUnitSpeed;
}
}
declare const NSUnitSpeed: cocoascript.NSUnitSpeed;

