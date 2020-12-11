declare namespace cocoascript {
  /**
   * An annotation that always reflects the user's current location on the map.
   * doc://com.apple.documentation/documentation/mapkit/mkuserlocation
   */
  interface MKUserLocation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452415-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452084-updating
    updating(): cocoascript.BOOL;
    setUpdating(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452721-heading
    heading(): cocoascript.CLHeading;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452058-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452562-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    //
    alloc():cocoascript.MKUserLocation;
    //
    init():cocoascript.MKUserLocation;
  }
}

declare const MKUserLocation: cocoascript.MKUserLocation;
