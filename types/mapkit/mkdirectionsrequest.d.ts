declare namespace cocoascript {
  /**
   * The start and end points of a route, along with the planned mode of transportation.
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest
   */
  interface MKDirectionsRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433158-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.MKDirectionsRequest;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433144-source
    source(): cocoascript.MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433156-setsource
    setSource(source: cocoascript.MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433146-destination
    destination(): cocoascript.MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433157-setdestination
    setDestination(destination: cocoascript.MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433152-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433154-requestsalternateroutes
    requestsAlternateRoutes(): cocoascript.BOOL;
    setRequestsAlternateRoutes(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433155-departuredate
    departureDate(): cocoascript.NSDate;
    setDepartureDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433148-arrivaldate
    arrivalDate(): cocoascript.NSDate;
    setArrivalDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionscamerakey
    MKLaunchOptionsCameraKey(): cocoascript.const;
    setMKLaunchOptionsCameraKey(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedefault
    MKLaunchOptionsDirectionsModeDefault(): cocoascript.const;
    setMKLaunchOptionsDirectionsModeDefault(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedriving
    MKLaunchOptionsDirectionsModeDriving(): cocoascript.const;
    setMKLaunchOptionsDirectionsModeDriving(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodekey
    MKLaunchOptionsDirectionsModeKey(): cocoascript.const;
    setMKLaunchOptionsDirectionsModeKey(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodetransit
    MKLaunchOptionsDirectionsModeTransit(): cocoascript.const;
    setMKLaunchOptionsDirectionsModeTransit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodewalking
    MKLaunchOptionsDirectionsModeWalking(): cocoascript.const;
    setMKLaunchOptionsDirectionsModeWalking(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapcenterkey
    MKLaunchOptionsMapCenterKey(): cocoascript.const;
    setMKLaunchOptionsMapCenterKey(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapspankey
    MKLaunchOptionsMapSpanKey(): cocoascript.const;
    setMKLaunchOptionsMapSpanKey(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmaptypekey
    MKLaunchOptionsMapTypeKey(): cocoascript.const;
    setMKLaunchOptionsMapTypeKey(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsshowstraffickey
    MKLaunchOptionsShowsTrafficKey(): cocoascript.const;
    setMKLaunchOptionsShowsTrafficKey(): void;
    //
    alloc():cocoascript.MKDirectionsRequest;
    //
    init():cocoascript.MKDirectionsRequest;
  }
}

declare const MKDirectionsRequest: cocoascript.MKDirectionsRequest;
