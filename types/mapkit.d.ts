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
// doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier
declare const MKMapViewDefaultAnnotationViewReuseIdentifier: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultclusterannotationviewreuseidentifier
declare const MKMapViewDefaultClusterAnnotationViewReuseIdentifier: cocoascript.NSString;
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
declare namespace cocoascript {
  /**
   * Defines the methods for receiving search completion data.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate
   */
  interface MKLocalSearchCompleterDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1452209-completerdidupdateresults
    completerDidUpdateResults(completer: cocoascript.MKLocalSearchCompleter):void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1451885-completer
    completer_didFailWithError(completer: cocoascript.MKLocalSearchCompleter, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * Defines the interface for receiving messages from an
   * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate
   */
  interface MKReverseGeocoderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618476-reversegeocoder
    reverseGeocoder_didFindPlacemark(geocoder: cocoascript.MKReverseGeocoder, placemark: cocoascript.MKPlacemark):void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618473-reversegeocoder
    reverseGeocoder_didFailWithError(geocoder: cocoascript.MKReverseGeocoder, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * Objects that can be returned by the GeoJSON decoder.
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsonobject
   */
  interface MKGeoJSONObject extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A virtual camera for defining the appearance of the map.
   * doc://com.apple.documentation/documentation/mapkit/mkmapcamera
   */
  interface MKMapCamera extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411081-centercoordinate
    centerCoordinate(): cocoascript.CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411087-heading
    heading(): cocoascript.CLLocationDirection;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/3114295-centercoordinatedistance
    centerCoordinateDistance(): cocoascript.CLLocationDistance;
    setCenterCoordinateDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411083-pitch
    pitch(): cocoascript.CGFloat;
    setPitch(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411078-altitude
    altitude(): cocoascript.CLLocationDistance;
    setAltitude(): void;
    //
    alloc():cocoascript.MKMapCamera;
    //
    init():cocoascript.MKMapCamera;
  }
}

declare const MKMapCamera: cocoascript.MKMapCamera;
declare namespace cocoascript {
  /**
   * The parameters to use when searching for points of interest on the map.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest
   */
  interface MKLocalSearchRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235755-init
    init():cocoascript.MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452301-initwithcompletion
    initWithCompletion(completion: cocoascript.MKLocalSearchCompletion):cocoascript.MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235756-initwithnaturallanguagequery
    initWithNaturalLanguageQuery(naturalLanguageQuery: cocoascript.NSString):cocoascript.MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235757-initwithnaturallanguagequery
    initWithNaturalLanguageQuery_region(naturalLanguageQuery: cocoascript.NSString, region: cocoascript.MKCoordinateRegion):cocoascript.MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452353-naturallanguagequery
    naturalLanguageQuery(): cocoascript.NSString;
    setNaturalLanguageQuery(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1451919-region
    region(): cocoascript.MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143410-pointofinterestfilter
    pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143411-resulttypes
    resultTypes(): cocoascript.MKLocalSearchResultType;
    setResultTypes(): void;
    //
    alloc():cocoascript.MKLocalSearchRequest;
    //
    init():cocoascript.MKLocalSearchRequest;
  }
}

declare const MKLocalSearchRequest: cocoascript.MKLocalSearchRequest;
declare namespace cocoascript {
  /**
   * The options to use when capturing map-based imagery.
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions
   */
  interface MKMapSnapshotOptions extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452323-region
    region(): cocoascript.MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452727-maprect
    mapRect(): cocoascript.MKMapRect;
    setMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452082-camera
    camera(): cocoascript.MKMapCamera;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452341-maptype
    mapType(): cocoascript.MKMapType;
    setMapType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452191-showsbuildings
    showsBuildings(): cocoascript.BOOL;
    setShowsBuildings(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452316-showspointsofinterest
    showsPointsOfInterest(): cocoascript.BOOL;
    setShowsPointsOfInterest(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3172734-pointofinterestfilter
    pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3152864-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452485-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/2981023-appearance
    appearance(): cocoascript.NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1615960-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    //
    alloc():cocoascript.MKMapSnapshotOptions;
    //
    init():cocoascript.MKMapSnapshotOptions;
  }
}

declare const MKMapSnapshotOptions: cocoascript.MKMapSnapshotOptions;
declare namespace cocoascript {
  /**
   * A camera zoom range that limits the distances to which the user can zoom.
   * doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange
   */
  interface MKMapCameraZoomRange extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114298-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance_maxCenterCoordinateDistance(minDistance: cocoascript.CLLocationDistance, maxDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237246-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance(minDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237245-initwithmaxcentercoordinatedista
    initWithMaxCenterCoordinateDistance(maxDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114299-maxcentercoordinatedistance
    maxCenterCoordinateDistance(): cocoascript.CLLocationDistance;
    setMaxCenterCoordinateDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114300-mincentercoordinatedistance
    minCenterCoordinateDistance(): cocoascript.CLLocationDistance;
    setMinCenterCoordinateDistance(): void;
    //
    alloc():cocoascript.MKMapCameraZoomRange;
    //
    init():cocoascript.MKMapCameraZoomRange;
  }
}

declare const MKMapCameraZoomRange: cocoascript.MKMapCameraZoomRange;
declare namespace cocoascript {
  /**
   * A boundary of an area within which the map's center must remain.
   * doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary
   */
  interface MKMapCameraBoundary extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141908-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141909-initwithcoordinateregion
    initWithCoordinateRegion(region: cocoascript.MKCoordinateRegion):cocoascript.MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141910-initwithmaprect
    initWithMapRect(mapRect: cocoascript.MKMapRect):cocoascript.MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141911-maprect
    mapRect(): cocoascript.MKMapRect;
    setMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141912-region
    region(): cocoascript.MKCoordinateRegion;
    setRegion(): void;
    //
    alloc():cocoascript.MKMapCameraBoundary;
    //
    init():cocoascript.MKMapCameraBoundary;
  }
}

declare const MKMapCameraBoundary: cocoascript.MKMapCameraBoundary;
declare namespace cocoascript {
  /**
   * A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
   * doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter
   */
  interface MKPointOfInterestFilter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143464-filterexcludingallcategories
    filterExcludingAllCategories(): cocoascript.MKPointOfInterestFilter;
    setFilterExcludingAllCategories(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143465-filterincludingallcategories
    filterIncludingAllCategories(): cocoascript.MKPointOfInterestFilter;
    setFilterIncludingAllCategories(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143467-initexcludingcategories
    initExcludingCategories(categories: cocoascript.MKPointOfInterestCategory):cocoascript.MKPointOfInterestFilter;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143468-initincludingcategories
    initIncludingCategories(categories: cocoascript.MKPointOfInterestCategory):cocoascript.MKPointOfInterestFilter;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143463-excludescategory
    excludesCategory(category: cocoascript.MKPointOfInterestCategory):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143466-includescategory
    includesCategory(category: cocoascript.MKPointOfInterestCategory):cocoascript.BOOL;
    //
    alloc():cocoascript.MKPointOfInterestFilter;
    //
    init():cocoascript.MKPointOfInterestFilter;
  }
}

declare const MKPointOfInterestFilter: cocoascript.MKPointOfInterestFilter;
declare namespace cocoascript {
  /**
   * A structured request to use when searching for points of interest.
   * doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest
   */
  interface MKLocalPointsOfInterestRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564412-initwithcentercoordinate
    initWithCenterCoordinate_radius(coordinate: cocoascript.CLLocationCoordinate2D, radius: cocoascript.CLLocationDistance):cocoascript.MKLocalPointsOfInterestRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564413-initwithcoordinateregion
    initWithCoordinateRegion(region: cocoascript.MKCoordinateRegion):cocoascript.MKLocalPointsOfInterestRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564416-region
    region(): cocoascript.MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564411-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564415-radius
    radius(): cocoascript.CLLocationDistance;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564414-pointofinterestfilter
    pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    //
    alloc():cocoascript.MKLocalPointsOfInterestRequest;
    //
    init():cocoascript.MKLocalPointsOfInterestRequest;
  }
}

declare const MKLocalPointsOfInterestRequest: cocoascript.MKLocalPointsOfInterestRequest;
declare namespace cocoascript {
  /**
   * A point of interest on the map.
   * doc://com.apple.documentation/documentation/mapkit/mkmapitem
   */
  interface MKMapItem extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452285-initwithplacemark
    initWithPlacemark(placemark: cocoascript.MKPlacemark):cocoascript.MKMapItem;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452134-placemark
    placemark(): cocoascript.MKPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3143415-pointofinterestcategory
    pointOfInterestCategory(): cocoascript.MKPointOfInterestCategory;
    setPointOfInterestCategory(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452319-iscurrentlocation
    isCurrentLocation(): cocoascript.BOOL;
    setIsCurrentLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452339-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452088-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452746-url
    url(): cocoascript.NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452431-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452239-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions(launchOptions: cocoascript.MKMapItem):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3395859-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions_fromScene_completionHandler(launchOptions: cocoascript.MKMapItem, scene: cocoascript.UIScene, completion: cocoascript.BOOL):void;
    //
    alloc():cocoascript.MKMapItem;
    //
    init():cocoascript.MKMapItem;
  }
}

declare const MKMapItem: cocoascript.MKMapItem;
// doc://com.apple.documentation/documentation/mapkit/mkmapitemtypeidentifier
declare const MKMapItemTypeIdentifier: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The visual representation of one of your annotation objects.
   * doc://com.apple.documentation/documentation/mapkit/mkannotationview
   */
  interface MKAnnotationView extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452779-initwithannotation
    initWithAnnotation_reuseIdentifier(annotation: cocoascript.MKAnnotation, reuseIdentifier: cocoascript.NSString):cocoascript.MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1827527-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1451907-prepareforreuse
    prepareForReuse():void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2921514-preparefordisplay
    prepareForDisplay():void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867298-displaypriority
    displayPriority(): cocoascript.MKFeatureDisplayPriority;
    setDisplayPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/3547913-zpriority
    zPriority(): cocoascript.MKAnnotationViewZPriority;
    setZPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/3547912-selectedzpriority
    selectedZPriority(): cocoascript.MKAnnotationViewZPriority;
    setSelectedZPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452411-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452094-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452047-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452613-annotation
    annotation(): cocoascript.MKAnnotation;
    setAnnotation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452144-centeroffset
    centerOffset(): cocoascript.CGPoint;
    setCenterOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452771-calloutoffset
    calloutOffset(): cocoascript.CGPoint;
    setCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452060-reuseidentifier
    reuseIdentifier(): cocoascript.NSString;
    setReuseIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452381-setselected
    setSelected_animated(selected: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452777-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452451-canshowcallout
    canShowCallout(): cocoascript.BOOL;
    setCanShowCallout(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452423-leftcalloutaccessoryview
    leftCalloutAccessoryView(): cocoascript.UIView;
    setLeftCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452233-rightcalloutaccessoryview
    rightCalloutAccessoryView(): cocoascript.UIView;
    setRightCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452543-detailcalloutaccessoryview
    detailCalloutAccessoryView(): cocoascript.UIView;
    setDetailCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452545-leftcalloutoffset
    leftCalloutOffset(): cocoascript.CGPoint;
    setLeftCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452036-rightcalloutoffset
    rightCalloutOffset(): cocoascript.CGPoint;
    setRightCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452401-draggable
    draggable(): cocoascript.BOOL;
    setDraggable(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452639-setdragstate
    setDragState_animated(newDragState: cocoascript.MKAnnotationViewDragState, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1451941-dragstate
    dragState(): cocoascript.MKAnnotationViewDragState;
    setDragState(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2873315-collisionmode
    collisionMode(): cocoascript.MKAnnotationViewCollisionMode;
    setCollisionMode(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867297-clusteringidentifier
    clusteringIdentifier(): cocoascript.NSString;
    setClusteringIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867294-clusterannotationview
    clusterAnnotationView(): cocoascript.MKAnnotationView;
    setClusterAnnotationView(): void;
    //
    alloc():cocoascript.MKAnnotationView;
    //
    init():cocoascript.MKAnnotationView;
  }
}

declare const MKAnnotationView: cocoascript.MKAnnotationView;
// doc://com.apple.documentation/documentation/mapkit/mkannotationcalloutinfodidchangenotification
declare const MKAnnotationCalloutInfoDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An annotation view that displays a balloon-shaped marker at the designated location.
   * doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview
   */
  interface MKMarkerAnnotationView extends MKAnnotationView {
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873822-markertintcolor
    markerTintColor(): cocoascript.UIColor;
    setMarkerTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873817-glyphtext
    glyphText(): cocoascript.NSString;
    setGlyphText(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873823-glyphimage
    glyphImage(): cocoascript.UIImage;
    setGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873824-glyphtintcolor
    glyphTintColor(): cocoascript.UIColor;
    setGlyphTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873815-selectedglyphimage
    selectedGlyphImage(): cocoascript.UIImage;
    setSelectedGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873816-titlevisibility
    titleVisibility(): cocoascript.MKFeatureVisibility;
    setTitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873813-subtitlevisibility
    subtitleVisibility(): cocoascript.MKFeatureVisibility;
    setSubtitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873821-animateswhenadded
    animatesWhenAdded(): cocoascript.BOOL;
    setAnimatesWhenAdded(): void;
    //
    alloc():cocoascript.MKMarkerAnnotationView;
    //
    init():cocoascript.MKMarkerAnnotationView;
  }
}

declare const MKMarkerAnnotationView: cocoascript.MKMarkerAnnotationView;
declare namespace cocoascript {
  /**
   * An annotation view that displays a pin image on the map.
   * doc://com.apple.documentation/documentation/mapkit/mkpinannotationview
   */
  interface MKPinAnnotationView extends MKAnnotationView {
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452042-pintintcolor
    pinTintColor(): cocoascript.UIColor;
    setPinTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452654-animatesdrop
    animatesDrop(): cocoascript.BOOL;
    setAnimatesDrop(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452530-pincolor
    pinColor(): cocoascript.MKPinAnnotationColor;
    setPinColor(): void;
    //
    alloc():cocoascript.MKPinAnnotationView;
    //
    init():cocoascript.MKPinAnnotationView;
  }
}

declare const MKPinAnnotationView: cocoascript.MKPinAnnotationView;
declare namespace cocoascript {
  /**
   * An interface for associating content with a specific map region.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlay
   */
  interface MKOverlay extends MKAnnotation {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452113-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452791-boundingmaprect
    boundingMapRect(): cocoascript.MKMapRect;
    setBoundingMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452138-intersectsmaprect
    intersectsMapRect(mapRect: cocoascript.MKMapRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452399-canreplacemapcontent
    canReplaceMapContent():cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The shared infrastructure used to draw overlays on the map surface.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer
   */
  interface MKOverlayRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451915-initwithoverlay
    initWithOverlay(overlay: cocoascript.MKOverlay):cocoascript.MKOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452307-overlay
    overlay(): cocoascript.MKOverlay;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452699-alpha
    alpha(): cocoascript.CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451931-contentscalefactor
    contentScaleFactor(): cocoascript.CGFloat;
    setContentScaleFactor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451899-pointformappoint
    pointForMapPoint(mapPoint: cocoascript.MKMapPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452670-mappointforpoint
    mapPointForPoint(point: cocoascript.CGPoint):cocoascript.MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452738-rectformaprect
    rectForMapRect(mapRect: cocoascript.MKMapRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452680-maprectforrect
    mapRectForRect(rect: cocoascript.CGRect):cocoascript.MKMapRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451891-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452184-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452104-setneedsdisplay
    setNeedsDisplay():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452564-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: cocoascript.MKMapRect):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452793-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect_zoomScale(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale):void;
    //
    alloc():cocoascript.MKOverlayRenderer;
    //
    init():cocoascript.MKOverlayRenderer;
  }
}

declare const MKOverlayRenderer: cocoascript.MKOverlayRenderer;
// doc://com.apple.documentation/documentation/mapkit/1452156-mkroadwidthatzoomscale
declare const MKRoadWidthAtZoomScale: cocoascript.MKZoomScale;
declare namespace cocoascript {
  /**
   * Defines the basic behavior associated with all overlay views.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlayview
   */
  interface MKOverlayView extends UIView {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613884-initwithoverlay
    initWithOverlay(overlay: cocoascript.MKOverlay):cocoascript.MKOverlayView;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613872-overlay
    overlay(): cocoascript.MKOverlay;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613874-pointformappoint
    pointForMapPoint(mapPoint: cocoascript.MKMapPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613878-mappointforpoint
    mapPointForPoint(point: cocoascript.CGPoint):cocoascript.MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613870-rectformaprect
    rectForMapRect(mapRect: cocoascript.MKMapRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613882-maprectforrect
    mapRectForRect(rect: cocoascript.CGRect):cocoascript.MKMapRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613864-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613868-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613866-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: cocoascript.MKMapRect):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613876-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect_zoomScale(mapRect: cocoascript.MKMapRect, zoomScale: cocoascript.MKZoomScale):void;
    //
    alloc():cocoascript.MKOverlayView;
    //
    init():cocoascript.MKOverlayView;
  }
}

declare const MKOverlayView: cocoascript.MKOverlayView;
declare namespace cocoascript {
  interface MKMapPoint {
  }
}
declare namespace cocoascript {
  interface MKMapSize {
  }
}
declare namespace cocoascript {
  interface MKMapRect {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkmaptype
  type MKMapType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkusertrackingmode
  type MKUserTrackingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaylevel
  type MKOverlayLevel = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract class that defines the basic properties for all shape-based overlay objects.
   * doc://com.apple.documentation/documentation/mapkit/mkshape
   */
  interface MKShape extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkshape/1437594-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkshape/1437592-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    //
    alloc():cocoascript.MKShape;
    //
    init():cocoascript.MKShape;
  }
}

declare const MKShape: cocoascript.MKShape;
declare namespace cocoascript {
  /**
   * An annotation that always reflects the user's current location on the map.
   * doc://com.apple.documentation/documentation/mapkit/mkuserlocation
   */
  interface MKUserLocation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452415-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452084-updating
    updating(): cocoascript.BOOL;
    setUpdating(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452721-heading
    heading(): cocoascript.CLHeading;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452058-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452562-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    //
    alloc():cocoascript.MKUserLocation;
    //
    init():cocoascript.MKUserLocation;
  }
}

declare const MKUserLocation: cocoascript.MKUserLocation;
declare namespace cocoascript {
  /**
   * A user-friendly description of a location on the map.
   * doc://com.apple.documentation/documentation/mapkit/mkplacemark
   */
  interface MKPlacemark extends CLPlacemark {
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172460-initwithcoordinate
    initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172461-initwithcoordinate
    initWithCoordinate_postalAddress(coordinate: cocoascript.CLLocationCoordinate2D, postalAddress: cocoascript.CNPostalAddress):cocoascript.MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451895-initwithcoordinate
    initWithCoordinate_addressDictionary(coordinate: cocoascript.CLLocationCoordinate2D, addressDictionary: cocoascript.MKPlacemark):cocoascript.MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451952-countrycode
    countryCode(): cocoascript.NSString;
    setCountryCode(): void;
    //
    alloc():cocoascript.MKPlacemark;
    //
    init():cocoascript.MKPlacemark;
  }
}

declare const MKPlacemark: cocoascript.MKPlacemark;
declare namespace cocoascript {
  /**
   * An annotation that groups two or more distinct annotations into a single entity.
   * doc://com.apple.documentation/documentation/mapkit/mkclusterannotation
   */
  interface MKClusterAnnotation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866567-initwithmemberannotations
    initWithMemberAnnotations(memberAnnotations: cocoascript.MKAnnotation):cocoascript.MKClusterAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866569-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866570-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866568-memberannotations
    memberAnnotations(): cocoascript.MKAnnotation;
    setMemberAnnotations(): void;
    //
    alloc():cocoascript.MKClusterAnnotation;
    //
    init():cocoascript.MKClusterAnnotation;
  }
}

declare const MKClusterAnnotation: cocoascript.MKClusterAnnotation;
declare namespace cocoascript {
  /**
   * A utility object for generating a list of completion strings based on a partial search string that you provide.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter
   */
  interface MKLocalSearchCompleter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452106-delegate
    delegate(): cocoascript.MKLocalSearchCompleterDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452555-queryfragment
    queryFragment(): cocoascript.NSString;
    setQueryFragment(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1451923-region
    region(): cocoascript.MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143405-resulttypes
    resultTypes(): cocoascript.MKLocalSearchCompleterResultType;
    setResultTypes(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143404-pointofinterestfilter
    pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452150-filtertype
    filterType(): cocoascript.MKSearchCompletionFilterType;
    setFilterType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452337-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452272-searching
    searching(): cocoascript.BOOL;
    setSearching(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452295-results
    results(): cocoascript.MKLocalSearchCompletion;
    setResults(): void;
    //
    alloc():cocoascript.MKLocalSearchCompleter;
    //
    init():cocoascript.MKLocalSearchCompleter;
  }
}

declare const MKLocalSearchCompleter: cocoascript.MKLocalSearchCompleter;
declare namespace cocoascript {
  /**
   * Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country, city, or street.
   * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder
   */
  interface MKReverseGeocoder extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618471-initwithcoordinate
    initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKReverseGeocoder;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618478-delegate
    delegate(): cocoascript.MKReverseGeocoderDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618477-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618481-placemark
    placemark(): cocoascript.MKPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618480-start
    start():void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618474-querying
    querying(): cocoascript.BOOL;
    setQuerying(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618479-cancel
    cancel():void;
    //
    alloc():cocoascript.MKReverseGeocoder;
    //
    init():cocoascript.MKReverseGeocoder;
  }
}

declare const MKReverseGeocoder: cocoascript.MKReverseGeocoder;
declare namespace cocoascript {
  /**
   * The decoded representation of a GeoJSON feature.
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature
   */
  interface MKGeoJSONFeature extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113996-geometry
    geometry(): cocoascript.MKGeoJSONObject;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113997-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113998-properties
    properties(): cocoascript.NSData;
    setProperties(): void;
    //
    alloc():cocoascript.MKGeoJSONFeature;
    //
    init():cocoascript.MKGeoJSONFeature;
  }
}

declare const MKGeoJSONFeature: cocoascript.MKGeoJSONFeature;
declare namespace cocoascript {
  /**
   * An object that decodes GeoJSON objects into MapKit types.
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder
   */
  interface MKGeoJSONDecoder extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder/3113994-geojsonobjectswithdata
    geoJSONObjectsWithData_error(data: cocoascript.NSData, errorPtr: cocoascript.NSError):cocoascript.MKGeoJSONObject;
    //
    alloc():cocoascript.MKGeoJSONDecoder;
    //
    init():cocoascript.MKGeoJSONDecoder;
  }
}

declare const MKGeoJSONDecoder: cocoascript.MKGeoJSONDecoder;
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
declare namespace cocoascript {
  /**
   * A specialized view that displays the current scale information for its associated map.
   * doc://com.apple.documentation/documentation/mapkit/mkscaleview
   */
  interface MKScaleView extends UIView {
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890257-mapview
    mapView(): cocoascript.MKMapView;
    setMapView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890254-scalevisibility
    scaleVisibility(): cocoascript.MKFeatureVisibility;
    setScaleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890258-legendalignment
    legendAlignment(): cocoascript.MKScaleViewAlignment;
    setLegendAlignment(): void;
    //
    alloc():cocoascript.MKScaleView;
    //
    init():cocoascript.MKScaleView;
  }
}

declare const MKScaleView: cocoascript.MKScaleView;
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
declare namespace cocoascript {
  /**
   * A utility object for initiating map-based searches and processing the results.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearch
   */
  interface MKLocalSearch extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452759-initwithrequest
    initWithRequest(request: cocoascript.MKLocalSearchRequest):cocoascript.MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/3564418-initwithpointsofinterestrequest
    initWithPointsOfInterestRequest(request: cocoascript.MKLocalPointsOfInterestRequest):cocoascript.MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452652-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: cocoascript.MKLocalSearchCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452349-searching
    searching(): cocoascript.BOOL;
    setSearching(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452160-cancel
    cancel():void;
    //
    alloc():cocoascript.MKLocalSearch;
    //
    init():cocoascript.MKLocalSearch;
  }
}

declare const MKLocalSearch: cocoascript.MKLocalSearch;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresulttype
  type MKLocalSearchResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A utility class for capturing a map and it’s content into an image.
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter
   */
  interface MKMapSnapshotter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452090-initwithoptions
    initWithOptions(options: cocoascript.MKMapSnapshotOptions):cocoascript.MKMapSnapshotter;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452479-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: cocoascript.MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452419-startwithqueue
    startWithQueue_completionHandler(queue: cocoascript.dispatch_queue_t, completionHandler: cocoascript.MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452388-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1451960-loading
    loading(): cocoascript.BOOL;
    setLoading(): void;
    //
    alloc():cocoascript.MKMapSnapshotter;
    //
    init():cocoascript.MKMapSnapshotter;
  }
}

declare const MKMapSnapshotter: cocoascript.MKMapSnapshotter;
// doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomdefault
declare const MKMapCameraZoomDefault: cocoascript.CLLocationDistance;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategory
  type MKPointOfInterestCategory = cocoascript.NSString;
}
declare namespace cocoascript {
  interface MKCoordinateRegion {
  }
}
// doc://com.apple.documentation/documentation/mapkit/mkpointsofinterestrequestmaxradius
declare const MKPointsOfInterestRequestMaxRadius: cocoascript.CLLocationDistance;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterresulttype
  type MKLocalSearchCompleterResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A fully-formed string that completes a partial string.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion
   */
  interface MKLocalSearchCompletion extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452455-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452566-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1451935-titlehighlightranges
    titleHighlightRanges(): cocoascript.NSValue;
    setTitleHighlightRanges(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452489-subtitlehighlightranges
    subtitleHighlightRanges(): cocoascript.NSValue;
    setSubtitleHighlightRanges(): void;
    //
    alloc():cocoascript.MKLocalSearchCompletion;
    //
    init():cocoascript.MKLocalSearchCompletion;
  }
}

declare const MKLocalSearchCompletion: cocoascript.MKLocalSearchCompletion;
declare namespace cocoascript {
  interface MKCoordinateSpan {
  }
}
declare namespace cocoascript {
  /**
   * A utility object that converts between a geographic distance and a string-based expression of that distance.
   * doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter
   */
  interface MKDistanceFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1451994-stringfromdistance
    stringFromDistance(distance: cocoascript.CLLocationDistance):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452766-distancefromstring
    distanceFromString(distance: cocoascript.NSString):cocoascript.CLLocationDistance;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452235-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452775-units
    units(): cocoascript.MKDistanceFormatterUnits;
    setUnits(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452128-unitstyle
    unitStyle(): cocoascript.MKDistanceFormatterUnitStyle;
    setUnitStyle(): void;
    //
    alloc():cocoascript.MKDistanceFormatter;
    //
    init():cocoascript.MKDistanceFormatter;
  }
}

declare const MKDistanceFormatter: cocoascript.MKDistanceFormatter;
declare namespace cocoascript {
  /**
   * A utility object that computes directions and travel-time information based on the route information you provide.
   * doc://com.apple.documentation/documentation/mapkit/mkdirections
   */
  interface MKDirections extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452197-initwithrequest
    initWithRequest(request: cocoascript.MKDirectionsRequest):cocoascript.MKDirections;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452078-calculatedirectionswithcompletio
    calculateDirectionsWithCompletionHandler(completionHandler: cocoascript.MKDirectionsHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452736-calculateetawithcompletionhandle
    calculateETAWithCompletionHandler(completionHandler: cocoascript.MKETAHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452656-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452217-calculating
    calculating(): cocoascript.BOOL;
    setCalculating(): void;
    //
    alloc():cocoascript.MKDirections;
    //
    init():cocoascript.MKDirections;
  }
}

declare const MKDirections: cocoascript.MKDirections;
declare namespace cocoascript {
  /**
   * The start and end points of a route, along with the planned mode of transportation.
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest
   */
  interface MKDirectionsRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433158-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.MKDirectionsRequest;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433144-source
    source(): cocoascript.MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433156-setsource
    setSource(source: cocoascript.MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433146-destination
    destination(): cocoascript.MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433157-setdestination
    setDestination(destination: cocoascript.MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433152-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433154-requestsalternateroutes
    requestsAlternateRoutes(): cocoascript.BOOL;
    setRequestsAlternateRoutes(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433155-departuredate
    departureDate(): cocoascript.NSDate;
    setDepartureDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433148-arrivaldate
    arrivalDate(): cocoascript.NSDate;
    setArrivalDate(): void;
    //
    alloc():cocoascript.MKDirectionsRequest;
    //
    init():cocoascript.MKDirectionsRequest;
  }
}

declare const MKDirectionsRequest: cocoascript.MKDirectionsRequest;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionscamerakey
declare const MKLaunchOptionsCameraKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedefault
declare const MKLaunchOptionsDirectionsModeDefault: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedriving
declare const MKLaunchOptionsDirectionsModeDriving: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodekey
declare const MKLaunchOptionsDirectionsModeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodetransit
declare const MKLaunchOptionsDirectionsModeTransit: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodewalking
declare const MKLaunchOptionsDirectionsModeWalking: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapcenterkey
declare const MKLaunchOptionsMapCenterKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapspankey
declare const MKLaunchOptionsMapSpanKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmaptypekey
declare const MKLaunchOptionsMapTypeKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsshowstraffickey
declare const MKLaunchOptionsShowsTrafficKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The route information returned by Apple servers in response to one of your requests for directions.
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse
   */
  interface MKDirectionsResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452261-source
    source(): cocoascript.MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1451981-destination
    destination(): cocoascript.MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452071-routes
    routes(): cocoascript.MKRoute;
    setRoutes(): void;
    //
    alloc():cocoascript.MKDirectionsResponse;
    //
    init():cocoascript.MKDirectionsResponse;
  }
}

declare const MKDirectionsResponse: cocoascript.MKDirectionsResponse;
declare namespace cocoascript {
  /**
   * The travel-time information returned by Apple servers.
   * doc://com.apple.documentation/documentation/mapkit/mketaresponse
   */
  interface MKETAResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451947-source
    source(): cocoascript.MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452611-destination
    destination(): cocoascript.MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452551-expectedtraveltime
    expectedTravelTime(): cocoascript.NSTimeInterval;
    setExpectedTravelTime(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452644-expecteddeparturedate
    expectedDepartureDate(): cocoascript.NSDate;
    setExpectedDepartureDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451881-expectedarrivaldate
    expectedArrivalDate(): cocoascript.NSDate;
    setExpectedArrivalDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452164-distance
    distance(): cocoascript.CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452616-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():cocoascript.MKETAResponse;
    //
    init():cocoascript.MKETAResponse;
  }
}

declare const MKETAResponse: cocoascript.MKETAResponse;
declare namespace cocoascript {
  /**
   * A single route between a requested start and end point.
   * doc://com.apple.documentation/documentation/mapkit/mkroute
   */
  interface MKRoute extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1451943-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452173-steps
    steps(): cocoascript.MKRouteStep;
    setSteps(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452684-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452359-advisorynotices
    advisoryNotices(): cocoascript.NSString;
    setAdvisoryNotices(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452405-distance
    distance(): cocoascript.CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452297-expectedtraveltime
    expectedTravelTime(): cocoascript.NSTimeInterval;
    setExpectedTravelTime(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452674-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():cocoascript.MKRoute;
    //
    init():cocoascript.MKRoute;
  }
}

declare const MKRoute: cocoascript.MKRoute;
declare namespace cocoascript {
  /**
   * One portion of an overall route.
   * doc://com.apple.documentation/documentation/mapkit/mkroutestep
   */
  interface MKRouteStep extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452223-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452447-instructions
    instructions(): cocoascript.NSString;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452347-notice
    notice(): cocoascript.NSString;
    setNotice(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452004-distance
    distance(): cocoascript.CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452051-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():cocoascript.MKRouteStep;
    //
    init():cocoascript.MKRouteStep;
  }
}

declare const MKRouteStep: cocoascript.MKRouteStep;
declare namespace cocoascript {
  /**
   * An image generated by a snapshotter object.
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot
   */
  interface MKMapSnapshot extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/1452701-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/3013837-appearance
    appearance(): cocoascript.NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/1452523-pointforcoordinate
    pointForCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/3152226-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    //
    alloc():cocoascript.MKMapSnapshot;
    //
    init():cocoascript.MKMapSnapshot;
  }
}

declare const MKMapSnapshot: cocoascript.MKMapSnapshot;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkerrorcode
  type MKErrorCode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkfeaturedisplaypriority
  type MKFeatureDisplayPriority = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkannotationviewzpriority
  type MKAnnotationViewZPriority = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkannotationviewcollisionmode
  type MKAnnotationViewCollisionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkannotationviewdragstate
  type MKAnnotationViewDragState = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/mapkit/mkfeaturedisplayprioritydefaultlow
declare const MKFeatureDisplayPriorityDefaultLow: cocoascript.MKFeatureDisplayPriority;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkfeaturevisibility
  type MKFeatureVisibility = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A string-based annotation that you apply to a specific map point.
   * doc://com.apple.documentation/documentation/mapkit/mkpointannotation
   */
  interface MKPointAnnotation extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235758-init
    init():cocoascript.MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235759-initwithcoordinate
    initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235760-initwithcoordinate
    initWithCoordinate_title_subtitle(coordinate: cocoascript.CLLocationCoordinate2D, title: cocoascript.NSString, subtitle: cocoascript.NSString):cocoascript.MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/1452620-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    //
    alloc():cocoascript.MKPointAnnotation;
    //
    init():cocoascript.MKPointAnnotation;
  }
}

declare const MKPointAnnotation: cocoascript.MKPointAnnotation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkpinannotationcolor
  type MKPinAnnotationColor = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A circular overlay with a configurable radius and centered on a specific geographic coordinate.
   * doc://com.apple.documentation/documentation/mapkit/mkcircle
   */
  interface MKCircle extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411074-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411067-radius
    radius(): cocoascript.CLLocationDistance;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411065-boundingmaprect
    boundingMapRect(): cocoascript.MKMapRect;
    setBoundingMapRect(): void;
    //
    alloc():cocoascript.MKCircle;
    //
    init():cocoascript.MKCircle;
  }
}

declare const MKCircle: cocoascript.MKCircle;
declare namespace cocoascript {
  /**
   * An overlay that covers an area of the map with bitmap tiles.
   * doc://com.apple.documentation/documentation/mapkit/mktileoverlay
   */
  interface MKTileOverlay extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452705-initwithurltemplate
    initWithURLTemplate(URLTemplate: cocoascript.NSString):cocoascript.MKTileOverlay;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452108-tilesize
    tileSize(): cocoascript.CGSize;
    setTileSize(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452251-geometryflipped
    geometryFlipped(): cocoascript.BOOL;
    setGeometryFlipped(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452199-minimumz
    minimumZ(): cocoascript.NSInteger;
    setMinimumZ(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452660-maximumz
    maximumZ(): cocoascript.NSInteger;
    setMaximumZ(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452604-canreplacemapcontent
    canReplaceMapContent(): cocoascript.BOOL;
    setCanReplaceMapContent(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452256-urltemplate
    URLTemplate(): cocoascript.NSString;
    setURLTemplate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452606-urlfortilepath
    URLForTilePath(path: cocoascript.MKTileOverlayPath):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452445-loadtileatpath
    loadTileAtPath_result(path: cocoascript.MKTileOverlayPath, result: cocoascript.NSError):void;
    //
    alloc():cocoascript.MKTileOverlay;
    //
    init():cocoascript.MKTileOverlay;
  }
}

declare const MKTileOverlay: cocoascript.MKTileOverlay;
declare namespace cocoascript {
  /**
   * A closed polygon shape.
   * doc://com.apple.documentation/documentation/mapkit/mkpolygon
   */
  interface MKPolygon extends MKMultiPoint {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452521-interiorpolygons
    interiorPolygons(): cocoascript.MKPolygon;
    setInteriorPolygons(): void;
    //
    alloc():cocoascript.MKPolygon;
    //
    init():cocoascript.MKPolygon;
  }
}

declare const MKPolygon: cocoascript.MKPolygon;
declare namespace cocoascript {
  /**
   * A shape consisting of one or more connected line segments.
   * doc://com.apple.documentation/documentation/mapkit/mkpolyline
   */
  interface MKPolyline extends MKMultiPoint {
    //
    alloc():cocoascript.MKPolyline;
    //
    init():cocoascript.MKPolyline;
  }
}

declare const MKPolyline: cocoascript.MKPolyline;
declare namespace cocoascript {
  /**
   * A collection of multiple closed polygon shapes.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolygon
   */
  interface MKMultiPolygon extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088835-initwithpolygons
    initWithPolygons(polygons: cocoascript.MKPolygon):cocoascript.MKMultiPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088836-polygons
    polygons(): cocoascript.MKPolygon;
    setPolygons(): void;
    //
    alloc():cocoascript.MKMultiPolygon;
    //
    init():cocoascript.MKMultiPolygon;
  }
}

declare const MKMultiPolygon: cocoascript.MKMultiPolygon;
declare namespace cocoascript {
  /**
   * A collection of multipolyline shapes, each consisting of one or more connected line segments.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolyline
   */
  interface MKMultiPolyline extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088841-initwithpolylines
    initWithPolylines(polylines: cocoascript.MKPolyline):cocoascript.MKMultiPolyline;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088842-polylines
    polylines(): cocoascript.MKPolyline;
    setPolylines(): void;
    //
    alloc():cocoascript.MKMultiPolyline;
    //
    init():cocoascript.MKMultiPolyline;
  }
}

declare const MKMultiPolyline: cocoascript.MKMultiPolyline;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkzoomscale
  type MKZoomScale = cocoascript.CGFloat;
}
// doc://com.apple.documentation/documentation/mapkit/mkmapsizeworld
declare const MKMapSizeWorld: cocoascript.MKMapSize;
// doc://com.apple.documentation/documentation/mapkit/mkmaprectnull
declare const MKMapRectNull: cocoascript.MKMapRect;
// doc://com.apple.documentation/documentation/mapkit/mkmaprectworld
declare const MKMapRectWorld: cocoascript.MKMapRect;
declare namespace cocoascript {
  /**
   * An abstract class that defines the common behavior shared by polygon and polyline overlays.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipoint
   */
  interface MKMultiPoint extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452425-points
    points():cocoascript.MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452179-pointcount
    pointCount(): cocoascript.NSUInteger;
    setPointCount(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571236-locationatpointindex
    locationAtPointIndex(index: cocoascript.NSUInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571237-locationsatpointindexes
    locationsAtPointIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1451911-getcoordinates
    getCoordinates_range(coords: cocoascript.CLLocationCoordinate2D, range: cocoascript.NSRange):void;
    //
    alloc():cocoascript.MKMultiPoint;
    //
    init():cocoascript.MKMultiPoint;
  }
}

declare const MKMultiPoint: cocoascript.MKMultiPoint;
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
declare namespace cocoascript {
  /**
   * The visual representation for a circular overlay.
   * doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer
   */
  interface MKCircleRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/1452547-initwithcircle
    initWithCircle(circle: cocoascript.MKCircle):cocoascript.MKCircleRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/1452413-circle
    circle(): cocoascript.MKCircle;
    setCircle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573871-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573870-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.MKCircleRenderer;
    //
    init():cocoascript.MKCircleRenderer;
  }
}

declare const MKCircleRenderer: cocoascript.MKCircleRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a single polygon overlay.
   * doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer
   */
  interface MKPolygonRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/1448129-initwithpolygon
    initWithPolygon(polygon: cocoascript.MKPolygon):cocoascript.MKPolygonRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/1448132-polygon
    polygon(): cocoascript.MKPolygon;
    setPolygon(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/3573873-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/3573872-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.MKPolygonRenderer;
    //
    init():cocoascript.MKPolygonRenderer;
  }
}

declare const MKPolygonRenderer: cocoascript.MKPolygonRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a multipolygon overlay.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer
   */
  interface MKMultiPolygonRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer/3088838-initwithmultipolygon
    initWithMultiPolygon(multiPolygon: cocoascript.MKMultiPolygon):cocoascript.MKMultiPolygonRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer/3088839-multipolygon
    multiPolygon(): cocoascript.MKMultiPolygon;
    setMultiPolygon(): void;
    //
    alloc():cocoascript.MKMultiPolygonRenderer;
    //
    init():cocoascript.MKMultiPolygonRenderer;
  }
}

declare const MKMultiPolygonRenderer: cocoascript.MKMultiPolygonRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a path-based overlay.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer
   */
  interface MKOverlayPathRenderer extends MKOverlayRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1451875-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452686-createpath
    createPath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452076-invalidatepath
    invalidatePath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452668-fillcolor
    fillColor(): cocoascript.UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452175-strokecolor
    strokeColor(): cocoascript.UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452441-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452031-linejoin
    lineJoin(): cocoascript.CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452556-linecap
    lineCap(): cocoascript.CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452395-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452363-linedashphase
    lineDashPhase(): cocoascript.CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452493-linedashpattern
    lineDashPattern(): cocoascript.NSNumber;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452713-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452281-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452549-strokepath
    strokePath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452100-fillpath
    fillPath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/3088846-shouldrasterize
    shouldRasterize(): cocoascript.BOOL;
    setShouldRasterize(): void;
    //
    alloc():cocoascript.MKOverlayPathRenderer;
    //
    init():cocoascript.MKOverlayPathRenderer;
  }
}

declare const MKOverlayPathRenderer: cocoascript.MKOverlayPathRenderer;
declare namespace cocoascript {
  /**
   * A line-based shape that follows the contours of the Earth to create the shortest path between the specified points.
   * doc://com.apple.documentation/documentation/mapkit/mkgeodesicpolyline
   */
  interface MKGeodesicPolyline extends MKPolyline {
    //
    alloc():cocoascript.MKGeodesicPolyline;
    //
    init():cocoascript.MKGeodesicPolyline;
  }
}

declare const MKGeodesicPolyline: cocoascript.MKGeodesicPolyline;
declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object.
   * doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer
   */
  interface MKPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452074-initwithpolyline
    initWithPolyline(polyline: cocoascript.MKPolyline):cocoascript.MKPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452465-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573875-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573874-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.MKPolylineRenderer;
    //
    init():cocoascript.MKPolylineRenderer;
  }
}

