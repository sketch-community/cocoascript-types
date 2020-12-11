declare namespace cocoascript {
  /**
   * The information that describes a train trip.
   * doc://com.apple.documentation/documentation/sirikit/intraintrip
   */
  interface INTrainTrip extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3191897-initwithprovider
    initWithProvider_trainName_trainNumber_tripDuration_departureStationLocation_departurePlatform_arrivalStationLocation_arrivalPlatform(provider: cocoascript.NSString, trainName: cocoascript.NSString, trainNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureStationLocation: cocoascript.CLPlacemark, departurePlatform: cocoascript.NSString, arrivalStationLocation: cocoascript.CLPlacemark, arrivalPlatform: cocoascript.NSString):cocoascript.INTrainTrip;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3191898-provider
    provider(): cocoascript.NSString;
    setProvider(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141904-trainname
    trainName(): cocoascript.NSString;
    setTrainName(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141905-trainnumber
    trainNumber(): cocoascript.NSString;
    setTrainNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141906-tripduration
    tripDuration(): cocoascript.INDateComponentsRange;
    setTripDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141901-departurestationlocation
    departureStationLocation(): cocoascript.CLPlacemark;
    setDepartureStationLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141900-departureplatform
    departurePlatform(): cocoascript.NSString;
    setDeparturePlatform(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141899-arrivalstationlocation
    arrivalStationLocation(): cocoascript.CLPlacemark;
    setArrivalStationLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141898-arrivalplatform
    arrivalPlatform(): cocoascript.NSString;
    setArrivalPlatform(): void;
    //
    alloc():cocoascript.INTrainTrip;
    //
    init():cocoascript.INTrainTrip;
  }
}

declare const INTrainTrip: cocoascript.INTrainTrip;
