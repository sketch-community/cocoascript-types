declare namespace cocoascript {
/**
 * A unit of measure for rotation.
 * doc://com.apple.documentation/documentation/foundation/nsunitangle
 */
interface NSUnitAngle extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856083-degrees
  degrees(): cocoascript.NSUnitAngle;
  setDegrees(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856069-arcminutes
  arcMinutes(): cocoascript.NSUnitAngle;
  setArcMinutes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856114-arcseconds
  arcSeconds(): cocoascript.NSUnitAngle;
  setArcSeconds(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1856062-radians
  radians(): cocoascript.NSUnitAngle;
  setRadians(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1855988-gradians
  gradians(): cocoascript.NSUnitAngle;
  setGradians(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitangle/1855992-revolutions
  revolutions(): cocoascript.NSUnitAngle;
  setRevolutions(): void;
  // 
  alloc():cocoascript.NSUnitAngle;
  // 
  init():cocoascript.NSUnitAngle;
}
}
declare const NSUnitAngle: cocoascript.NSUnitAngle;

