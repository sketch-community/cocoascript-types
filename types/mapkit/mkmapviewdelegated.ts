declare namespace cocoascript {
/**
 * Optional methods that you use to receive map-related update messages. 
 * doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate
 */
interface MKMapViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452571-mapview
  mapView_regionWillChangeAnimated(mapView: cocoascript.MKMapView, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/2998428-mapviewdidchangevisibleregion
  mapViewDidChangeVisibleRegion(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452345-mapview
  mapView_regionDidChangeAnimated(mapView: cocoascript.MKMapView, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452744-mapviewwillstartloadingmap
  mapViewWillStartLoadingMap(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452291-mapviewdidfinishloadingmap
  mapViewDidFinishLoadingMap(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452327-mapviewdidfailloadingmap
  mapViewDidFailLoadingMap_withError(mapView: cocoascript.MKMapView, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1451970-mapviewwillstartrenderingmap
  mapViewWillStartRenderingMap(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1451897-mapviewdidfinishrenderingmap
  mapViewDidFinishRenderingMap_fullyRendered(mapView: cocoascript.MKMapView, fullyRendered: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452171-mapviewwillstartlocatinguser
  mapViewWillStartLocatingUser(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452715-mapviewdidstoplocatinguser
  mapViewDidStopLocatingUser(mapView: cocoascript.MKMapView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452086-mapview
  mapView_didUpdateUserLocation(mapView: cocoascript.MKMapView, userLocation: cocoascript.MKUserLocation):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452211-mapview
  mapView_didFailToLocateUserWithError(mapView: cocoascript.MKMapView, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616202-mapview
  mapView_didChangeUserTrackingMode_animated(mapView: cocoascript.MKMapView, mode: cocoascript.MKUserTrackingMode, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452045-mapview
  mapView_viewForAnnotation(mapView: cocoascript.MKMapView, annotation: cocoascript.MKAnnotation):cocoascript.MKAnnotationView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452311-mapview
  mapView_didAddAnnotationViews(mapView: cocoascript.MKMapView, views: cocoascript.MKAnnotationView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616211-mapview
  mapView_annotationView_calloutAccessoryControlTapped(mapView: cocoascript.MKMapView, view: cocoascript.MKAnnotationView, control: cocoascript.UIControl):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/2867923-mapview
  mapView_clusterAnnotationForMemberAnnotations(mapView: cocoascript.MKMapView, memberAnnotations: cocoascript.MKAnnotation):cocoascript.MKClusterAnnotation;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452229-mapview
  mapView_annotationView_didChangeDragState_fromOldState(mapView: cocoascript.MKMapView, view: cocoascript.MKAnnotationView, newState: cocoascript.MKAnnotationViewDragState, oldState: cocoascript.MKAnnotationViewDragState):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452393-mapview
  mapView_didSelectAnnotationView(mapView: cocoascript.MKMapView, view: cocoascript.MKAnnotationView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452707-mapview
  mapView_didDeselectAnnotationView(mapView: cocoascript.MKMapView, view: cocoascript.MKAnnotationView):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452203-mapview
  mapView_rendererForOverlay(mapView: cocoascript.MKMapView, overlay: cocoascript.MKOverlay):cocoascript.MKOverlayRenderer;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452609-mapview
  mapView_didAddOverlayRenderers(mapView: cocoascript.MKMapView, renderers: cocoascript.MKOverlayRenderer):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616210-mapview
  mapView_viewForOverlay(mapView: cocoascript.MKMapView, overlay: cocoascript.MKOverlay):cocoascript.MKOverlayView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616206-mapview
  mapView_didAddOverlayViews(mapView: cocoascript.MKMapView, overlayViews: cocoascript.NSArray):void;
}
}

