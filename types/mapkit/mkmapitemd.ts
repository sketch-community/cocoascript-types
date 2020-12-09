declare namespace cocoascript {
/**
 * A point of interest on the map.  
 * doc://com.apple.documentation/documentation/mapkit/mkmapitem
 */
interface MKMapItem extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452285-initwithplacemark
  initWithPlacemark(placemark: cocoascript.MKPlacemark):cocoascript.MKMapItem;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452134-placemark
  placemark(): cocoascript.MKPlacemark;
  setPlacemark(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3143415-pointofinterestcategory
  pointOfInterestCategory(): cocoascript.MKPointOfInterestCategory;
  setPointOfInterestCategory(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452319-iscurrentlocation
  isCurrentLocation(): cocoascript.BOOL;
  setIsCurrentLocation(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452339-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452088-phonenumber
  phoneNumber(): cocoascript.NSString;
  setPhoneNumber(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452746-url
  url(): cocoascript.NSURL;
  setUrl(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452431-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452239-openinmapswithlaunchoptions
  openInMapsWithLaunchOptions(launchOptions: cocoascript.MKMapItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3395859-openinmapswithlaunchoptions
  openInMapsWithLaunchOptions_fromScene_completionHandler(launchOptions: cocoascript.MKMapItem, scene: cocoascript.UIScene, completion: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapitemtypeidentifier
  MKMapItemTypeIdentifier(): cocoascript.const;
  setMKMapItemTypeIdentifier(): void;
  // 
  alloc():cocoascript.MKMapItem;
  // 
  init():cocoascript.MKMapItem;
}
}
declare const MKMapItem: cocoascript.MKMapItem;

