declare namespace cocoascript {
  /**
   * A specific vehicle used by a ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inridevehicle
   */
  interface INRideVehicle extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649589-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649590-mapannotationimage
    mapAnnotationImage(): cocoascript.INImage;
    setMapAnnotationImage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649593-registrationplate
    registrationPlate(): cocoascript.NSString;
    setRegistrationPlate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649588-manufacturer
    manufacturer(): cocoascript.NSString;
    setManufacturer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649592-model
    model(): cocoascript.NSString;
    setModel(): void;
    //
    alloc():cocoascript.INRideVehicle;
    //
    init():cocoascript.INRideVehicle;
  }
}

declare const INRideVehicle: cocoascript.INRideVehicle;
