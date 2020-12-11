declare namespace cocoascript {
  /**
   * A specialized view that displays and controls the zoom level of the map view.
   * doc://com.apple.documentation/documentation/mapkit/mkzoomcontrol
   */
  interface MKZoomControl extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkzoomcontrol/3567217-mapview
    mapView(): cocoascript.MKMapView;
    setMapView(): void;
    //
    alloc():cocoascript.MKZoomControl;
    //
    init():cocoascript.MKZoomControl;
  }
}

declare const MKZoomControl: cocoascript.MKZoomControl;
