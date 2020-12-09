declare namespace cocoascript {
/**
 * The information that describes an airline.
 * doc://com.apple.documentation/documentation/sirikit/inairline
 */
interface INAirline extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inairline/3113779-initwithname
  initWithName_iataCode_icaoCode(name: cocoascript.NSString, iataCode: cocoascript.NSString, icaoCode: cocoascript.NSString):cocoascript.INAirline;
  // doc://com.apple.documentation/documentation/sirikit/inairline/3113780-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairline/3113777-iatacode
  iataCode(): cocoascript.NSString;
  setIataCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairline/3113778-icaocode
  icaoCode(): cocoascript.NSString;
  setIcaoCode(): void;
  // 
  alloc():cocoascript.INAirline;
  // 
  init():cocoascript.INAirline;
}
}
declare const INAirline: cocoascript.INAirline;

