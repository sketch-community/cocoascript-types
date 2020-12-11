declare namespace cocoascript {
  /**
   * Defines the interface for receiving messages from an
   * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate
   */
  interface MKReverseGeocoderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618476-reversegeocoder
    reverseGeocoder_didFindPlacemark(geocoder: cocoascript.MKReverseGeocoder, placemark: cocoascript.MKPlacemark):void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618473-reversegeocoder
    reverseGeocoder_didFailWithError(geocoder: cocoascript.MKReverseGeocoder, error: cocoascript.NSError):void;
  }
}
