declare namespace cocoascript {
/**
 * A rectangular area on a two-dimensional map projection.
 * doc://com.apple.documentation/documentation/mapkit/mkmaprect
 */
interface MKMapRect {
  // doc://com.apple.documentation/documentation/mapkit/1452453-mkmaprectmake
  MKMapRectMake(): number;
  setMKMapRectMake(): void;
  // doc://com.apple.documentation/documentation/mapkit/1452357-mkcoordinateregionformaprect
  MKCoordinateRegionForMapRect(): cocoascript.MKMapRect;
  setMKCoordinateRegionForMapRect(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmaprect/1452283-origin
  origin(): cocoascript.MKMapPoint;
  setOrigin(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmaprect/1452182-size
  size(): cocoascript.MKMapSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/mapkit/1452558-mkmaprectremainder
  MKMapRectRemainder(): cocoascript.MKMapRect;
  setMKMapRectRemainder(): void;
  // doc://com.apple.documentation/documentation/mapkit/1452123-mkmaprectunion
  MKMapRectUnion(): cocoascript.MKMapRect;
  setMKMapRectUnion(): void;
  // doc://com.apple.documentation/documentation/mapkit/1452443-mkmaprectintersection
  MKMapRectIntersection(): cocoascript.MKMapRect;
  setMKMapRectIntersection(): void;
  // doc://com.apple.documentation/documentation/mapkit/1451956-mkmaprectinset
  MKMapRectInset(): number;
  setMKMapRectInset(): void;
  // doc://com.apple.documentation/documentation/mapkit/1452407-mkmaprectoffset
  MKMapRectOffset(): number;
  setMKMapRectOffset(): void;
  // doc://com.apple.documentation/documentation/mapkit/1451996-mkstringfrommaprect
  MKStringFromMapRect(): cocoascript.MKMapRect;
  setMKStringFromMapRect(): void;
}
}

