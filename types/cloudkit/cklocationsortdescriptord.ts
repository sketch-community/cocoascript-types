declare namespace cocoascript {
/**
 * An object for sorting records that contain location data.
 * doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor
 */
interface CKLocationSortDescriptor extends NSSortDescriptor {
  // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1515071-initwithkey
  initWithKey_relativeLocation(key: cocoascript.NSString, relativeLocation: cocoascript.CLLocation):cocoascript.CKLocationSortDescriptor;
  // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1515257-initwithcoder
  initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKLocationSortDescriptor;
  // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1514915-relativelocation
  relativeLocation(): cocoascript.CLLocation;
  setRelativeLocation(): void;
  // 
  alloc():cocoascript.CKLocationSortDescriptor;
  // 
  init():cocoascript.CKLocationSortDescriptor;
}
}
declare const CKLocationSortDescriptor: cocoascript.CKLocationSortDescriptor;

