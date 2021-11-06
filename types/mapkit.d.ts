declare namespace cocoascript {
  /**
   * An embeddable map interface, similar to the one that the Maps app provides.
   * https://developer.apple.com/documentation/mapkit/mkmapview
   */
  interface MKMapView extends NSView {
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452115-delegate
    delegate(): MKMapViewDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452742-maptype
    mapType(): MKMapType;
    setMapType(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452577-zoomenabled
    zoomEnabled(): BOOL;
    setZoomEnabled(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451998-scrollenabled
    scrollEnabled(): BOOL;
    setScrollEnabled(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452265-pitchenabled
    pitchEnabled(): BOOL;
    setPitchEnabled(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452274-rotateenabled
    rotateEnabled(): BOOL;
    setRotateEnabled(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452709-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452768-setregion
    setRegion_animated(region: MKCoordinateRegion, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451901-centercoordinate
    centerCoordinate(): CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451976-setcentercoordinate
    setCenterCoordinate_animated(coordinate: CLLocationCoordinate2D, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452309-showannotations
    showAnnotations_animated(annotations: MKAnnotation, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452732-visiblemaprect
    visibleMapRect(): MKMapRect;
    setVisibleMapRect(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452658-setvisiblemaprect
    setVisibleMapRect_animated(mapRect: MKMapRect, animate: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452461-setvisiblemaprect
    setVisibleMapRect_edgePadding_animated(mapRect: MKMapRect, insets: UIEdgeInsets, animate: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3143418-setcameraboundary
    setCameraBoundary_animated(cameraBoundary: MKMapCameraBoundary, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3143416-cameraboundary
    cameraBoundary(): MKMapCameraBoundary;
    setCameraBoundary(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3114302-setcamerazoomrange
    setCameraZoomRange_animated(cameraZoomRange: MKMapCameraZoomRange, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3114301-camerazoomrange
    cameraZoomRange(): MKMapCameraZoomRange;
    setCameraZoomRange(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452476-setcamera
    setCamera_animated(camera: MKMapCamera, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452277-camera
    camera(): MKMapCamera;
    setCamera(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3143417-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452483-showsbuildings
    showsBuildings(): BOOL;
    setShowsBuildings(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451879-showscompass
    showsCompass(): BOOL;
    setShowsCompass(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451958-showszoomcontrols
    showsZoomControls(): BOOL;
    setShowsZoomControls(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452343-showsscale
    showsScale(): BOOL;
    setShowsScale(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452433-showstraffic
    showsTraffic(): BOOL;
    setShowsTraffic(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452102-showspointsofinterest
    showsPointsOfInterest(): BOOL;
    setShowsPointsOfInterest(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/3567212-showspitchcontrol
    showsPitchControl(): BOOL;
    setShowsPitchControl(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452682-showsuserlocation
    showsUserLocation(): BOOL;
    setShowsUserLocation(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452040-userlocationvisible
    userLocationVisible(): BOOL;
    setUserLocationVisible(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452459-userlocation
    userLocation(): MKUserLocation;
    setUserLocation(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1616208-usertrackingmode
    userTrackingMode(): MKUserTrackingMode;
    setUserTrackingMode(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1616205-setusertrackingmode
    setUserTrackingMode_animated(mode: MKUserTrackingMode, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452593-annotations
    annotations(): MKAnnotation;
    setAnnotations(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452069-addannotation
    addAnnotation(annotation: MKAnnotation):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451889-addannotations
    addAnnotations(annotations: MKAnnotation):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452409-removeannotation
    removeAnnotation(annotation: MKAnnotation):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452130-removeannotations
    removeAnnotations(annotations: MKAnnotation):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452279-annotationsinmaprect
    annotationsInMapRect(mapRect: MKMapRect):MKAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452717-annotationvisiblerect
    annotationVisibleRect(): CGRect;
    setAnnotationVisibleRect(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452570-selectedannotations
    selectedAnnotations(): MKAnnotation;
    setSelectedAnnotations(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451950-selectannotation
    selectAnnotation_animated(annotation: MKAnnotation, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451988-deselectannotation
    deselectAnnotation_animated(annotation: MKAnnotation, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/2887124-registerclass
    registerClass_forAnnotationViewWithReuseIdentifier(viewClass: Class, identifier: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/2887123-dequeuereusableannotationviewwit
    dequeueReusableAnnotationViewWithIdentifier_forAnnotation(identifier: string | cocoascript.NSString, annotation: MKAnnotation):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452672-dequeuereusableannotationviewwit
    dequeueReusableAnnotationViewWithIdentifier(identifier: string | cocoascript.NSString):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452512-viewforannotation
    viewForAnnotation(annotation: MKAnnotation):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452784-overlays
    overlays(): MKOverlay;
    setOverlays(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452757-overlaysinlevel
    overlaysInLevel(level: MKOverlayLevel):MKOverlay;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452464-rendererforoverlay
    rendererForOverlay(overlay: MKOverlay):MKOverlayRenderer;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1616201-viewforoverlay
    viewForOverlay(overlay: MKOverlay):MKOverlayView;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452635-addoverlay
    addOverlay_level(overlay: MKOverlay, level: MKOverlayLevel):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452518-addoverlays
    addOverlays_level(overlays: MKOverlay, level: MKOverlayLevel):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451964-addoverlay
    addOverlay(overlay: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452335-addoverlays
    addOverlays(overlays: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452723-insertoverlay
    insertOverlay_atIndex_level(overlay: MKOverlay, index: NSUInteger, level: MKOverlayLevel):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452249-insertoverlay
    insertOverlay_atIndex(overlay: MKOverlay, index: NSUInteger):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452427-insertoverlay
    insertOverlay_aboveOverlay(overlay: MKOverlay, sibling: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452526-insertoverlay
    insertOverlay_belowOverlay(overlay: MKOverlay, sibling: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452491-exchangeoverlay
    exchangeOverlay_withOverlay(overlay1: MKOverlay, overlay2: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452575-exchangeoverlayatindex
    exchangeOverlayAtIndex_withOverlayAtIndex(index1: NSUInteger, index2: NSUInteger):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1451921-removeoverlay
    removeOverlay(overlay: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452719-removeoverlays
    removeOverlays(overlays: MKOverlay):void;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452694-convertcoordinate
    convertCoordinate_toPointToView(coordinate: CLLocationCoordinate2D, view: UIView):CGPoint;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452503-convertpoint
    convertPoint_toCoordinateFromView(point: CGPoint, view: UIView):CLLocationCoordinate2D;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452055-convertregion
    convertRegion_toRectToView(region: MKCoordinateRegion, view: UIView):CGRect;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452305-convertrect
    convertRect_toRegionFromView(rect: CGRect, view: UIView):MKCoordinateRegion;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452371-regionthatfits
    regionThatFits(region: MKCoordinateRegion):MKCoordinateRegion;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452169-maprectthatfits
    mapRectThatFits(mapRect: MKMapRect):MKMapRect;
    // https://developer.apple.com/documentation/mapkit/mkmapview/1452625-maprectthatfits
    mapRectThatFits_edgePadding(mapRect: MKMapRect, insets: UIEdgeInsets):MKMapRect;
    //
    alloc():MKMapView;
    //
    init():MKMapView;
  }
}

declare const MKMapView: cocoascript.MKMapView;
// https://developer.apple.com/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier
declare const MKMapViewDefaultAnnotationViewReuseIdentifier: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mkmapviewdefaultclusterannotationviewreuseidentifier
declare const MKMapViewDefaultClusterAnnotationViewReuseIdentifier: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An interface for associating your content with a specific map location.
   * https://developer.apple.com/documentation/mapkit/mkannotation
   */
  interface MKAnnotation extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkannotation/1429524-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotation/1429528-setcoordinate
    setCoordinate(newCoordinate: CLLocationCoordinate2D):void;
    // https://developer.apple.com/documentation/mapkit/mkannotation/1429522-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotation/1429520-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
  }
}
declare namespace cocoascript {
  /**
   * Optional methods that you use to receive map-related update messages.
   * https://developer.apple.com/documentation/mapkit/mkmapviewdelegate
   */
  interface MKMapViewDelegate extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452571-mapview
    mapView_regionWillChangeAnimated(mapView: MKMapView, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/2998428-mapviewdidchangevisibleregion
    mapViewDidChangeVisibleRegion(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452345-mapview
    mapView_regionDidChangeAnimated(mapView: MKMapView, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452744-mapviewwillstartloadingmap
    mapViewWillStartLoadingMap(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452291-mapviewdidfinishloadingmap
    mapViewDidFinishLoadingMap(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452327-mapviewdidfailloadingmap
    mapViewDidFailLoadingMap_withError(mapView: MKMapView, error: NSError):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1451970-mapviewwillstartrenderingmap
    mapViewWillStartRenderingMap(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1451897-mapviewdidfinishrenderingmap
    mapViewDidFinishRenderingMap_fullyRendered(mapView: MKMapView, fullyRendered: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452171-mapviewwillstartlocatinguser
    mapViewWillStartLocatingUser(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452715-mapviewdidstoplocatinguser
    mapViewDidStopLocatingUser(mapView: MKMapView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452086-mapview
    mapView_didUpdateUserLocation(mapView: MKMapView, userLocation: MKUserLocation):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452211-mapview
    mapView_didFailToLocateUserWithError(mapView: MKMapView, error: NSError):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1616202-mapview
    mapView_didChangeUserTrackingMode_animated(mapView: MKMapView, mode: MKUserTrackingMode, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452045-mapview
    mapView_viewForAnnotation(mapView: MKMapView, annotation: MKAnnotation):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452311-mapview
    mapView_didAddAnnotationViews(mapView: MKMapView, views: MKAnnotationView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1616211-mapview
    mapView_annotationView_calloutAccessoryControlTapped(mapView: MKMapView, view: MKAnnotationView, control: UIControl):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/2867923-mapview
    mapView_clusterAnnotationForMemberAnnotations(mapView: MKMapView, memberAnnotations: MKAnnotation):MKClusterAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452229-mapview
    mapView_annotationView_didChangeDragState_fromOldState(mapView: MKMapView, view: MKAnnotationView, newState: MKAnnotationViewDragState, oldState: MKAnnotationViewDragState):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452393-mapview
    mapView_didSelectAnnotationView(mapView: MKMapView, view: MKAnnotationView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452707-mapview
    mapView_didDeselectAnnotationView(mapView: MKMapView, view: MKAnnotationView):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452203-mapview
    mapView_rendererForOverlay(mapView: MKMapView, overlay: MKOverlay):MKOverlayRenderer;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1452609-mapview
    mapView_didAddOverlayRenderers(mapView: MKMapView, renderers: MKOverlayRenderer):void;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1616210-mapview
    mapView_viewForOverlay(mapView: MKMapView, overlay: MKOverlay):MKOverlayView;
    // https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/1616206-mapview
    mapView_didAddOverlayViews(mapView: MKMapView, overlayViews: NSArray):void;
  }
}
declare namespace cocoascript {
  /**
   * Defines the methods for receiving search completion data.
   * https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate
   */
  interface MKLocalSearchCompleterDelegate extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate/1452209-completerdidupdateresults
    completerDidUpdateResults(completer: MKLocalSearchCompleter):void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate/1451885-completer
    completer_didFailWithError(completer: MKLocalSearchCompleter, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * Defines the interface for receiving messages from an
   * https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate
   */
  interface MKReverseGeocoderDelegate extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate/1618476-reversegeocoder
    reverseGeocoder_didFindPlacemark(geocoder: MKReverseGeocoder, placemark: MKPlacemark):void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate/1618473-reversegeocoder
    reverseGeocoder_didFailWithError(geocoder: MKReverseGeocoder, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * Objects that can be returned by the GeoJSON decoder.
   * https://developer.apple.com/documentation/mapkit/mkgeojsonobject
   */
  interface MKGeoJSONObject extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A virtual camera for defining the appearance of the map.
   * https://developer.apple.com/documentation/mapkit/mkmapcamera
   */
  interface MKMapCamera extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411085-camera
    camera():MKMapCamera;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411092-cameralookingatcentercoordinate
    cameraLookingAtCenterCoordinate_fromEyeCoordinate_eyeAltitude(centerCoordinate: CLLocationCoordinate2D, eyeCoordinate: CLLocationCoordinate2D, eyeAltitude: CLLocationDistance):MKMapCamera;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411079-cameralookingatcentercoordinate
    cameraLookingAtCenterCoordinate_fromDistance_pitch_heading(centerCoordinate: CLLocationCoordinate2D, distance: CLLocationDistance, pitch: CGFloat, heading: CLLocationDirection):MKMapCamera;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411081-centercoordinate
    centerCoordinate(): CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411087-heading
    heading(): CLLocationDirection;
    setHeading(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/3114295-centercoordinatedistance
    centerCoordinateDistance(): CLLocationDistance;
    setCenterCoordinateDistance(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411083-pitch
    pitch(): CGFloat;
    setPitch(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcamera/1411078-altitude
    altitude(): CLLocationDistance;
    setAltitude(): void;
    //
    alloc():MKMapCamera;
    //
    init():MKMapCamera;
  }
}

declare const MKMapCamera: cocoascript.MKMapCamera;
declare namespace cocoascript {
  /**
   * The parameters to use when searching for points of interest on the map.
   * https://developer.apple.com/documentation/mapkit/mklocalsearchrequest
   */
  interface MKLocalSearchRequest extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/3235755-init
    init():MKLocalSearchRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/1452301-initwithcompletion
    initWithCompletion(completion: MKLocalSearchCompletion):MKLocalSearchRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/3235756-initwithnaturallanguagequery
    initWithNaturalLanguageQuery(naturalLanguageQuery: string | cocoascript.NSString):MKLocalSearchRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/3235757-initwithnaturallanguagequery
    initWithNaturalLanguageQuery_region(naturalLanguageQuery: string | cocoascript.NSString, region: MKCoordinateRegion):MKLocalSearchRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/1452353-naturallanguagequery
    naturalLanguageQuery(): string | cocoascript.NSString;
    setNaturalLanguageQuery(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/1451919-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/3143410-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchrequest/3143411-resulttypes
    resultTypes(): MKLocalSearchResultType;
    setResultTypes(): void;
    //
    alloc():MKLocalSearchRequest;
    //
    init():MKLocalSearchRequest;
  }
}

declare const MKLocalSearchRequest: cocoascript.MKLocalSearchRequest;
declare namespace cocoascript {
  /**
   * The options the snapshotter initializer uses to create a snapshotter to capture map-based imagery.
   * https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions
   */
  interface MKMapSnapshotOptions extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452323-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452727-maprect
    mapRect(): MKMapRect;
    setMapRect(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452082-camera
    camera(): MKMapCamera;
    setCamera(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452341-maptype
    mapType(): MKMapType;
    setMapType(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452191-showsbuildings
    showsBuildings(): BOOL;
    setShowsBuildings(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/3172734-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452316-showspointsofinterest
    showsPointsOfInterest(): BOOL;
    setShowsPointsOfInterest(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/3152864-traitcollection
    traitCollection(): UITraitCollection;
    setTraitCollection(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1452485-size
    size(): CGSize;
    setSize(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/2981023-appearance
    appearance(): NSAppearance;
    setAppearance(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotoptions/1615960-scale
    scale(): CGFloat;
    setScale(): void;
    //
    alloc():MKMapSnapshotOptions;
    //
    init():MKMapSnapshotOptions;
  }
}

declare const MKMapSnapshotOptions: cocoascript.MKMapSnapshotOptions;
declare namespace cocoascript {
  /**
   * A camera zoom range that limits the distances to which the user can zoom.
   * https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange
   */
  interface MKMapCameraZoomRange extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange/3114298-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance_maxCenterCoordinateDistance(minDistance: CLLocationDistance, maxDistance: CLLocationDistance):MKMapCameraZoomRange;
    // https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange/3237246-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance(minDistance: CLLocationDistance):MKMapCameraZoomRange;
    // https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange/3237245-initwithmaxcentercoordinatedista
    initWithMaxCenterCoordinateDistance(maxDistance: CLLocationDistance):MKMapCameraZoomRange;
    // https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange/3114299-maxcentercoordinatedistance
    maxCenterCoordinateDistance(): CLLocationDistance;
    setMaxCenterCoordinateDistance(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcamerazoomrange/3114300-mincentercoordinatedistance
    minCenterCoordinateDistance(): CLLocationDistance;
    setMinCenterCoordinateDistance(): void;
    //
    alloc():MKMapCameraZoomRange;
    //
    init():MKMapCameraZoomRange;
  }
}

declare const MKMapCameraZoomRange: cocoascript.MKMapCameraZoomRange;
declare namespace cocoascript {
  /**
   * A boundary of an area within which the map's center must remain.
   * https://developer.apple.com/documentation/mapkit/mkmapcameraboundary
   */
  interface MKMapCameraBoundary extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapcameraboundary/3141908-initwithcoder
    initWithCoder(coder: NSCoder):MKMapCameraBoundary;
    // https://developer.apple.com/documentation/mapkit/mkmapcameraboundary/3141909-initwithcoordinateregion
    initWithCoordinateRegion(region: MKCoordinateRegion):MKMapCameraBoundary;
    // https://developer.apple.com/documentation/mapkit/mkmapcameraboundary/3141910-initwithmaprect
    initWithMapRect(mapRect: MKMapRect):MKMapCameraBoundary;
    // https://developer.apple.com/documentation/mapkit/mkmapcameraboundary/3141911-maprect
    mapRect(): MKMapRect;
    setMapRect(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapcameraboundary/3141912-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    //
    alloc():MKMapCameraBoundary;
    //
    init():MKMapCameraBoundary;
  }
}

declare const MKMapCameraBoundary: cocoascript.MKMapCameraBoundary;
declare namespace cocoascript {
  /**
   * A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
   * https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter
   */
  interface MKPointOfInterestFilter extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143464-filterexcludingallcategories
    filterExcludingAllCategories(): MKPointOfInterestFilter;
    setFilterExcludingAllCategories(): void;
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143465-filterincludingallcategories
    filterIncludingAllCategories(): MKPointOfInterestFilter;
    setFilterIncludingAllCategories(): void;
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143467-initexcludingcategories
    initExcludingCategories(categories: MKPointOfInterestCategory):MKPointOfInterestFilter;
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143468-initincludingcategories
    initIncludingCategories(categories: MKPointOfInterestCategory):MKPointOfInterestFilter;
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143463-excludescategory
    excludesCategory(category: MKPointOfInterestCategory):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/3143466-includescategory
    includesCategory(category: MKPointOfInterestCategory):BOOL;
    //
    alloc():MKPointOfInterestFilter;
    //
    init():MKPointOfInterestFilter;
  }
}

declare const MKPointOfInterestFilter: cocoascript.MKPointOfInterestFilter;
declare namespace cocoascript {
  /**
   * A structured request to use when searching for points of interest.
   * https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest
   */
  interface MKLocalPointsOfInterestRequest extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564412-initwithcentercoordinate
    initWithCenterCoordinate_radius(coordinate: CLLocationCoordinate2D, radius: CLLocationDistance):MKLocalPointsOfInterestRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564413-initwithcoordinateregion
    initWithCoordinateRegion(region: MKCoordinateRegion):MKLocalPointsOfInterestRequest;
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564416-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564411-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564415-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/3564414-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    //
    alloc():MKLocalPointsOfInterestRequest;
    //
    init():MKLocalPointsOfInterestRequest;
  }
}

declare const MKLocalPointsOfInterestRequest: cocoascript.MKLocalPointsOfInterestRequest;
declare namespace cocoascript {
  /**
   * A point of interest on the map.
   * https://developer.apple.com/documentation/mapkit/mkmapitem
   */
  interface MKMapItem extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452002-mapitemforcurrentlocation
    mapItemForCurrentLocation():MKMapItem;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452285-initwithplacemark
    initWithPlacemark(placemark: MKPlacemark):MKMapItem;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452134-placemark
    placemark(): MKPlacemark;
    setPlacemark(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/3143415-pointofinterestcategory
    pointOfInterestCategory(): MKPointOfInterestCategory;
    setPointOfInterestCategory(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452319-iscurrentlocation
    isCurrentLocation(): BOOL;
    setIsCurrentLocation(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452339-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452088-phonenumber
    phoneNumber(): string | cocoascript.NSString;
    setPhoneNumber(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452746-url
    url(): NSURL;
    setUrl(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452431-timezone
    timeZone(): NSTimeZone;
    setTimeZone(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452207-openmapswithitems
    openMapsWithItems_launchOptions(mapItems: MKMapItem, launchOptions: MKMapItem):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/3395860-openmapswithitems
    openMapsWithItems_launchOptions_fromScene_completionHandler(mapItems: MKMapItem, launchOptions: MKMapItem, scene: UIScene, completion: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/1452239-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions(launchOptions: MKMapItem):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkmapitem/3395859-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions_fromScene_completionHandler(launchOptions: MKMapItem, scene: UIScene, completion: BOOL):void;
    //
    alloc():MKMapItem;
    //
    init():MKMapItem;
  }
}

declare const MKMapItem: cocoascript.MKMapItem;
// https://developer.apple.com/documentation/mapkit/mkmapitemtypeidentifier
declare const MKMapItemTypeIdentifier: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The visual representation of one of your annotation objects.
   * https://developer.apple.com/documentation/mapkit/mkannotationview
   */
  interface MKAnnotationView extends NSView {
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452779-initwithannotation
    initWithAnnotation_reuseIdentifier(annotation: MKAnnotation, reuseIdentifier: string | cocoascript.NSString):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1827527-initwithcoder
    initWithCoder(aDecoder: NSCoder):MKAnnotationView;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1451907-prepareforreuse
    prepareForReuse():void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/2921514-preparefordisplay
    prepareForDisplay():void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/2867298-displaypriority
    displayPriority(): MKFeatureDisplayPriority;
    setDisplayPriority(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/3547913-zpriority
    zPriority(): MKAnnotationViewZPriority;
    setZPriority(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/3547912-selectedzpriority
    selectedZPriority(): MKAnnotationViewZPriority;
    setSelectedZPriority(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452411-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452094-image
    image(): UIImage;
    setImage(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452047-highlighted
    highlighted(): BOOL;
    setHighlighted(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452613-annotation
    annotation(): MKAnnotation;
    setAnnotation(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452144-centeroffset
    centerOffset(): CGPoint;
    setCenterOffset(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452771-calloutoffset
    calloutOffset(): CGPoint;
    setCalloutOffset(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452060-reuseidentifier
    reuseIdentifier(): string | cocoascript.NSString;
    setReuseIdentifier(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452381-setselected
    setSelected_animated(selected: BOOL, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452777-selected
    selected(): BOOL;
    setSelected(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452451-canshowcallout
    canShowCallout(): BOOL;
    setCanShowCallout(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452423-leftcalloutaccessoryview
    leftCalloutAccessoryView(): UIView;
    setLeftCalloutAccessoryView(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452233-rightcalloutaccessoryview
    rightCalloutAccessoryView(): UIView;
    setRightCalloutAccessoryView(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452543-detailcalloutaccessoryview
    detailCalloutAccessoryView(): UIView;
    setDetailCalloutAccessoryView(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452545-leftcalloutoffset
    leftCalloutOffset(): CGPoint;
    setLeftCalloutOffset(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452036-rightcalloutoffset
    rightCalloutOffset(): CGPoint;
    setRightCalloutOffset(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452401-draggable
    draggable(): BOOL;
    setDraggable(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1452639-setdragstate
    setDragState_animated(newDragState: MKAnnotationViewDragState, animated: BOOL):void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/1451941-dragstate
    dragState(): MKAnnotationViewDragState;
    setDragState(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/2873315-collisionmode
    collisionMode(): MKAnnotationViewCollisionMode;
    setCollisionMode(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/2867297-clusteringidentifier
    clusteringIdentifier(): string | cocoascript.NSString;
    setClusteringIdentifier(): void;
    // https://developer.apple.com/documentation/mapkit/mkannotationview/2867294-clusterannotationview
    clusterAnnotationView(): MKAnnotationView;
    setClusterAnnotationView(): void;
    //
    alloc():MKAnnotationView;
    //
    init():MKAnnotationView;
  }
}

declare const MKAnnotationView: cocoascript.MKAnnotationView;
// https://developer.apple.com/documentation/mapkit/mkannotationcalloutinfodidchangenotification
declare const MKAnnotationCalloutInfoDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An annotation view that displays a balloon-shaped marker at the designated location.
   * https://developer.apple.com/documentation/mapkit/mkmarkerannotationview
   */
  interface MKMarkerAnnotationView extends MKAnnotationView {
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873822-markertintcolor
    markerTintColor(): UIColor;
    setMarkerTintColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873817-glyphtext
    glyphText(): string | cocoascript.NSString;
    setGlyphText(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873823-glyphimage
    glyphImage(): UIImage;
    setGlyphImage(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873824-glyphtintcolor
    glyphTintColor(): UIColor;
    setGlyphTintColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873815-selectedglyphimage
    selectedGlyphImage(): UIImage;
    setSelectedGlyphImage(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873816-titlevisibility
    titleVisibility(): MKFeatureVisibility;
    setTitleVisibility(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873813-subtitlevisibility
    subtitleVisibility(): MKFeatureVisibility;
    setSubtitleVisibility(): void;
    // https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/2873821-animateswhenadded
    animatesWhenAdded(): BOOL;
    setAnimatesWhenAdded(): void;
    //
    alloc():MKMarkerAnnotationView;
    //
    init():MKMarkerAnnotationView;
  }
}

declare const MKMarkerAnnotationView: cocoascript.MKMarkerAnnotationView;
declare namespace cocoascript {
  /**
   * An annotation view that displays a pin image on the map.
   * https://developer.apple.com/documentation/mapkit/mkpinannotationview
   */
  interface MKPinAnnotationView extends MKAnnotationView {
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1451990-redpincolor
    redPinColor():UIColor;
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1452568-greenpincolor
    greenPinColor():UIColor;
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1452110-purplepincolor
    purplePinColor():UIColor;
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1452042-pintintcolor
    pinTintColor(): UIColor;
    setPinTintColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1452654-animatesdrop
    animatesDrop(): BOOL;
    setAnimatesDrop(): void;
    // https://developer.apple.com/documentation/mapkit/mkpinannotationview/1452530-pincolor
    pinColor(): MKPinAnnotationColor;
    setPinColor(): void;
    //
    alloc():MKPinAnnotationView;
    //
    init():MKPinAnnotationView;
  }
}

declare const MKPinAnnotationView: cocoascript.MKPinAnnotationView;
declare namespace cocoascript {
  /**
   * An interface for associating content with a specific map region.
   * https://developer.apple.com/documentation/mapkit/mkoverlay
   */
  interface MKOverlay extends MKAnnotation {
    // https://developer.apple.com/documentation/mapkit/mkoverlay/1452113-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlay/1452791-boundingmaprect
    boundingMapRect(): MKMapRect;
    setBoundingMapRect(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlay/1452138-intersectsmaprect
    intersectsMapRect(mapRect: MKMapRect):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkoverlay/1452399-canreplacemapcontent
    canReplaceMapContent():BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The shared infrastructure used to draw overlays on the map surface.
   * https://developer.apple.com/documentation/mapkit/mkoverlayrenderer
   */
  interface MKOverlayRenderer extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1451915-initwithoverlay
    initWithOverlay(overlay: MKOverlay):MKOverlayRenderer;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452307-overlay
    overlay(): MKOverlay;
    setOverlay(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452699-alpha
    alpha(): CGFloat;
    setAlpha(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1451931-contentscalefactor
    contentScaleFactor(): CGFloat;
    setContentScaleFactor(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1451899-pointformappoint
    pointForMapPoint(mapPoint: MKMapPoint):CGPoint;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452670-mappointforpoint
    mapPointForPoint(point: CGPoint):MKMapPoint;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452738-rectformaprect
    rectForMapRect(mapRect: MKMapRect):CGRect;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452680-maprectforrect
    mapRectForRect(rect: CGRect):MKMapRect;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1451891-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452184-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: MKMapRect, zoomScale: MKZoomScale, context: CGContextRef):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452104-setneedsdisplay
    setNeedsDisplay():void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452564-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: MKMapRect):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/1452793-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):void;
    //
    alloc():MKOverlayRenderer;
    //
    init():MKOverlayRenderer;
  }
}

declare const MKOverlayRenderer: cocoascript.MKOverlayRenderer;
// https://developer.apple.com/documentation/mapkit/1452156-mkroadwidthatzoomscale
declare const MKRoadWidthAtZoomScale: cocoascript.MKZoomScale;
declare namespace cocoascript {
  /**
   * Defines the basic behavior associated with all overlay views.
   * https://developer.apple.com/documentation/mapkit/mkoverlayview
   */
  interface MKOverlayView extends UIView {
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613884-initwithoverlay
    initWithOverlay(overlay: MKOverlay):MKOverlayView;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613872-overlay
    overlay(): MKOverlay;
    setOverlay(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613874-pointformappoint
    pointForMapPoint(mapPoint: MKMapPoint):CGPoint;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613878-mappointforpoint
    mapPointForPoint(point: CGPoint):MKMapPoint;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613870-rectformaprect
    rectForMapRect(mapRect: MKMapRect):CGRect;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613882-maprectforrect
    mapRectForRect(rect: CGRect):MKMapRect;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613864-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613868-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: MKMapRect, zoomScale: MKZoomScale, context: CGContextRef):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613866-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: MKMapRect):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlayview/1613876-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):void;
    //
    alloc():MKOverlayView;
    //
    init():MKOverlayView;
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
  // https://developer.apple.com/documentation/mapkit/mkmaptype
  type MKMapType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkusertrackingmode
  type MKUserTrackingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkoverlaylevel
  type MKOverlayLevel = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract class that defines the basic properties for all shape-based overlay objects.
   * https://developer.apple.com/documentation/mapkit/mkshape
   */
  interface MKShape extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkshape/1437594-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/mapkit/mkshape/1437592-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    //
    alloc():MKShape;
    //
    init():MKShape;
  }
}

declare const MKShape: cocoascript.MKShape;
declare namespace cocoascript {
  /**
   * An annotation that always reflects the user's current location on the map.
   * https://developer.apple.com/documentation/mapkit/mkuserlocation
   */
  interface MKUserLocation extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkuserlocation/1452415-location
    location(): CLLocation;
    setLocation(): void;
    // https://developer.apple.com/documentation/mapkit/mkuserlocation/1452084-updating
    updating(): BOOL;
    setUpdating(): void;
    // https://developer.apple.com/documentation/mapkit/mkuserlocation/1452721-heading
    heading(): CLHeading;
    setHeading(): void;
    // https://developer.apple.com/documentation/mapkit/mkuserlocation/1452058-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/mapkit/mkuserlocation/1452562-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    //
    alloc():MKUserLocation;
    //
    init():MKUserLocation;
  }
}

declare const MKUserLocation: cocoascript.MKUserLocation;
declare namespace cocoascript {
  /**
   * A user-friendly description of a location on the map.
   * https://developer.apple.com/documentation/mapkit/mkplacemark
   */
  interface MKPlacemark extends CLPlacemark {
    // https://developer.apple.com/documentation/mapkit/mkplacemark/2172460-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKPlacemark;
    // https://developer.apple.com/documentation/mapkit/mkplacemark/2172461-initwithcoordinate
    initWithCoordinate_postalAddress(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress):MKPlacemark;
    // https://developer.apple.com/documentation/mapkit/mkplacemark/1451895-initwithcoordinate
    initWithCoordinate_addressDictionary(coordinate: CLLocationCoordinate2D, addressDictionary: MKPlacemark):MKPlacemark;
    // https://developer.apple.com/documentation/mapkit/mkplacemark/1451952-countrycode
    countryCode(): string | cocoascript.NSString;
    setCountryCode(): void;
    //
    alloc():MKPlacemark;
    //
    init():MKPlacemark;
  }
}

declare const MKPlacemark: cocoascript.MKPlacemark;
declare namespace cocoascript {
  /**
   * An annotation that groups two or more distinct annotations into a single entity.
   * https://developer.apple.com/documentation/mapkit/mkclusterannotation
   */
  interface MKClusterAnnotation extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkclusterannotation/2866567-initwithmemberannotations
    initWithMemberAnnotations(memberAnnotations: MKAnnotation):MKClusterAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkclusterannotation/2866569-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/mapkit/mkclusterannotation/2866570-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    // https://developer.apple.com/documentation/mapkit/mkclusterannotation/2866568-memberannotations
    memberAnnotations(): MKAnnotation;
    setMemberAnnotations(): void;
    //
    alloc():MKClusterAnnotation;
    //
    init():MKClusterAnnotation;
  }
}

declare const MKClusterAnnotation: cocoascript.MKClusterAnnotation;
declare namespace cocoascript {
  /**
   * A utility object for generating a list of completion strings based on a partial search string that you provide.
   * https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter
   */
  interface MKLocalSearchCompleter extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452106-delegate
    delegate(): MKLocalSearchCompleterDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452555-queryfragment
    queryFragment(): string | cocoascript.NSString;
    setQueryFragment(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1451923-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/3143405-resulttypes
    resultTypes(): MKLocalSearchCompleterResultType;
    setResultTypes(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/3143404-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452150-filtertype
    filterType(): MKSearchCompletionFilterType;
    setFilterType(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452337-cancel
    cancel():void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452272-searching
    searching(): BOOL;
    setSearching(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/1452295-results
    results(): MKLocalSearchCompletion;
    setResults(): void;
    //
    alloc():MKLocalSearchCompleter;
    //
    init():MKLocalSearchCompleter;
  }
}

declare const MKLocalSearchCompleter: cocoascript.MKLocalSearchCompleter;
declare namespace cocoascript {
  /**
   * Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country, city, or street.
   * https://developer.apple.com/documentation/mapkit/mkreversegeocoder
   */
  interface MKReverseGeocoder extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618471-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKReverseGeocoder;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618478-delegate
    delegate(): MKReverseGeocoderDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618477-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618481-placemark
    placemark(): MKPlacemark;
    setPlacemark(): void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618480-start
    start():void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618474-querying
    querying(): BOOL;
    setQuerying(): void;
    // https://developer.apple.com/documentation/mapkit/mkreversegeocoder/1618479-cancel
    cancel():void;
    //
    alloc():MKReverseGeocoder;
    //
    init():MKReverseGeocoder;
  }
}

declare const MKReverseGeocoder: cocoascript.MKReverseGeocoder;
declare namespace cocoascript {
  /**
   * The decoded representation of a GeoJSON feature.
   * https://developer.apple.com/documentation/mapkit/mkgeojsonfeature
   */
  interface MKGeoJSONFeature extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/3113996-geometry
    geometry(): MKGeoJSONObject;
    setGeometry(): void;
    // https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/3113997-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/3113998-properties
    properties(): NSData;
    setProperties(): void;
    //
    alloc():MKGeoJSONFeature;
    //
    init():MKGeoJSONFeature;
  }
}

declare const MKGeoJSONFeature: cocoascript.MKGeoJSONFeature;
declare namespace cocoascript {
  /**
   * An object that decodes GeoJSON objects into MapKit types.
   * https://developer.apple.com/documentation/mapkit/mkgeojsondecoder
   */
  interface MKGeoJSONDecoder extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkgeojsondecoder/3113994-geojsonobjectswithdata
    geoJSONObjectsWithData_error(data: NSData, errorPtr: NSError):MKGeoJSONObject;
    //
    alloc():MKGeoJSONDecoder;
    //
    init():MKGeoJSONDecoder;
  }
}

declare const MKGeoJSONDecoder: cocoascript.MKGeoJSONDecoder;
declare namespace cocoascript {
  /**
   * A specialized view that displays the current compass heading for its associated map.
   * https://developer.apple.com/documentation/mapkit/mkcompassbutton
   */
  interface MKCompassButton extends NSView {
    // https://developer.apple.com/documentation/mapkit/mkcompassbutton/2890261-compassbuttonwithmapview
    compassButtonWithMapView(mapView: MKMapView):MKCompassButton;
    // https://developer.apple.com/documentation/mapkit/mkcompassbutton/2890264-mapview
    mapView(): MKMapView;
    setMapView(): void;
    // https://developer.apple.com/documentation/mapkit/mkcompassbutton/2890262-compassvisibility
    compassVisibility(): MKFeatureVisibility;
    setCompassVisibility(): void;
    //
    alloc():MKCompassButton;
    //
    init():MKCompassButton;
  }
}

declare const MKCompassButton: cocoascript.MKCompassButton;
declare namespace cocoascript {
  /**
   * A specialized view that displays the current scale information for its associated map.
   * https://developer.apple.com/documentation/mapkit/mkscaleview
   */
  interface MKScaleView extends UIView {
    // https://developer.apple.com/documentation/mapkit/mkscaleview/2890255-scaleviewwithmapview
    scaleViewWithMapView(mapView: MKMapView):MKScaleView;
    // https://developer.apple.com/documentation/mapkit/mkscaleview/2890257-mapview
    mapView(): MKMapView;
    setMapView(): void;
    // https://developer.apple.com/documentation/mapkit/mkscaleview/2890254-scalevisibility
    scaleVisibility(): MKFeatureVisibility;
    setScaleVisibility(): void;
    // https://developer.apple.com/documentation/mapkit/mkscaleview/2890258-legendalignment
    legendAlignment(): MKScaleViewAlignment;
    setLegendAlignment(): void;
    //
    alloc():MKScaleView;
    //
    init():MKScaleView;
  }
}

declare const MKScaleView: cocoascript.MKScaleView;
declare namespace cocoascript {
  /**
   * A specialized view that displays and controls the zoom level of the map view.
   * https://developer.apple.com/documentation/mapkit/mkzoomcontrol
   */
  interface MKZoomControl extends NSView {
    // https://developer.apple.com/documentation/mapkit/mkzoomcontrol/3567218-zoomcontrolwithmapview
    zoomControlWithMapView(mapView: MKMapView):MKZoomControl;
    // https://developer.apple.com/documentation/mapkit/mkzoomcontrol/3567217-mapview
    mapView(): MKMapView;
    setMapView(): void;
    //
    alloc():MKZoomControl;
    //
    init():MKZoomControl;
  }
}

declare const MKZoomControl: cocoascript.MKZoomControl;
declare namespace cocoascript {
  /**
   * A specialized view that displays and controls the pitch angle of the map view.
   * https://developer.apple.com/documentation/mapkit/mkpitchcontrol
   */
  interface MKPitchControl extends NSView {
    // https://developer.apple.com/documentation/mapkit/mkpitchcontrol/3567215-pitchcontrolwithmapview
    pitchControlWithMapView(mapView: MKMapView):MKPitchControl;
    // https://developer.apple.com/documentation/mapkit/mkpitchcontrol/3567214-mapview
    mapView(): MKMapView;
    setMapView(): void;
    //
    alloc():MKPitchControl;
    //
    init():MKPitchControl;
  }
}

declare const MKPitchControl: cocoascript.MKPitchControl;
declare namespace cocoascript {
  /**
   * A specialized button that allows the user to toggle if the map tracks to the heading the user is facing.
   * https://developer.apple.com/documentation/mapkit/mkusertrackingbutton
   */
  interface MKUserTrackingButton extends UIView {
    // https://developer.apple.com/documentation/mapkit/mkusertrackingbutton/2867281-usertrackingbuttonwithmapview
    userTrackingButtonWithMapView(mapView: MKMapView):MKUserTrackingButton;
    // https://developer.apple.com/documentation/mapkit/mkusertrackingbutton/2867283-mapview
    mapView(): MKMapView;
    setMapView(): void;
    //
    alloc():MKUserTrackingButton;
    //
    init():MKUserTrackingButton;
  }
}

declare const MKUserTrackingButton: cocoascript.MKUserTrackingButton;
declare namespace cocoascript {
  /**
   * A specialized bar button item that allows the user to toggle if the map tracks to the heading the user is facing.
   * https://developer.apple.com/documentation/mapkit/mkusertrackingbarbuttonitem
   */
  interface MKUserTrackingBarButtonItem extends UIBarButtonItem {
    // https://developer.apple.com/documentation/mapkit/mkusertrackingbarbuttonitem/1620146-initwithmapview
    initWithMapView(mapView: MKMapView):MKUserTrackingBarButtonItem;
    // https://developer.apple.com/documentation/mapkit/mkusertrackingbarbuttonitem/1620161-mapview
    mapView(): MKMapView;
    setMapView(): void;
    //
    alloc():MKUserTrackingBarButtonItem;
    //
    init():MKUserTrackingBarButtonItem;
  }
}

declare const MKUserTrackingBarButtonItem: cocoascript.MKUserTrackingBarButtonItem;
declare namespace cocoascript {
  /**
   * A utility object for initiating map-based searches and processing the results.
   * https://developer.apple.com/documentation/mapkit/mklocalsearch
   */
  interface MKLocalSearch extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearch/1452759-initwithrequest
    initWithRequest(request: MKLocalSearchRequest):MKLocalSearch;
    // https://developer.apple.com/documentation/mapkit/mklocalsearch/3564418-initwithpointsofinterestrequest
    initWithPointsOfInterestRequest(request: MKLocalPointsOfInterestRequest):MKLocalSearch;
    // https://developer.apple.com/documentation/mapkit/mklocalsearch/1452652-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: MKLocalSearchCompletionHandler):void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearch/1452349-searching
    searching(): BOOL;
    setSearching(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearch/1452160-cancel
    cancel():void;
    //
    alloc():MKLocalSearch;
    //
    init():MKLocalSearch;
  }
}

declare const MKLocalSearch: cocoascript.MKLocalSearch;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mklocalsearchresulttype
  type MKLocalSearchResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A utility class for capturing a map and its content into an image.
   * https://developer.apple.com/documentation/mapkit/mkmapsnapshotter
   */
  interface MKMapSnapshotter extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/1452090-initwithoptions
    initWithOptions(options: MKMapSnapshotOptions):MKMapSnapshotter;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/1452479-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: MKMapSnapshotCompletionHandler):void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/1452419-startwithqueue
    startWithQueue_completionHandler(queue: dispatch_queue_t, completionHandler: MKMapSnapshotCompletionHandler):void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/1452388-cancel
    cancel():void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/1451960-loading
    loading(): BOOL;
    setLoading(): void;
    //
    alloc():MKMapSnapshotter;
    //
    init():MKMapSnapshotter;
  }
}

declare const MKMapSnapshotter: cocoascript.MKMapSnapshotter;
// https://developer.apple.com/documentation/mapkit/mkmapcamerazoomdefault
declare const MKMapCameraZoomDefault: cocoascript.CLLocationDistance;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkpointofinterestcategory
  type MKPointOfInterestCategory = cocoascript.NSString;
}
declare namespace cocoascript {
  interface MKCoordinateRegion {
  }
}
// https://developer.apple.com/documentation/mapkit/mkpointsofinterestrequestmaxradius
declare const MKPointsOfInterestRequestMaxRadius: cocoascript.CLLocationDistance;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterresulttype
  type MKLocalSearchCompleterResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A fully-formed string that completes a partial string.
   * https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion
   */
  interface MKLocalSearchCompletion extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/1452455-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/1452566-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/1451935-titlehighlightranges
    titleHighlightRanges(): NSValue;
    setTitleHighlightRanges(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/1452489-subtitlehighlightranges
    subtitleHighlightRanges(): NSValue;
    setSubtitleHighlightRanges(): void;
    //
    alloc():MKLocalSearchCompletion;
    //
    init():MKLocalSearchCompletion;
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
   * https://developer.apple.com/documentation/mapkit/mkdistanceformatter
   */
  interface MKDistanceFormatter extends NSFormatter {
    // https://developer.apple.com/documentation/mapkit/mkdistanceformatter/1451994-stringfromdistance
    stringFromDistance(distance: CLLocationDistance):NSString;
    // https://developer.apple.com/documentation/mapkit/mkdistanceformatter/1452766-distancefromstring
    distanceFromString(distance: string | cocoascript.NSString):CLLocationDistance;
    // https://developer.apple.com/documentation/mapkit/mkdistanceformatter/1452235-locale
    locale(): NSLocale;
    setLocale(): void;
    // https://developer.apple.com/documentation/mapkit/mkdistanceformatter/1452775-units
    units(): MKDistanceFormatterUnits;
    setUnits(): void;
    // https://developer.apple.com/documentation/mapkit/mkdistanceformatter/1452128-unitstyle
    unitStyle(): MKDistanceFormatterUnitStyle;
    setUnitStyle(): void;
    //
    alloc():MKDistanceFormatter;
    //
    init():MKDistanceFormatter;
  }
}

declare const MKDistanceFormatter: cocoascript.MKDistanceFormatter;
declare namespace cocoascript {
  /**
   * A utility object that computes directions and travel-time information based on the route information you provide.
   * https://developer.apple.com/documentation/mapkit/mkdirections
   */
  interface MKDirections extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkdirections/1452197-initwithrequest
    initWithRequest(request: MKDirectionsRequest):MKDirections;
    // https://developer.apple.com/documentation/mapkit/mkdirections/1452078-calculatedirectionswithcompletio
    calculateDirectionsWithCompletionHandler(completionHandler: MKDirectionsHandler):void;
    // https://developer.apple.com/documentation/mapkit/mkdirections/1452736-calculateetawithcompletionhandle
    calculateETAWithCompletionHandler(completionHandler: MKETAHandler):void;
    // https://developer.apple.com/documentation/mapkit/mkdirections/1452656-cancel
    cancel():void;
    // https://developer.apple.com/documentation/mapkit/mkdirections/1452217-calculating
    calculating(): BOOL;
    setCalculating(): void;
    //
    alloc():MKDirections;
    //
    init():MKDirections;
  }
}

declare const MKDirections: cocoascript.MKDirections;
declare namespace cocoascript {
  /**
   * The start and end points of a route, along with the planned mode of transportation.
   * https://developer.apple.com/documentation/mapkit/mkdirectionsrequest
   */
  interface MKDirectionsRequest extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433150-isdirectionsrequesturl
    isDirectionsRequestURL(url: NSURL):BOOL;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433158-initwithcontentsofurl
    initWithContentsOfURL(url: NSURL):MKDirectionsRequest;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433144-source
    source(): MKMapItem;
    setSource(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433156-setsource
    setSource(source: MKMapItem):void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433146-destination
    destination(): MKMapItem;
    setDestination(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433157-setdestination
    setDestination(destination: MKMapItem):void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433152-transporttype
    transportType(): MKDirectionsTransportType;
    setTransportType(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433154-requestsalternateroutes
    requestsAlternateRoutes(): BOOL;
    setRequestsAlternateRoutes(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433155-departuredate
    departureDate(): NSDate;
    setDepartureDate(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsrequest/1433148-arrivaldate
    arrivalDate(): NSDate;
    setArrivalDate(): void;
    //
    alloc():MKDirectionsRequest;
    //
    init():MKDirectionsRequest;
  }
}

declare const MKDirectionsRequest: cocoascript.MKDirectionsRequest;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionscamerakey
declare const MKLaunchOptionsCameraKey: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodedefault
declare const MKLaunchOptionsDirectionsModeDefault: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodedriving
declare const MKLaunchOptionsDirectionsModeDriving: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodekey
declare const MKLaunchOptionsDirectionsModeKey: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodetransit
declare const MKLaunchOptionsDirectionsModeTransit: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodewalking
declare const MKLaunchOptionsDirectionsModeWalking: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsmapcenterkey
declare const MKLaunchOptionsMapCenterKey: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsmapspankey
declare const MKLaunchOptionsMapSpanKey: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsmaptypekey
declare const MKLaunchOptionsMapTypeKey: cocoascript.NSString;
// https://developer.apple.com/documentation/mapkit/mklaunchoptionsshowstraffickey
declare const MKLaunchOptionsShowsTrafficKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The route information returned by Apple servers in response to one of your requests for directions.
   * https://developer.apple.com/documentation/mapkit/mkdirectionsresponse
   */
  interface MKDirectionsResponse extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkdirectionsresponse/1452261-source
    source(): MKMapItem;
    setSource(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsresponse/1451981-destination
    destination(): MKMapItem;
    setDestination(): void;
    // https://developer.apple.com/documentation/mapkit/mkdirectionsresponse/1452071-routes
    routes(): MKRoute;
    setRoutes(): void;
    //
    alloc():MKDirectionsResponse;
    //
    init():MKDirectionsResponse;
  }
}

declare const MKDirectionsResponse: cocoascript.MKDirectionsResponse;
declare namespace cocoascript {
  /**
   * The travel-time information returned by Apple servers.
   * https://developer.apple.com/documentation/mapkit/mketaresponse
   */
  interface MKETAResponse extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1451947-source
    source(): MKMapItem;
    setSource(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1452611-destination
    destination(): MKMapItem;
    setDestination(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1452551-expectedtraveltime
    expectedTravelTime(): NSTimeInterval;
    setExpectedTravelTime(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1452644-expecteddeparturedate
    expectedDepartureDate(): NSDate;
    setExpectedDepartureDate(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1451881-expectedarrivaldate
    expectedArrivalDate(): NSDate;
    setExpectedArrivalDate(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1452164-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // https://developer.apple.com/documentation/mapkit/mketaresponse/1452616-transporttype
    transportType(): MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():MKETAResponse;
    //
    init():MKETAResponse;
  }
}

declare const MKETAResponse: cocoascript.MKETAResponse;
declare namespace cocoascript {
  /**
   * A single route between a requested start and end point.
   * https://developer.apple.com/documentation/mapkit/mkroute
   */
  interface MKRoute extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkroute/1451943-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452173-steps
    steps(): MKRouteStep;
    setSteps(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452684-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452359-advisorynotices
    advisoryNotices(): string | cocoascript.NSString;
    setAdvisoryNotices(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452405-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452297-expectedtraveltime
    expectedTravelTime(): NSTimeInterval;
    setExpectedTravelTime(): void;
    // https://developer.apple.com/documentation/mapkit/mkroute/1452674-transporttype
    transportType(): MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():MKRoute;
    //
    init():MKRoute;
  }
}

declare const MKRoute: cocoascript.MKRoute;
declare namespace cocoascript {
  /**
   * One portion of an overall route.
   * https://developer.apple.com/documentation/mapkit/mkroutestep
   */
  interface MKRouteStep extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkroutestep/1452223-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // https://developer.apple.com/documentation/mapkit/mkroutestep/1452447-instructions
    instructions(): string | cocoascript.NSString;
    setInstructions(): void;
    // https://developer.apple.com/documentation/mapkit/mkroutestep/1452347-notice
    notice(): string | cocoascript.NSString;
    setNotice(): void;
    // https://developer.apple.com/documentation/mapkit/mkroutestep/1452004-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // https://developer.apple.com/documentation/mapkit/mkroutestep/1452051-transporttype
    transportType(): MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():MKRouteStep;
    //
    init():MKRouteStep;
  }
}

declare const MKRouteStep: cocoascript.MKRouteStep;
declare namespace cocoascript {
  /**
   * An image generated by a snapshotter object.
   * https://developer.apple.com/documentation/mapkit/mkmapsnapshot
   */
  interface MKMapSnapshot extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshot/1452701-image
    image(): UIImage;
    setImage(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshot/3013837-appearance
    appearance(): NSAppearance;
    setAppearance(): void;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshot/1452523-pointforcoordinate
    pointForCoordinate(coordinate: CLLocationCoordinate2D):CGPoint;
    // https://developer.apple.com/documentation/mapkit/mkmapsnapshot/3152226-traitcollection
    traitCollection(): UITraitCollection;
    setTraitCollection(): void;
    //
    alloc():MKMapSnapshot;
    //
    init():MKMapSnapshot;
  }
}

declare const MKMapSnapshot: cocoascript.MKMapSnapshot;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkerrorcode
  type MKErrorCode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkfeaturedisplaypriority
  type MKFeatureDisplayPriority = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkannotationviewzpriority
  type MKAnnotationViewZPriority = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkannotationviewcollisionmode
  type MKAnnotationViewCollisionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkannotationviewdragstate
  type MKAnnotationViewDragState = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/mapkit/mkfeaturedisplayprioritydefaultlow
declare const MKFeatureDisplayPriorityDefaultLow: cocoascript.MKFeatureDisplayPriority;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkfeaturevisibility
  type MKFeatureVisibility = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A string-based annotation that you apply to a specific map point.
   * https://developer.apple.com/documentation/mapkit/mkpointannotation
   */
  interface MKPointAnnotation extends MKShape {
    // https://developer.apple.com/documentation/mapkit/mkpointannotation/3235758-init
    init():MKPointAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkpointannotation/3235759-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKPointAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkpointannotation/3235760-initwithcoordinate
    initWithCoordinate_title_subtitle(coordinate: CLLocationCoordinate2D, title: string | cocoascript.NSString, subtitle: string | cocoascript.NSString):MKPointAnnotation;
    // https://developer.apple.com/documentation/mapkit/mkpointannotation/1452620-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    //
    alloc():MKPointAnnotation;
    //
    init():MKPointAnnotation;
  }
}

declare const MKPointAnnotation: cocoascript.MKPointAnnotation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkpinannotationcolor
  type MKPinAnnotationColor = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A circular overlay with a configurable radius and centered on a specific geographic coordinate.
   * https://developer.apple.com/documentation/mapkit/mkcircle
   */
  interface MKCircle extends MKShape {
    // https://developer.apple.com/documentation/mapkit/mkcircle/1411076-circlewithcentercoordinate
    circleWithCenterCoordinate_radius(coord: CLLocationCoordinate2D, radius: CLLocationDistance):MKCircle;
    // https://developer.apple.com/documentation/mapkit/mkcircle/1411072-circlewithmaprect
    circleWithMapRect(mapRect: MKMapRect):MKCircle;
    // https://developer.apple.com/documentation/mapkit/mkcircle/1411074-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // https://developer.apple.com/documentation/mapkit/mkcircle/1411067-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    // https://developer.apple.com/documentation/mapkit/mkcircle/1411065-boundingmaprect
    boundingMapRect(): MKMapRect;
    setBoundingMapRect(): void;
    //
    alloc():MKCircle;
    //
    init():MKCircle;
  }
}

declare const MKCircle: cocoascript.MKCircle;
declare namespace cocoascript {
  /**
   * An overlay that covers an area of the map with bitmap tiles.
   * https://developer.apple.com/documentation/mapkit/mktileoverlay
   */
  interface MKTileOverlay extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452705-initwithurltemplate
    initWithURLTemplate(URLTemplate: string | cocoascript.NSString):MKTileOverlay;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452108-tilesize
    tileSize(): CGSize;
    setTileSize(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452251-geometryflipped
    geometryFlipped(): BOOL;
    setGeometryFlipped(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452199-minimumz
    minimumZ(): NSInteger;
    setMinimumZ(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452660-maximumz
    maximumZ(): NSInteger;
    setMaximumZ(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452604-canreplacemapcontent
    canReplaceMapContent(): BOOL;
    setCanReplaceMapContent(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452256-urltemplate
    URLTemplate(): string | cocoascript.NSString;
    setURLTemplate(): void;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452606-urlfortilepath
    URLForTilePath(path: MKTileOverlayPath):NSURL;
    // https://developer.apple.com/documentation/mapkit/mktileoverlay/1452445-loadtileatpath
    loadTileAtPath_result(path: MKTileOverlayPath, result: NSError):void;
    //
    alloc():MKTileOverlay;
    //
    init():MKTileOverlay;
  }
}

declare const MKTileOverlay: cocoascript.MKTileOverlay;
declare namespace cocoascript {
  /**
   * A closed polygon shape.
   * https://developer.apple.com/documentation/mapkit/mkpolygon
   */
  interface MKPolygon extends MKMultiPoint {
    // https://developer.apple.com/documentation/mapkit/mkpolygon/1452247-polygonwithpoints
    polygonWithPoints_count(points: MKMapPoint, count: NSUInteger):MKPolygon;
    // https://developer.apple.com/documentation/mapkit/mkpolygon/1451945-polygonwithpoints
    polygonWithPoints_count_interiorPolygons(points: MKMapPoint, count: NSUInteger, interiorPolygons: MKPolygon):MKPolygon;
    // https://developer.apple.com/documentation/mapkit/mkpolygon/1452497-polygonwithcoordinates
    polygonWithCoordinates_count(coords: CLLocationCoordinate2D, count: NSUInteger):MKPolygon;
    // https://developer.apple.com/documentation/mapkit/mkpolygon/1452532-polygonwithcoordinates
    polygonWithCoordinates_count_interiorPolygons(coords: CLLocationCoordinate2D, count: NSUInteger, interiorPolygons: MKPolygon):MKPolygon;
    // https://developer.apple.com/documentation/mapkit/mkpolygon/1452521-interiorpolygons
    interiorPolygons(): MKPolygon;
    setInteriorPolygons(): void;
    //
    alloc():MKPolygon;
    //
    init():MKPolygon;
  }
}

declare const MKPolygon: cocoascript.MKPolygon;
declare namespace cocoascript {
  /**
   * A shape consisting of one or more connected line segments.
   * https://developer.apple.com/documentation/mapkit/mkpolyline
   */
  interface MKPolyline extends MKMultiPoint {
    // https://developer.apple.com/documentation/mapkit/mkpolyline/1452773-polylinewithpoints
    polylineWithPoints_count(points: MKMapPoint, count: NSUInteger):MKPolyline;
    // https://developer.apple.com/documentation/mapkit/mkpolyline/1452205-polylinewithcoordinates
    polylineWithCoordinates_count(coords: CLLocationCoordinate2D, count: NSUInteger):MKPolyline;
    //
    alloc():MKPolyline;
    //
    init():MKPolyline;
  }
}

declare const MKPolyline: cocoascript.MKPolyline;
declare namespace cocoascript {
  /**
   * A collection of multiple closed polygon shapes.
   * https://developer.apple.com/documentation/mapkit/mkmultipolygon
   */
  interface MKMultiPolygon extends MKShape {
    // https://developer.apple.com/documentation/mapkit/mkmultipolygon/3088835-initwithpolygons
    initWithPolygons(polygons: MKPolygon):MKMultiPolygon;
    // https://developer.apple.com/documentation/mapkit/mkmultipolygon/3088836-polygons
    polygons(): MKPolygon;
    setPolygons(): void;
    //
    alloc():MKMultiPolygon;
    //
    init():MKMultiPolygon;
  }
}

declare const MKMultiPolygon: cocoascript.MKMultiPolygon;
declare namespace cocoascript {
  /**
   * A collection of multipolyline shapes, each consisting of one or more connected line segments.
   * https://developer.apple.com/documentation/mapkit/mkmultipolyline
   */
  interface MKMultiPolyline extends MKShape {
    // https://developer.apple.com/documentation/mapkit/mkmultipolyline/3088841-initwithpolylines
    initWithPolylines(polylines: MKPolyline):MKMultiPolyline;
    // https://developer.apple.com/documentation/mapkit/mkmultipolyline/3088842-polylines
    polylines(): MKPolyline;
    setPolylines(): void;
    //
    alloc():MKMultiPolyline;
    //
    init():MKMultiPolyline;
  }
}

declare const MKMultiPolyline: cocoascript.MKMultiPolyline;
declare namespace cocoascript {
  /**
   * An abstract class that defines the common behavior shared by polygon and polyline overlays.
   * https://developer.apple.com/documentation/mapkit/mkmultipoint
   */
  interface MKMultiPoint extends MKShape {
    // https://developer.apple.com/documentation/mapkit/mkmultipoint/1452425-points
    points():MKMapPoint;
    // https://developer.apple.com/documentation/mapkit/mkmultipoint/1452179-pointcount
    pointCount(): NSUInteger;
    setPointCount(): void;
    // https://developer.apple.com/documentation/mapkit/mkmultipoint/3571236-locationatpointindex
    locationAtPointIndex(index: NSUInteger):CGFloat;
    // https://developer.apple.com/documentation/mapkit/mkmultipoint/3571237-locationsatpointindexes
    locationsAtPointIndexes(indexes: NSIndexSet):NSNumber;
    // https://developer.apple.com/documentation/mapkit/mkmultipoint/1451911-getcoordinates
    getCoordinates_range(coords: CLLocationCoordinate2D, range: NSRange):void;
    //
    alloc():MKMultiPoint;
    //
    init():MKMultiPoint;
  }
}

declare const MKMultiPoint: cocoascript.MKMultiPoint;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkzoomscale
  type MKZoomScale = cocoascript.CGFloat;
}
// https://developer.apple.com/documentation/mapkit/mkmapsizeworld
declare const MKMapSizeWorld: cocoascript.MKMapSize;
// https://developer.apple.com/documentation/mapkit/mkmaprectnull
declare const MKMapRectNull: cocoascript.MKMapRect;
// https://developer.apple.com/documentation/mapkit/mkmaprectworld
declare const MKMapRectWorld: cocoascript.MKMapRect;
declare namespace cocoascript {
  /**
   * An annotation view that shows the user’s location with the default MapKit styling.
   * https://developer.apple.com/documentation/mapkit/mkuserlocationview
   */
  interface MKUserLocationView extends MKAnnotationView {
    //
    alloc():MKUserLocationView;
    //
    init():MKUserLocationView;
  }
}

declare const MKUserLocationView: cocoascript.MKUserLocationView;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mksearchcompletionfiltertype
  type MKSearchCompletionFilterType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Represents a generic overlay that draws its contents using a
   * https://developer.apple.com/documentation/mapkit/mkoverlaypathview
   */
  interface MKOverlayPathView extends MKOverlayView {
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617215-fillcolor
    fillColor(): UIColor;
    setFillColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617209-strokecolor
    strokeColor(): UIColor;
    setStrokeColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617218-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617206-linejoin
    lineJoin(): CGLineJoin;
    setLineJoin(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617212-linecap
    lineCap(): CGLineCap;
    setLineCap(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617219-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617211-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617210-linedashpattern
    lineDashPattern(): NSArray;
    setLineDashPattern(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617208-path
    path(): CGPathRef;
    setPath(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617216-createpath
    createPath():void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617217-invalidatepath
    invalidatePath():void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617205-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617207-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617214-strokepath
    strokePath_inContext(path: CGPathRef, context: CGContextRef):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathview/1617213-fillpath
    fillPath_inContext(path: CGPathRef, context: CGContextRef):void;
    //
    alloc():MKOverlayPathView;
    //
    init():MKOverlayPathView;
  }
}

declare const MKOverlayPathView: cocoascript.MKOverlayPathView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * https://developer.apple.com/documentation/mapkit/mkcircleview
   */
  interface MKCircleView extends MKOverlayPathView {
    // https://developer.apple.com/documentation/mapkit/mkcircleview/1623524-initwithcircle
    initWithCircle(circle: MKCircle):MKCircleView;
    // https://developer.apple.com/documentation/mapkit/mkcircleview/1623525-circle
    circle(): MKCircle;
    setCircle(): void;
    //
    alloc():MKCircleView;
    //
    init():MKCircleView;
  }
}

declare const MKCircleView: cocoascript.MKCircleView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * https://developer.apple.com/documentation/mapkit/mkpolygonview
   */
  interface MKPolygonView extends MKOverlayPathView {
    // https://developer.apple.com/documentation/mapkit/mkpolygonview/1614141-initwithpolygon
    initWithPolygon(polygon: MKPolygon):MKPolygonView;
    // https://developer.apple.com/documentation/mapkit/mkpolygonview/1614140-polygon
    polygon(): MKPolygon;
    setPolygon(): void;
    //
    alloc():MKPolygonView;
    //
    init():MKPolygonView;
  }
}

declare const MKPolygonView: cocoascript.MKPolygonView;
declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * https://developer.apple.com/documentation/mapkit/mkpolylineview
   */
  interface MKPolylineView extends MKOverlayPathView {
    // https://developer.apple.com/documentation/mapkit/mkpolylineview/1618189-initwithpolyline
    initWithPolyline(polyline: MKPolyline):MKPolylineView;
    // https://developer.apple.com/documentation/mapkit/mkpolylineview/1618188-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    //
    alloc():MKPolylineView;
    //
    init():MKPolylineView;
  }
}

declare const MKPolylineView: cocoascript.MKPolylineView;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkscaleviewalignment
  type MKScaleViewAlignment = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mklocalsearchcompletionhandler
  type MKLocalSearchCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  /**
   * The results from a map-based search.
   * https://developer.apple.com/documentation/mapkit/mklocalsearchresponse
   */
  interface MKLocalSearchResponse extends NSObject {
    // https://developer.apple.com/documentation/mapkit/mklocalsearchresponse/1451939-mapitems
    mapItems(): MKMapItem;
    setMapItems(): void;
    // https://developer.apple.com/documentation/mapkit/mklocalsearchresponse/1452501-boundingregion
    boundingRegion(): MKCoordinateRegion;
    setBoundingRegion(): void;
    //
    alloc():MKLocalSearchResponse;
    //
    init():MKLocalSearchResponse;
  }
}

declare const MKLocalSearchResponse: cocoascript.MKLocalSearchResponse;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkmapsnapshotcompletionhandler
  type MKMapSnapshotCompletionHandler = cocoascript.NSError;
}
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryairport
declare const MKPointOfInterestCategoryAirport: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryamusementpark
declare const MKPointOfInterestCategoryAmusementPark: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryaquarium
declare const MKPointOfInterestCategoryAquarium: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryatm
declare const MKPointOfInterestCategoryATM: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorybakery
declare const MKPointOfInterestCategoryBakery: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorybank
declare const MKPointOfInterestCategoryBank: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorybeach
declare const MKPointOfInterestCategoryBeach: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorybrewery
declare const MKPointOfInterestCategoryBrewery: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorycafe
declare const MKPointOfInterestCategoryCafe: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorycampground
declare const MKPointOfInterestCategoryCampground: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorycarrental
declare const MKPointOfInterestCategoryCarRental: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryevcharger
declare const MKPointOfInterestCategoryEVCharger: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryfirestation
declare const MKPointOfInterestCategoryFireStation: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryfitnesscenter
declare const MKPointOfInterestCategoryFitnessCenter: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryfoodmarket
declare const MKPointOfInterestCategoryFoodMarket: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorygasstation
declare const MKPointOfInterestCategoryGasStation: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryhospital
declare const MKPointOfInterestCategoryHospital: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryhotel
declare const MKPointOfInterestCategoryHotel: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorylaundry
declare const MKPointOfInterestCategoryLaundry: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorylibrary
declare const MKPointOfInterestCategoryLibrary: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorymarina
declare const MKPointOfInterestCategoryMarina: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorymovietheater
declare const MKPointOfInterestCategoryMovieTheater: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorymuseum
declare const MKPointOfInterestCategoryMuseum: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorynationalpark
declare const MKPointOfInterestCategoryNationalPark: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorynightlife
declare const MKPointOfInterestCategoryNightlife: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorypark
declare const MKPointOfInterestCategoryPark: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryparking
declare const MKPointOfInterestCategoryParking: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorypharmacy
declare const MKPointOfInterestCategoryPharmacy: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorypolice
declare const MKPointOfInterestCategoryPolice: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorypostoffice
declare const MKPointOfInterestCategoryPostOffice: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorypublictransport
declare const MKPointOfInterestCategoryPublicTransport: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryrestaurant
declare const MKPointOfInterestCategoryRestaurant: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryrestroom
declare const MKPointOfInterestCategoryRestroom: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryschool
declare const MKPointOfInterestCategorySchool: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorystadium
declare const MKPointOfInterestCategoryStadium: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorystore
declare const MKPointOfInterestCategoryStore: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorytheater
declare const MKPointOfInterestCategoryTheater: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryuniversity
declare const MKPointOfInterestCategoryUniversity: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategorywinery
declare const MKPointOfInterestCategoryWinery: cocoascript.MKPointOfInterestCategory;
// https://developer.apple.com/documentation/mapkit/mkpointofinterestcategoryzoo
declare const MKPointOfInterestCategoryZoo: cocoascript.MKPointOfInterestCategory;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkdistanceformatterunits
  type MKDistanceFormatterUnits = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkdistanceformatterunitstyle
  type MKDistanceFormatterUnitStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * The visual representation for a circular overlay.
   * https://developer.apple.com/documentation/mapkit/mkcirclerenderer
   */
  interface MKCircleRenderer extends MKOverlayPathRenderer {
    // https://developer.apple.com/documentation/mapkit/mkcirclerenderer/1452547-initwithcircle
    initWithCircle(circle: MKCircle):MKCircleRenderer;
    // https://developer.apple.com/documentation/mapkit/mkcirclerenderer/1452413-circle
    circle(): MKCircle;
    setCircle(): void;
    // https://developer.apple.com/documentation/mapkit/mkcirclerenderer/3573871-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // https://developer.apple.com/documentation/mapkit/mkcirclerenderer/3573870-strokeend
    strokeEnd(): CGFloat;
    setStrokeEnd(): void;
    //
    alloc():MKCircleRenderer;
    //
    init():MKCircleRenderer;
  }
}

declare const MKCircleRenderer: cocoascript.MKCircleRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a single polygon overlay.
   * https://developer.apple.com/documentation/mapkit/mkpolygonrenderer
   */
  interface MKPolygonRenderer extends MKOverlayPathRenderer {
    // https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/1448129-initwithpolygon
    initWithPolygon(polygon: MKPolygon):MKPolygonRenderer;
    // https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/1448132-polygon
    polygon(): MKPolygon;
    setPolygon(): void;
    // https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/3573873-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/3573872-strokeend
    strokeEnd(): CGFloat;
    setStrokeEnd(): void;
    //
    alloc():MKPolygonRenderer;
    //
    init():MKPolygonRenderer;
  }
}

declare const MKPolygonRenderer: cocoascript.MKPolygonRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a multipolygon overlay.
   * https://developer.apple.com/documentation/mapkit/mkmultipolygonrenderer
   */
  interface MKMultiPolygonRenderer extends MKOverlayPathRenderer {
    // https://developer.apple.com/documentation/mapkit/mkmultipolygonrenderer/3088838-initwithmultipolygon
    initWithMultiPolygon(multiPolygon: MKMultiPolygon):MKMultiPolygonRenderer;
    // https://developer.apple.com/documentation/mapkit/mkmultipolygonrenderer/3088839-multipolygon
    multiPolygon(): MKMultiPolygon;
    setMultiPolygon(): void;
    //
    alloc():MKMultiPolygonRenderer;
    //
    init():MKMultiPolygonRenderer;
  }
}

declare const MKMultiPolygonRenderer: cocoascript.MKMultiPolygonRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for a path-based overlay.
   * https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer
   */
  interface MKOverlayPathRenderer extends MKOverlayRenderer {
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1451875-path
    path(): CGPathRef;
    setPath(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452686-createpath
    createPath():void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452076-invalidatepath
    invalidatePath():void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452668-fillcolor
    fillColor(): UIColor;
    setFillColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452175-strokecolor
    strokeColor(): UIColor;
    setStrokeColor(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452441-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452031-linejoin
    lineJoin(): CGLineJoin;
    setLineJoin(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452556-linecap
    lineCap(): CGLineCap;
    setLineCap(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452395-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452363-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452493-linedashpattern
    lineDashPattern(): NSNumber;
    setLineDashPattern(): void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452713-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452281-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452549-strokepath
    strokePath_inContext(path: CGPathRef, context: CGContextRef):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/1452100-fillpath
    fillPath_inContext(path: CGPathRef, context: CGContextRef):void;
    // https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/3088846-shouldrasterize
    shouldRasterize(): BOOL;
    setShouldRasterize(): void;
    //
    alloc():MKOverlayPathRenderer;
    //
    init():MKOverlayPathRenderer;
  }
}

declare const MKOverlayPathRenderer: cocoascript.MKOverlayPathRenderer;
declare namespace cocoascript {
  /**
   * A line-based shape that follows the contours of the Earth to create the shortest path between the specified points.
   * https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline
   */
  interface MKGeodesicPolyline extends MKPolyline {
    // https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline/1452053-polylinewithpoints
    polylineWithPoints_count(points: MKMapPoint, count: NSUInteger):MKGeodesicPolyline;
    // https://developer.apple.com/documentation/mapkit/mkgeodesicpolyline/1452314-polylinewithcoordinates
    polylineWithCoordinates_count(coords: CLLocationCoordinate2D, count: NSUInteger):MKGeodesicPolyline;
    //
    alloc():MKGeodesicPolyline;
    //
    init():MKGeodesicPolyline;
  }
}

declare const MKGeodesicPolyline: cocoascript.MKGeodesicPolyline;
declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object.
   * https://developer.apple.com/documentation/mapkit/mkpolylinerenderer
   */
  interface MKPolylineRenderer extends MKOverlayPathRenderer {
    // https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/1452074-initwithpolyline
    initWithPolyline(polyline: MKPolyline):MKPolylineRenderer;
    // https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/1452465-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/3573875-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/3573874-strokeend
    strokeEnd(): CGFloat;
    setStrokeEnd(): void;
    //
    alloc():MKPolylineRenderer;
    //
    init():MKPolylineRenderer;
  }
}

declare const MKPolylineRenderer: cocoascript.MKPolylineRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for multiple polyline objects.
   * https://developer.apple.com/documentation/mapkit/mkmultipolylinerenderer
   */
  interface MKMultiPolylineRenderer extends MKOverlayPathRenderer {
    // https://developer.apple.com/documentation/mapkit/mkmultipolylinerenderer/3088844-initwithmultipolyline
    initWithMultiPolyline(multiPolyline: MKMultiPolyline):MKMultiPolylineRenderer;
    // https://developer.apple.com/documentation/mapkit/mkmultipolylinerenderer/3088845-multipolyline
    multiPolyline(): MKMultiPolyline;
    setMultiPolyline(): void;
    //
    alloc():MKMultiPolylineRenderer;
    //
    init():MKMultiPolylineRenderer;
  }
}

declare const MKMultiPolylineRenderer: cocoascript.MKMultiPolylineRenderer;
declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object with a gradient.
   * https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer
   */
  interface MKGradientPolylineRenderer extends MKPolylineRenderer {
    // https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/3571235-setcolors
    setColors_atLocations(colors: UIColor, locations: NSNumber):void;
    // https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/3571233-colors
    colors(): UIColor;
    setColors(): void;
    // https://developer.apple.com/documentation/mapkit/mkgradientpolylinerenderer/3571234-locations
    locations(): NSNumber;
    setLocations(): void;
    //
    alloc():MKGradientPolylineRenderer;
    //
    init():MKGradientPolylineRenderer;
  }
}

declare const MKGradientPolylineRenderer: cocoascript.MKGradientPolylineRenderer;
declare namespace cocoascript {
  /**
   * The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.
   * https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer
   */
  interface MKTileOverlayRenderer extends MKOverlayRenderer {
    // https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer/1452303-initwithtileoverlay
    initWithTileOverlay(overlay: MKTileOverlay):MKTileOverlayRenderer;
    // https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer/1452676-reloaddata
    reloadData():void;
    //
    alloc():MKTileOverlayRenderer;
    //
    init():MKTileOverlayRenderer;
  }
}

declare const MKTileOverlayRenderer: cocoascript.MKTileOverlayRenderer;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkdirectionshandler
  type MKDirectionsHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mketahandler
  type MKETAHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/mapkit/mkdirectionstransporttype
  type MKDirectionsTransportType = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/mapkit/mkfeaturedisplaypriorityrequired
declare const MKFeatureDisplayPriorityRequired: cocoascript.MKFeatureDisplayPriority;
// https://developer.apple.com/documentation/mapkit/mkfeaturedisplayprioritydefaulthigh
declare const MKFeatureDisplayPriorityDefaultHigh: cocoascript.MKFeatureDisplayPriority;
// https://developer.apple.com/documentation/mapkit/mkannotationviewzprioritydefaultunselected
declare const MKAnnotationViewZPriorityDefaultUnselected: cocoascript.MKAnnotationViewZPriority;
// https://developer.apple.com/documentation/mapkit/mkannotationviewzprioritydefaultselected
declare const MKAnnotationViewZPriorityDefaultSelected: cocoascript.MKAnnotationViewZPriority;
// https://developer.apple.com/documentation/mapkit/mkannotationviewzprioritymax
declare const MKAnnotationViewZPriorityMax: cocoascript.MKAnnotationViewZPriority;
// https://developer.apple.com/documentation/mapkit/mkannotationviewzprioritymin
declare const MKAnnotationViewZPriorityMin: cocoascript.MKAnnotationViewZPriority;
declare namespace cocoascript {
  interface MKTileOverlayPath {
  }
}
