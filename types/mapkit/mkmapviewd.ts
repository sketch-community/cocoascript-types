declare namespace cocoascript {
/**
 * An embeddable map interface, similar to the one provided by the Maps application.  
 * doc://com.apple.documentation/documentation/mapkit/mkmapview
 */
interface MKMapView extends NSView {
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452115-delegate
  delegate(): cocoascript.MKMapViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452742-maptype
  mapType(): cocoascript.MKMapType;
  setMapType(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452577-zoomenabled
  zoomEnabled(): cocoascript.BOOL;
  setZoomEnabled(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451998-scrollenabled
  scrollEnabled(): cocoascript.BOOL;
  setScrollEnabled(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452265-pitchenabled
  pitchEnabled(): cocoascript.BOOL;
  setPitchEnabled(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452274-rotateenabled
  rotateEnabled(): cocoascript.BOOL;
  setRotateEnabled(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452709-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452768-setregion
  setRegion_animated(region: cocoascript.MKCoordinateRegion, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451901-centercoordinate
  centerCoordinate(): cocoascript.CLLocationCoordinate2D;
  setCenterCoordinate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451976-setcentercoordinate
  setCenterCoordinate_animated(coordinate: cocoascript.CLLocationCoordinate2D, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452309-showannotations
  showAnnotations_animated(annotations: cocoascript.MKAnnotation, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452732-visiblemaprect
  visibleMapRect(): cocoascript.MKMapRect;
  setVisibleMapRect(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452658-setvisiblemaprect
  setVisibleMapRect_animated(mapRect: cocoascript.MKMapRect, animate: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452461-setvisiblemaprect
  setVisibleMapRect_edgePadding_animated(mapRect: cocoascript.MKMapRect, insets: cocoascript.UIEdgeInsets, animate: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143418-setcameraboundary
  setCameraBoundary_animated(cameraBoundary: cocoascript.MKMapCameraBoundary, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143416-cameraboundary
  cameraBoundary(): cocoascript.MKMapCameraBoundary;
  setCameraBoundary(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3114302-setcamerazoomrange
  setCameraZoomRange_animated(cameraZoomRange: cocoascript.MKMapCameraZoomRange, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3114301-camerazoomrange
  cameraZoomRange(): cocoascript.MKMapCameraZoomRange;
  setCameraZoomRange(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452476-setcamera
  setCamera_animated(camera: cocoascript.MKMapCamera, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452277-camera
  camera(): cocoascript.MKMapCamera;
  setCamera(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143417-pointofinterestfilter
  pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
  setPointOfInterestFilter(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452483-showsbuildings
  showsBuildings(): cocoascript.BOOL;
  setShowsBuildings(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451879-showscompass
  showsCompass(): cocoascript.BOOL;
  setShowsCompass(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451958-showszoomcontrols
  showsZoomControls(): cocoascript.BOOL;
  setShowsZoomControls(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452343-showsscale
  showsScale(): cocoascript.BOOL;
  setShowsScale(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452433-showstraffic
  showsTraffic(): cocoascript.BOOL;
  setShowsTraffic(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452102-showspointsofinterest
  showsPointsOfInterest(): cocoascript.BOOL;
  setShowsPointsOfInterest(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/3567212-showspitchcontrol
  showsPitchControl(): cocoascript.BOOL;
  setShowsPitchControl(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452682-showsuserlocation
  showsUserLocation(): cocoascript.BOOL;
  setShowsUserLocation(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452040-userlocationvisible
  userLocationVisible(): cocoascript.BOOL;
  setUserLocationVisible(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452459-userlocation
  userLocation(): cocoascript.MKUserLocation;
  setUserLocation(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616208-usertrackingmode
  userTrackingMode(): cocoascript.MKUserTrackingMode;
  setUserTrackingMode(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616205-setusertrackingmode
  setUserTrackingMode_animated(mode: cocoascript.MKUserTrackingMode, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452593-annotations
  annotations(): cocoascript.MKAnnotation;
  setAnnotations(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452069-addannotation
  addAnnotation(annotation: cocoascript.MKAnnotation):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451889-addannotations
  addAnnotations(annotations: cocoascript.MKAnnotation):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452409-removeannotation
  removeAnnotation(annotation: cocoascript.MKAnnotation):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452130-removeannotations
  removeAnnotations(annotations: cocoascript.MKAnnotation):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452279-annotationsinmaprect
  annotationsInMapRect(mapRect: cocoascript.MKMapRect):cocoascript.MKAnnotation;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452717-annotationvisiblerect
  annotationVisibleRect(): cocoascript.CGRect;
  setAnnotationVisibleRect(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452570-selectedannotations
  selectedAnnotations(): cocoascript.MKAnnotation;
  setSelectedAnnotations(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451950-selectannotation
  selectAnnotation_animated(annotation: cocoascript.MKAnnotation, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451988-deselectannotation
  deselectAnnotation_animated(annotation: cocoascript.MKAnnotation, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/2887124-registerclass
  registerClass_forAnnotationViewWithReuseIdentifier(viewClass: cocoascript.Class, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/2887123-dequeuereusableannotationviewwit
  dequeueReusableAnnotationViewWithIdentifier_forAnnotation(identifier: cocoascript.NSString, annotation: cocoascript.MKAnnotation):cocoascript.MKAnnotationView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452672-dequeuereusableannotationviewwit
  dequeueReusableAnnotationViewWithIdentifier(identifier: cocoascript.NSString):cocoascript.MKAnnotationView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452512-viewforannotation
  viewForAnnotation(annotation: cocoascript.MKAnnotation):cocoascript.MKAnnotationView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier
  MKMapViewDefaultAnnotationViewReuseIdentifier(): cocoascript.const;
  setMKMapViewDefaultAnnotationViewReuseIdentifier(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultclusterannotationviewreuseidentifier
  MKMapViewDefaultClusterAnnotationViewReuseIdentifier(): cocoascript.const;
  setMKMapViewDefaultClusterAnnotationViewReuseIdentifier(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452784-overlays
  overlays(): cocoascript.MKOverlay;
  setOverlays(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452757-overlaysinlevel
  overlaysInLevel(level: cocoascript.MKOverlayLevel):cocoascript.MKOverlay;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452464-rendererforoverlay
  rendererForOverlay(overlay: cocoascript.MKOverlay):cocoascript.MKOverlayRenderer;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616201-viewforoverlay
  viewForOverlay(overlay: cocoascript.MKOverlay):cocoascript.MKOverlayView;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452635-addoverlay
  addOverlay_level(overlay: cocoascript.MKOverlay, level: cocoascript.MKOverlayLevel):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452518-addoverlays
  addOverlays_level(overlays: cocoascript.MKOverlay, level: cocoascript.MKOverlayLevel):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451964-addoverlay
  addOverlay(overlay: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452335-addoverlays
  addOverlays(overlays: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452723-insertoverlay
  insertOverlay_atIndex_level(overlay: cocoascript.MKOverlay, index: cocoascript.NSUInteger, level: cocoascript.MKOverlayLevel):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452249-insertoverlay
  insertOverlay_atIndex(overlay: cocoascript.MKOverlay, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452427-insertoverlay
  insertOverlay_aboveOverlay(overlay: cocoascript.MKOverlay, sibling: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452526-insertoverlay
  insertOverlay_belowOverlay(overlay: cocoascript.MKOverlay, sibling: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452491-exchangeoverlay
  exchangeOverlay_withOverlay(overlay1: cocoascript.MKOverlay, overlay2: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452575-exchangeoverlayatindex
  exchangeOverlayAtIndex_withOverlayAtIndex(index1: cocoascript.NSUInteger, index2: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451921-removeoverlay
  removeOverlay(overlay: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452719-removeoverlays
  removeOverlays(overlays: cocoascript.MKOverlay):void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452694-convertcoordinate
  convertCoordinate_toPointToView(coordinate: cocoascript.CLLocationCoordinate2D, view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452503-convertpoint
  convertPoint_toCoordinateFromView(point: cocoascript.CGPoint, view: cocoascript.UIView):cocoascript.CLLocationCoordinate2D;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452055-convertregion
  convertRegion_toRectToView(region: cocoascript.MKCoordinateRegion, view: cocoascript.UIView):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452305-convertrect
  convertRect_toRegionFromView(rect: cocoascript.CGRect, view: cocoascript.UIView):cocoascript.MKCoordinateRegion;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452371-regionthatfits
  regionThatFits(region: cocoascript.MKCoordinateRegion):cocoascript.MKCoordinateRegion;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452169-maprectthatfits
  mapRectThatFits(mapRect: cocoascript.MKMapRect):cocoascript.MKMapRect;
  // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452625-maprectthatfits
  mapRectThatFits_edgePadding(mapRect: cocoascript.MKMapRect, insets: cocoascript.UIEdgeInsets):cocoascript.MKMapRect;
  // 
  alloc():cocoascript.MKMapView;
  // 
  init():cocoascript.MKMapView;
}
}
declare const MKMapView: cocoascript.MKMapView;

