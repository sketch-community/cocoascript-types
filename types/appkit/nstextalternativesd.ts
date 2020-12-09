declare namespace cocoascript {
/**
 * A list of alternative strings for a piece of text.
 * doc://com.apple.documentation/documentation/appkit/nstextalternatives
 */
interface NSTextAlternatives extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstextalternatives/1529445-initwithprimarystring
  initWithPrimaryString_alternativeStrings(primaryString: cocoascript.NSString, alternativeStrings: cocoascript.NSString):cocoascript.NSTextAlternatives;
  // doc://com.apple.documentation/documentation/appkit/nstextalternatives/1526166-primarystring
  primaryString(): cocoascript.NSString;
  setPrimaryString(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextalternatives/1527585-alternativestrings
  alternativeStrings(): cocoascript.NSString;
  setAlternativeStrings(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextalternatives/1525721-noteselectedalternativestring
  noteSelectedAlternativeString(alternativeString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nstextalternativesselectedalternativestringnotification
  NSTextAlternativesSelectedAlternativeStringNotification(): cocoascript.NSNotificationName;
  setNSTextAlternativesSelectedAlternativeStringNotification(): void;
  // 
  alloc():cocoascript.NSTextAlternatives;
  // 
  init():cocoascript.NSTextAlternatives;
}
}
declare const NSTextAlternatives: cocoascript.NSTextAlternatives;