declare const MKPolylineRenderer: cocoascript.MKPolylineRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for multiple polyline objects.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer
   */
  interface MKMultiPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088844-initwithmultipolyline
    initWithMultiPolyline(multiPolyline: cocoascript.MKMultiPolyline):cocoascript.MKMultiPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088845-multipolyline
    multiPolyline(): cocoascript.MKMultiPolyline;
    setMultiPolyline(): void;
    //
    alloc():cocoascript.MKMultiPolylineRenderer;
    //
    init():cocoascript.MKMultiPolylineRenderer;
  }
}

declare const MKMultiPolylineRenderer: cocoascript.MKMultiPolylineRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object with a gradient.
   * doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer
   */
  interface MKGradientPolylineRenderer extends MKPolylineRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571235-setcolors
    setColors_atLocations(colors: cocoascript.UIColor, locations: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571233-colors
    colors(): cocoascript.UIColor;
    setColors(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571234-locations
    locations(): cocoascript.NSNumber;
    setLocations(): void;
    //
    alloc():cocoascript.MKGradientPolylineRenderer;
    //
    init():cocoascript.MKGradientPolylineRenderer;
  }
}

declare const MKGradientPolylineRenderer: cocoascript.MKGradientPolylineRenderer;
declare namespace cocoascript {
  /**
   * The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.
   * doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer
   */
  interface MKTileOverlayRenderer extends MKOverlayRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452303-initwithtileoverlay
    initWithTileOverlay(overlay: cocoascript.MKTileOverlay):cocoascript.MKTileOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452676-reloaddata
    reloadData():void;
    //
    alloc():cocoascript.MKTileOverlayRenderer;
    //
    init():cocoascript.MKTileOverlayRenderer;
  }
}

