declare namespace cocoascript {
/**
 * Information describing a bus trip.
 * doc://com.apple.documentation/documentation/sirikit/inbustrip
 */
interface INBusTrip extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552117-initwithprovider
  initWithProvider_busName_busNumber_tripDuration_departureBusStopLocation_departurePlatform_arrivalBusStopLocation_arrivalPlatform(provider: cocoascript.NSString, busName: cocoascript.NSString, busNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureBusStopLocation: cocoascript.CLPlacemark, departurePlatform: cocoascript.NSString, arrivalBusStopLocation: cocoascript.CLPlacemark, arrivalPlatform: cocoascript.NSString):cocoascript.INBusTrip;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552111-arrivalbusstoplocation
  arrivalBusStopLocation(): cocoascript.CLPlacemark;
  setArrivalBusStopLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552112-arrivalplatform
  arrivalPlatform(): cocoascript.NSString;
  setArrivalPlatform(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552113-busname
  busName(): cocoascript.NSString;
  setBusName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552114-busnumber
  busNumber(): cocoascript.NSString;
  setBusNumber(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552115-departurebusstoplocation
  departureBusStopLocation(): cocoascript.CLPlacemark;
  setDepartureBusStopLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552116-departureplatform
  departurePlatform(): cocoascript.NSString;
  setDeparturePlatform(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552118-provider
  provider(): cocoascript.NSString;
  setProvider(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552119-tripduration
  tripDuration(): cocoascript.INDateComponentsRange;
  setTripDuration(): void;
  // 
  alloc():cocoascript.INBusTrip;
  // 
  init():cocoascript.INBusTrip;
}
}
declare const INBusTrip: cocoascript.INBusTrip;

