declare namespace cocoascript {
/**
 * The information that describes a boat trip.
 * doc://com.apple.documentation/documentation/sirikit/inboattrip
 */
interface INBoatTrip extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552103-initwithprovider
  initWithProvider_boatName_boatNumber_tripDuration_departureBoatTerminalLocation_arrivalBoatTerminalLocation(provider: cocoascript.NSString, boatName: cocoascript.NSString, boatNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureBoatTerminalLocation: cocoascript.CLPlacemark, arrivalBoatTerminalLocation: cocoascript.CLPlacemark):cocoascript.INBoatTrip;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552104-provider
  provider(): cocoascript.NSString;
  setProvider(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552100-boatname
  boatName(): cocoascript.NSString;
  setBoatName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552101-boatnumber
  boatNumber(): cocoascript.NSString;
  setBoatNumber(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552105-tripduration
  tripDuration(): cocoascript.INDateComponentsRange;
  setTripDuration(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552102-departureboatterminallocation
  departureBoatTerminalLocation(): cocoascript.CLPlacemark;
  setDepartureBoatTerminalLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552099-arrivalboatterminallocation
  arrivalBoatTerminalLocation(): cocoascript.CLPlacemark;
  setArrivalBoatTerminalLocation(): void;
  // 
  alloc():cocoascript.INBoatTrip;
  // 
  init():cocoascript.INBoatTrip;
}
}
declare const INBoatTrip: cocoascript.INBoatTrip;

