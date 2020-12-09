declare namespace cocoascript {
/**
 * Operating system version structure used with 
 * doc://com.apple.documentation/documentation/foundation/nsoperatingsystemversion
 */
interface NSOperatingSystemVersion {
  // doc://com.apple.documentation/documentation/foundation/nsoperatingsystemversion/1414662-majorversion
  majorVersion(): cocoascript.NSInteger;
  setMajorVersion(): void;
  // doc://com.apple.documentation/documentation/foundation/nsoperatingsystemversion/1413801-minorversion
  minorVersion(): cocoascript.NSInteger;
  setMinorVersion(): void;
  // doc://com.apple.documentation/documentation/foundation/nsoperatingsystemversion/1415564-patchversion
  patchVersion(): cocoascript.NSInteger;
  setPatchVersion(): void;
}
}

