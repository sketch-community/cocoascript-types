declare namespace cocoascript {
/**
 * A specialized view that displays and controls the pitch angle of the map view.
 * doc://com.apple.documentation/documentation/mapkit/mkpitchcontrol
 */
interface MKPitchControl extends NSView {
  // doc://com.apple.documentation/documentation/mapkit/mkpitchcontrol/3567214-mapview
  mapView(): cocoascript.MKMapView;
  setMapView(): void;
  // 
  alloc():cocoascript.MKPitchControl;
  // 
  init():cocoascript.MKPitchControl;
}
}
declare const MKPitchControl: cocoascript.MKPitchControl;

