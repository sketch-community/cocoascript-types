declare namespace cocoascript {
/**
 * A unit of measure for acceleration.
 * doc://com.apple.documentation/documentation/foundation/nsunitacceleration
 */
interface NSUnitAcceleration extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitacceleration/1856015-meterspersecondsquared
  metersPerSecondSquared(): cocoascript.NSUnitAcceleration;
  setMetersPerSecondSquared(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitacceleration/1690681-gravity
  gravity(): cocoascript.NSUnitAcceleration;
  setGravity(): void;
  // 
  alloc():cocoascript.NSUnitAcceleration;
  // 
  init():cocoascript.NSUnitAcceleration;
}
}
declare const NSUnitAcceleration: cocoascript.NSUnitAcceleration;

