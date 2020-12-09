declare namespace cocoascript {
/**
 * A specialized button that allows the user to toggle if the map tracks to the heading the user is facing. 
 * doc://com.apple.documentation/documentation/mapkit/mkusertrackingbutton
 */
interface MKUserTrackingButton extends UIView {
  // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbutton/2867283-mapview
  mapView(): cocoascript.MKMapView;
  setMapView(): void;
  // 
  alloc():cocoascript.MKUserTrackingButton;
  // 
  init():cocoascript.MKUserTrackingButton;
}
}
declare const MKUserTrackingButton: cocoascript.MKUserTrackingButton;