declare const MKTileOverlayRenderer: cocoascript.MKTileOverlayRenderer;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mksearchcompletionfiltertype
  type MKSearchCompletionFilterType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Represents a generic overlay that draws its contents using a
   * doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview
   */
  interface MKOverlayPathView extends MKOverlayView {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617215-fillcolor
    fillColor(): cocoascript.UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617209-strokecolor
    strokeColor(): cocoascript.UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617218-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617206-linejoin
    lineJoin(): cocoascript.CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617212-linecap
    lineCap(): cocoascript.CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617219-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617211-linedashphase
    lineDashPhase(): cocoascript.CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617210-linedashpattern
    lineDashPattern(): cocoascript.NSArray;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617208-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617216-createpath
    createPath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617217-invalidatepath
    invalidatePath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617205-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617207-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617214-strokepath
    strokePath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617213-fillpath
    fillPath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    //
    alloc():cocoascript.MKOverlayPathView;
    //
    init():cocoascript.MKOverlayPathView;
  }
}

declare const MKOverlayPathView: cocoascript.MKOverlayPathView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * doc://com.apple.documentation/documentation/mapkit/mkcircleview
   */
  interface MKCircleView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623524-initwithcircle
    initWithCircle(circle: cocoascript.MKCircle):cocoascript.MKCircleView;
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623525-circle
    circle(): cocoascript.MKCircle;
    setCircle(): void;
    //
    alloc():cocoascript.MKCircleView;
    //
    init():cocoascript.MKCircleView;
  }
}

