declare namespace cocoascript {
/**
 * A user-friendly description of a location on the map.  
 * doc://com.apple.documentation/documentation/mapkit/mkplacemark
 */
interface MKPlacemark extends CLPlacemark {
  // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172460-initwithcoordinate
  initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKPlacemark;
  // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172461-initwithcoordinate
  initWithCoordinate_postalAddress(coordinate: cocoascript.CLLocationCoordinate2D, postalAddress: cocoascript.CNPostalAddress):cocoascript.MKPlacemark;
  // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451895-initwithcoordinate
  initWithCoordinate_addressDictionary(coordinate: cocoascript.CLLocationCoordinate2D, addressDictionary: cocoascript.MKPlacemark):cocoascript.MKPlacemark;
  // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451952-countrycode
  countryCode(): cocoascript.NSString;
  setCountryCode(): void;
  // 
  alloc():cocoascript.MKPlacemark;
  // 
  init():cocoascript.MKPlacemark;
}
}
declare const MKPlacemark: cocoascript.MKPlacemark;

