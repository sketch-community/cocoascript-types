declare namespace cocoascript {
/**
 * The azimuth (orientation) of the user’s device, relative to true or magnetic north.
 * doc://com.apple.documentation/documentation/corelocation/clheading
 */
interface CLHeading extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423763-magneticheading
  magneticHeading(): cocoascript.CLLocationDirection;
  setMagneticHeading(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423568-trueheading
  trueHeading(): cocoascript.CLLocationDirection;
  setTrueHeading(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423705-headingaccuracy
  headingAccuracy(): cocoascript.CLLocationDirection;
  setHeadingAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423525-timestamp
  timestamp(): cocoascript.NSDate;
  setTimestamp(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423685-x
  x(): cocoascript.CLHeadingComponentValue;
  setX(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423617-y
  y(): cocoascript.CLHeadingComponentValue;
  setY(): void;
  // doc://com.apple.documentation/documentation/corelocation/clheading/1423609-z
  z(): cocoascript.CLHeadingComponentValue;
  setZ(): void;
  // 
  alloc():cocoascript.CLHeading;
  // 
  init():cocoascript.CLHeading;
}
}
declare const CLHeading: cocoascript.CLHeading;