declare const MKCircleView: cocoascript.MKCircleView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * doc://com.apple.documentation/documentation/mapkit/mkpolygonview
   */
  interface MKPolygonView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonview/1614141-initwithpolygon
    initWithPolygon(polygon: cocoascript.MKPolygon):cocoascript.MKPolygonView;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonview/1614140-polygon
    polygon(): cocoascript.MKPolygon;
    setPolygon(): void;
    //
    alloc():cocoascript.MKPolygonView;
    //
    init():cocoascript.MKPolygonView;
  }
}

declare const MKPolygonView: cocoascript.MKPolygonView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * doc://com.apple.documentation/documentation/mapkit/mkpolylineview
   */
  interface MKPolylineView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618189-initwithpolyline
    initWithPolyline(polyline: cocoascript.MKPolyline):cocoascript.MKPolylineView;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618188-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    //
    alloc():cocoascript.MKPolylineView;
    //
    init():cocoascript.MKPolylineView;
  }
}

declare const MKPolylineView: cocoascript.MKPolylineView;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkscaleviewalignment
  type MKScaleViewAlignment = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletionhandler
  type MKLocalSearchCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  /**
   * The results from a map-based search.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse
   */
  interface MKLocalSearchResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse/1451939-mapitems
    mapItems(): cocoascript.MKMapItem;
    setMapItems(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse/1452501-boundingregion
    boundingRegion(): cocoascript.MKCoordinateRegion;
    setBoundingRegion(): void;
    //
    alloc():cocoascript.MKLocalSearchResponse;
    //
    init():cocoascript.MKLocalSearchResponse;
  }
}

