declare namespace cocoascript {
/**
 * The information that describes an airport.
 * doc://com.apple.documentation/documentation/sirikit/inairport
 */
interface INAirport extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inairport/3113784-initwithname
  initWithName_iataCode_icaoCode(name: cocoascript.NSString, iataCode: cocoascript.NSString, icaoCode: cocoascript.NSString):cocoascript.INAirport;
  // doc://com.apple.documentation/documentation/sirikit/inairport/3113785-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairport/3113782-iatacode
  iataCode(): cocoascript.NSString;
  setIataCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairport/3113783-icaocode
  icaoCode(): cocoascript.NSString;
  setIcaoCode(): void;
  // 
  alloc():cocoascript.INAirport;
  // 
  init():cocoascript.INAirport;
}
}
declare const INAirport: cocoascript.INAirport;

