declare namespace cocoascript {
  /**
   * A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.
   * doc://com.apple.documentation/documentation/corelocation/clplacemark
   */
  interface CLPlacemark extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423818-initwithplacemark
    initWithPlacemark(placemark: cocoascript.CLPlacemark):cocoascript.CLPlacemark;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423603-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423634-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423796-isocountrycode
    ISOcountryCode(): cocoascript.NSString;
    setISOcountryCode(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423800-country
    country(): cocoascript.NSString;
    setCountry(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423851-postalcode
    postalCode(): cocoascript.NSString;
    setPostalCode(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423628-administrativearea
    administrativeArea(): cocoascript.NSString;
    setAdministrativeArea(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423776-subadministrativearea
    subAdministrativeArea(): cocoascript.NSString;
    setSubAdministrativeArea(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423507-locality
    locality(): cocoascript.NSString;
    setLocality(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423794-sublocality
    subLocality(): cocoascript.NSString;
    setSubLocality(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423814-thoroughfare
    thoroughfare(): cocoascript.NSString;
    setThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423782-subthoroughfare
    subThoroughfare(): cocoascript.NSString;
    setSubThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423808-region
    region(): cocoascript.CLRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423707-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/2890749-postaladdress
    postalAddress(): cocoascript.CNPostalAddress;
    setPostalAddress(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423605-addressdictionary
    addressDictionary(): cocoascript.NSDictionary;
    setAddressDictionary(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423738-inlandwater
    inlandWater(): cocoascript.NSString;
    setInlandWater(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423619-ocean
    ocean(): cocoascript.NSString;
    setOcean(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423673-areasofinterest
    areasOfInterest(): cocoascript.NSString;
    setAreasOfInterest(): void;
    //
    alloc():cocoascript.CLPlacemark;
    //
    init():cocoascript.CLPlacemark;
  }
}

declare const CLPlacemark: cocoascript.CLPlacemark;
