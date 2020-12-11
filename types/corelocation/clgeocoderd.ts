declare namespace cocoascript {
  /**
   * An interface for converting between geographic coordinates and place names.
   * doc://com.apple.documentation/documentation/corelocation/clgeocoder
   */
  interface CLGeocoder extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2908779-reversegeocodelocation
    reverseGeocodeLocation_preferredLocale_completionHandler(location: cocoascript.CLLocation, locale: cocoascript.NSLocale, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423621-reversegeocodelocation
    reverseGeocodeLocation_completionHandler(location: cocoascript.CLLocation, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890753-geocodeaddressstring
    geocodeAddressString_inRegion_preferredLocale_completionHandler(addressString: cocoascript.NSString, region: cocoascript.CLRegion, locale: cocoascript.NSLocale, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423509-geocodeaddressstring
    geocodeAddressString_completionHandler(addressString: cocoascript.NSString, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423591-geocodeaddressstring
    geocodeAddressString_inRegion_completionHandler(addressString: cocoascript.NSString, region: cocoascript.CLRegion, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890752-geocodepostaladdress
    geocodePostalAddress_completionHandler(postalAddress: cocoascript.CNPostalAddress, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890750-geocodepostaladdress
    geocodePostalAddress_preferredLocale_completionHandler(postalAddress: cocoascript.CNPostalAddress, locale: cocoascript.NSLocale, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423693-geocodeaddressdictionary
    geocodeAddressDictionary_completionHandler(addressDictionary: cocoascript.NSDictionary, completionHandler: cocoascript.CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423562-cancelgeocode
    cancelGeocode():void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423765-geocoding
    geocoding(): cocoascript.BOOL;
    setGeocoding(): void;
    //
    alloc():cocoascript.CLGeocoder;
    //
    init():cocoascript.CLGeocoder;
  }
}

declare const CLGeocoder: cocoascript.CLGeocoder;
