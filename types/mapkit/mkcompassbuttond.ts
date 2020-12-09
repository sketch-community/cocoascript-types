declare namespace cocoascript {
/**
 * A specialized view that displays the current compass heading for its associated map.
 * doc://com.apple.documentation/documentation/mapkit/mkcompassbutton
 */
interface MKCompassButton extends NSView {
  // doc://com.apple.documentation/documentation/mapkit/mkcompassbutton/2890264-mapview
  mapView(): cocoascript.MKMapView;
  setMapView(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcompassbutton/2890262-compassvisibility
  compassVisibility(): cocoascript.MKFeatureVisibility;
  setCompassVisibility(): void;
  // 
  alloc():cocoascript.MKCompassButton;
  // 
  init():cocoascript.MKCompassButton;
}
}
declare const MKCompassButton: cocoascript.MKCompassButton;

