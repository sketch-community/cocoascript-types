declare namespace cocoascript {
  /**
   * An interface for associating your content with a specific map location.
   * doc://com.apple.documentation/documentation/mapkit/mkannotation
   */
  interface MKAnnotation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429524-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429528-setcoordinate
    setCoordinate(newCoordinate: cocoascript.CLLocationCoordinate2D):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429522-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429520-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
  }
}
