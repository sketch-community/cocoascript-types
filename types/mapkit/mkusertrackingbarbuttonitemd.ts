declare namespace cocoascript {
/**
 * A specialized bar button item that allows the user to toggle if the map tracks to the heading the user is facing.
 * doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem
 */
interface MKUserTrackingBarButtonItem extends UIBarButtonItem {
  // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem/1620146-initwithmapview
  initWithMapView(mapView: cocoascript.MKMapView):cocoascript.MKUserTrackingBarButtonItem;
  // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem/1620161-mapview
  mapView(): cocoascript.MKMapView;
  setMapView(): void;
  // 
  alloc():cocoascript.MKUserTrackingBarButtonItem;
  // 
  init():cocoascript.MKUserTrackingBarButtonItem;
}
}
declare const MKUserTrackingBarButtonItem: cocoascript.MKUserTrackingBarButtonItem;

