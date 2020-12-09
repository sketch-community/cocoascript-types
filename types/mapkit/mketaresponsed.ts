declare namespace cocoascript {
/**
 * The travel-time information returned by Apple servers. 
 * doc://com.apple.documentation/documentation/mapkit/mketaresponse
 */
interface MKETAResponse extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451947-source
  source(): cocoascript.MKMapItem;
  setSource(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452611-destination
  destination(): cocoascript.MKMapItem;
  setDestination(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452551-expectedtraveltime
  expectedTravelTime(): cocoascript.NSTimeInterval;
  setExpectedTravelTime(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452644-expecteddeparturedate
  expectedDepartureDate(): cocoascript.NSDate;
  setExpectedDepartureDate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451881-expectedarrivaldate
  expectedArrivalDate(): cocoascript.NSDate;
  setExpectedArrivalDate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452164-distance
  distance(): cocoascript.CLLocationDistance;
  setDistance(): void;
  // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452616-transporttype
  transportType(): cocoascript.MKDirectionsTransportType;
  setTransportType(): void;
  // 
  alloc():cocoascript.MKETAResponse;
  // 
  init():cocoascript.MKETAResponse;
}
}
declare const MKETAResponse: cocoascript.MKETAResponse;

