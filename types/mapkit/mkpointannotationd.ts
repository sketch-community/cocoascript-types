declare namespace cocoascript {
/**
 * A string-based annotation that you apply to a specific map point.
 * doc://com.apple.documentation/documentation/mapkit/mkpointannotation
 */
interface MKPointAnnotation extends MKShape {
  // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235758-init
  init():cocoascript.MKPointAnnotation;
  // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235759-initwithcoordinate
  initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKPointAnnotation;
  // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235760-initwithcoordinate
  initWithCoordinate_title_subtitle(coordinate: cocoascript.CLLocationCoordinate2D, title: cocoascript.NSString, subtitle: cocoascript.NSString):cocoascript.MKPointAnnotation;
  // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/1452620-coordinate
  coordinate(): cocoascript.CLLocationCoordinate2D;
  setCoordinate(): void;
  // 
  alloc():cocoascript.MKPointAnnotation;
  // 
  init():cocoascript.MKPointAnnotation;
}
}
declare const MKPointAnnotation: cocoascript.MKPointAnnotation;