declare const MKLocalSearchResponse: cocoascript.MKLocalSearchResponse;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotcompletionhandler
  type MKMapSnapshotCompletionHandler = cocoascript.NSError;
}
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryairport
declare const MKPointOfInterestCategoryAirport: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryamusementpark
declare const MKPointOfInterestCategoryAmusementPark: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryaquarium
declare const MKPointOfInterestCategoryAquarium: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryatm
declare const MKPointOfInterestCategoryATM: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybakery
declare const MKPointOfInterestCategoryBakery: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybank
declare const MKPointOfInterestCategoryBank: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybeach
declare const MKPointOfInterestCategoryBeach: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybrewery
declare const MKPointOfInterestCategoryBrewery: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycafe
declare const MKPointOfInterestCategoryCafe: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycampground
declare const MKPointOfInterestCategoryCampground: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycarrental
declare const MKPointOfInterestCategoryCarRental: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryevcharger
declare const MKPointOfInterestCategoryEVCharger: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfirestation
declare const MKPointOfInterestCategoryFireStation: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfitnesscenter
declare const MKPointOfInterestCategoryFitnessCenter: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfoodmarket
declare const MKPointOfInterestCategoryFoodMarket: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorygasstation
declare const MKPointOfInterestCategoryGasStation: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryhospital
declare const MKPointOfInterestCategoryHospital: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryhotel
declare const MKPointOfInterestCategoryHotel: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorylaundry
declare const MKPointOfInterestCategoryLaundry: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorylibrary
declare const MKPointOfInterestCategoryLibrary: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymarina
declare const MKPointOfInterestCategoryMarina: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymovietheater
declare const MKPointOfInterestCategoryMovieTheater: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymuseum
declare const MKPointOfInterestCategoryMuseum: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorynationalpark
declare const MKPointOfInterestCategoryNationalPark: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorynightlife
declare const MKPointOfInterestCategoryNightlife: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypark
declare const MKPointOfInterestCategoryPark: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryparking
declare const MKPointOfInterestCategoryParking: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypharmacy
declare const MKPointOfInterestCategoryPharmacy: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypolice
declare const MKPointOfInterestCategoryPolice: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypostoffice
declare const MKPointOfInterestCategoryPostOffice: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypublictransport
declare const MKPointOfInterestCategoryPublicTransport: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryrestaurant
declare const MKPointOfInterestCategoryRestaurant: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryrestroom
declare const MKPointOfInterestCategoryRestroom: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryschool
declare const MKPointOfInterestCategorySchool: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorystadium
declare const MKPointOfInterestCategoryStadium: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorystore
declare const MKPointOfInterestCategoryStore: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorytheater
declare const MKPointOfInterestCategoryTheater: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryuniversity
declare const MKPointOfInterestCategoryUniversity: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorywinery
declare const MKPointOfInterestCategoryWinery: cocoascript.MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryzoo
declare const MKPointOfInterestCategoryZoo: cocoascript.MKPointOfInterestCategory;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatterunits
  type MKDistanceFormatterUnits = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatterunitstyle
  type MKDistanceFormatterUnitStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkdirectionshandler
  type MKDirectionsHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mketahandler
  type MKETAHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkdirectionstransporttype
  type MKDirectionsTransportType = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/mapkit/mkfeaturedisplaypriorityrequired
declare const MKFeatureDisplayPriorityRequired: cocoascript.MKFeatureDisplayPriority;
// doc://com.apple.documentation/documentation/mapkit/mkfeaturedisplayprioritydefaulthigh
declare const MKFeatureDisplayPriorityDefaultHigh: cocoascript.MKFeatureDisplayPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritydefaultunselected
declare const MKAnnotationViewZPriorityDefaultUnselected: cocoascript.MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritydefaultselected
declare const MKAnnotationViewZPriorityDefaultSelected: cocoascript.MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritymax
declare const MKAnnotationViewZPriorityMax: cocoascript.MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritymin
declare const MKAnnotationViewZPriorityMin: cocoascript.MKAnnotationViewZPriority;
declare namespace cocoascript {
  interface MKTileOverlayPath {
  }
}
