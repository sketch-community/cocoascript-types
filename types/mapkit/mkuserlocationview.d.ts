declare namespace cocoascript {
  /**
   * An annotation view that shows the user’s location with the default MapKit styling.
   * doc://com.apple.documentation/documentation/mapkit/mkuserlocationview
   */
  interface MKUserLocationView extends MKAnnotationView {
    //
    alloc():cocoascript.MKUserLocationView;
    //
    init():cocoascript.MKUserLocationView;
  }
}

declare const MKUserLocationView: cocoascript.MKUserLocationView;
