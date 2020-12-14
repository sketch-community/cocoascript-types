declare namespace cocoascript {
  /**
   * An embeddable map interface, similar to the one provided by the Maps application.
   * doc://com.apple.documentation/documentation/mapkit/mkmapview
   */
  interface MKMapView extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452115-delegate
    delegate(): MKMapViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452742-maptype
    mapType(): MKMapType;
    setMapType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452577-zoomenabled
    zoomEnabled(): BOOL;
    setZoomEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451998-scrollenabled
    scrollEnabled(): BOOL;
    setScrollEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452265-pitchenabled
    pitchEnabled(): BOOL;
    setPitchEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452274-rotateenabled
    rotateEnabled(): BOOL;
    setRotateEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452709-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452768-setregion
    setRegion_animated(region: MKCoordinateRegion, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451901-centercoordinate
    centerCoordinate(): CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451976-setcentercoordinate
    setCenterCoordinate_animated(coordinate: CLLocationCoordinate2D, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452309-showannotations
    showAnnotations_animated(annotations: MKAnnotation, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452732-visiblemaprect
    visibleMapRect(): MKMapRect;
    setVisibleMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452658-setvisiblemaprect
    setVisibleMapRect_animated(mapRect: MKMapRect, animate: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452461-setvisiblemaprect
    setVisibleMapRect_edgePadding_animated(mapRect: MKMapRect, insets: UIEdgeInsets, animate: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143418-setcameraboundary
    setCameraBoundary_animated(cameraBoundary: MKMapCameraBoundary, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143416-cameraboundary
    cameraBoundary(): MKMapCameraBoundary;
    setCameraBoundary(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3114302-setcamerazoomrange
    setCameraZoomRange_animated(cameraZoomRange: MKMapCameraZoomRange, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3114301-camerazoomrange
    cameraZoomRange(): MKMapCameraZoomRange;
    setCameraZoomRange(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452476-setcamera
    setCamera_animated(camera: MKMapCamera, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452277-camera
    camera(): MKMapCamera;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3143417-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452483-showsbuildings
    showsBuildings(): BOOL;
    setShowsBuildings(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451879-showscompass
    showsCompass(): BOOL;
    setShowsCompass(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451958-showszoomcontrols
    showsZoomControls(): BOOL;
    setShowsZoomControls(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452343-showsscale
    showsScale(): BOOL;
    setShowsScale(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452433-showstraffic
    showsTraffic(): BOOL;
    setShowsTraffic(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452102-showspointsofinterest
    showsPointsOfInterest(): BOOL;
    setShowsPointsOfInterest(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/3567212-showspitchcontrol
    showsPitchControl(): BOOL;
    setShowsPitchControl(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452682-showsuserlocation
    showsUserLocation(): BOOL;
    setShowsUserLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452040-userlocationvisible
    userLocationVisible(): BOOL;
    setUserLocationVisible(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452459-userlocation
    userLocation(): MKUserLocation;
    setUserLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616208-usertrackingmode
    userTrackingMode(): MKUserTrackingMode;
    setUserTrackingMode(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616205-setusertrackingmode
    setUserTrackingMode_animated(mode: MKUserTrackingMode, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452593-annotations
    annotations(): MKAnnotation;
    setAnnotations(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452069-addannotation
    addAnnotation(annotation: MKAnnotation):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451889-addannotations
    addAnnotations(annotations: MKAnnotation):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452409-removeannotation
    removeAnnotation(annotation: MKAnnotation):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452130-removeannotations
    removeAnnotations(annotations: MKAnnotation):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452279-annotationsinmaprect
    annotationsInMapRect(mapRect: MKMapRect):MKAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452717-annotationvisiblerect
    annotationVisibleRect(): CGRect;
    setAnnotationVisibleRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452570-selectedannotations
    selectedAnnotations(): MKAnnotation;
    setSelectedAnnotations(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451950-selectannotation
    selectAnnotation_animated(annotation: MKAnnotation, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451988-deselectannotation
    deselectAnnotation_animated(annotation: MKAnnotation, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/2887124-registerclass
    registerClass_forAnnotationViewWithReuseIdentifier(viewClass: Class, identifier: string | NSString):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/2887123-dequeuereusableannotationviewwit
    dequeueReusableAnnotationViewWithIdentifier_forAnnotation(identifier: string | NSString, annotation: MKAnnotation):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452672-dequeuereusableannotationviewwit
    dequeueReusableAnnotationViewWithIdentifier(identifier: string | NSString):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452512-viewforannotation
    viewForAnnotation(annotation: MKAnnotation):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452784-overlays
    overlays(): MKOverlay;
    setOverlays(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452757-overlaysinlevel
    overlaysInLevel(level: MKOverlayLevel):MKOverlay;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452464-rendererforoverlay
    rendererForOverlay(overlay: MKOverlay):MKOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1616201-viewforoverlay
    viewForOverlay(overlay: MKOverlay):MKOverlayView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452635-addoverlay
    addOverlay_level(overlay: MKOverlay, level: MKOverlayLevel):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452518-addoverlays
    addOverlays_level(overlays: MKOverlay, level: MKOverlayLevel):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451964-addoverlay
    addOverlay(overlay: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452335-addoverlays
    addOverlays(overlays: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452723-insertoverlay
    insertOverlay_atIndex_level(overlay: MKOverlay, index: NSUInteger, level: MKOverlayLevel):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452249-insertoverlay
    insertOverlay_atIndex(overlay: MKOverlay, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452427-insertoverlay
    insertOverlay_aboveOverlay(overlay: MKOverlay, sibling: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452526-insertoverlay
    insertOverlay_belowOverlay(overlay: MKOverlay, sibling: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452491-exchangeoverlay
    exchangeOverlay_withOverlay(overlay1: MKOverlay, overlay2: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452575-exchangeoverlayatindex
    exchangeOverlayAtIndex_withOverlayAtIndex(index1: NSUInteger, index2: NSUInteger):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1451921-removeoverlay
    removeOverlay(overlay: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452719-removeoverlays
    removeOverlays(overlays: MKOverlay):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452694-convertcoordinate
    convertCoordinate_toPointToView(coordinate: CLLocationCoordinate2D, view: UIView):CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452503-convertpoint
    convertPoint_toCoordinateFromView(point: CGPoint, view: UIView):CLLocationCoordinate2D;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452055-convertregion
    convertRegion_toRectToView(region: MKCoordinateRegion, view: UIView):CGRect;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452305-convertrect
    convertRect_toRegionFromView(rect: CGRect, view: UIView):MKCoordinateRegion;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452371-regionthatfits
    regionThatFits(region: MKCoordinateRegion):MKCoordinateRegion;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452169-maprectthatfits
    mapRectThatFits(mapRect: MKMapRect):MKMapRect;
    // doc://com.apple.documentation/documentation/mapkit/mkmapview/1452625-maprectthatfits
    mapRectThatFits_edgePadding(mapRect: MKMapRect, insets: UIEdgeInsets):MKMapRect;
    //
    alloc():MKMapView;
    //
    init():MKMapView;
  }
}

declare const MKMapView: cocoascript.MKMapView;
// doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier
declare const MKMapViewDefaultAnnotationViewReuseIdentifier: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mkmapviewdefaultclusterannotationviewreuseidentifier
declare const MKMapViewDefaultClusterAnnotationViewReuseIdentifier: string | NSString;
declare namespace cocoascript {
  /**
   * An interface for associating your content with a specific map location.
   * doc://com.apple.documentation/documentation/mapkit/mkannotation
   */
  interface MKAnnotation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429524-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429528-setcoordinate
    setCoordinate(newCoordinate: CLLocationCoordinate2D):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429522-title
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotation/1429520-subtitle
    subtitle(): string | NSString;
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
    mapView_regionWillChangeAnimated(mapView: MKMapView, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/2998428-mapviewdidchangevisibleregion
    mapViewDidChangeVisibleRegion(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452345-mapview
    mapView_regionDidChangeAnimated(mapView: MKMapView, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452744-mapviewwillstartloadingmap
    mapViewWillStartLoadingMap(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452291-mapviewdidfinishloadingmap
    mapViewDidFinishLoadingMap(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452327-mapviewdidfailloadingmap
    mapViewDidFailLoadingMap_withError(mapView: MKMapView, error: NSError):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1451970-mapviewwillstartrenderingmap
    mapViewWillStartRenderingMap(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1451897-mapviewdidfinishrenderingmap
    mapViewDidFinishRenderingMap_fullyRendered(mapView: MKMapView, fullyRendered: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452171-mapviewwillstartlocatinguser
    mapViewWillStartLocatingUser(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452715-mapviewdidstoplocatinguser
    mapViewDidStopLocatingUser(mapView: MKMapView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452086-mapview
    mapView_didUpdateUserLocation(mapView: MKMapView, userLocation: MKUserLocation):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452211-mapview
    mapView_didFailToLocateUserWithError(mapView: MKMapView, error: NSError):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616202-mapview
    mapView_didChangeUserTrackingMode_animated(mapView: MKMapView, mode: MKUserTrackingMode, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452045-mapview
    mapView_viewForAnnotation(mapView: MKMapView, annotation: MKAnnotation):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452311-mapview
    mapView_didAddAnnotationViews(mapView: MKMapView, views: MKAnnotationView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616211-mapview
    mapView_annotationView_calloutAccessoryControlTapped(mapView: MKMapView, view: MKAnnotationView, control: UIControl):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/2867923-mapview
    mapView_clusterAnnotationForMemberAnnotations(mapView: MKMapView, memberAnnotations: MKAnnotation):MKClusterAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452229-mapview
    mapView_annotationView_didChangeDragState_fromOldState(mapView: MKMapView, view: MKAnnotationView, newState: MKAnnotationViewDragState, oldState: MKAnnotationViewDragState):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452393-mapview
    mapView_didSelectAnnotationView(mapView: MKMapView, view: MKAnnotationView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452707-mapview
    mapView_didDeselectAnnotationView(mapView: MKMapView, view: MKAnnotationView):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452203-mapview
    mapView_rendererForOverlay(mapView: MKMapView, overlay: MKOverlay):MKOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1452609-mapview
    mapView_didAddOverlayRenderers(mapView: MKMapView, renderers: MKOverlayRenderer):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616210-mapview
    mapView_viewForOverlay(mapView: MKMapView, overlay: MKOverlay):MKOverlayView;
    // doc://com.apple.documentation/documentation/mapkit/mkmapviewdelegate/1616206-mapview
    mapView_didAddOverlayViews(mapView: MKMapView, overlayViews: NSArray):void;
  }
}
declare namespace cocoascript {
  /**
   * Defines the methods for receiving search completion data.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate
   */
  interface MKLocalSearchCompleterDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1452209-completerdidupdateresults
    completerDidUpdateResults(completer: MKLocalSearchCompleter):void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1451885-completer
    completer_didFailWithError(completer: MKLocalSearchCompleter, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * Defines the interface for receiving messages from an
   * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate
   */
  interface MKReverseGeocoderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618476-reversegeocoder
    reverseGeocoder_didFindPlacemark(geocoder: MKReverseGeocoder, placemark: MKPlacemark):void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoderdelegate/1618473-reversegeocoder
    reverseGeocoder_didFailWithError(geocoder: MKReverseGeocoder, error: NSError):void;
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
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411085-camera
    camera():MKMapCamera;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411092-cameralookingatcentercoordinate
    cameraLookingAtCenterCoordinate_fromEyeCoordinate_eyeAltitude(centerCoordinate: CLLocationCoordinate2D, eyeCoordinate: CLLocationCoordinate2D, eyeAltitude: CLLocationDistance):MKMapCamera;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411079-cameralookingatcentercoordinate
    cameraLookingAtCenterCoordinate_fromDistance_pitch_heading(centerCoordinate: CLLocationCoordinate2D, distance: CLLocationDistance, pitch: CGFloat, heading: CLLocationDirection):MKMapCamera;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411081-centercoordinate
    centerCoordinate(): CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411087-heading
    heading(): CLLocationDirection;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/3114295-centercoordinatedistance
    centerCoordinateDistance(): CLLocationDistance;
    setCenterCoordinateDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411083-pitch
    pitch(): CGFloat;
    setPitch(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411078-altitude
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
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest
   */
  interface MKLocalSearchRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235755-init
    init():MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452301-initwithcompletion
    initWithCompletion(completion: MKLocalSearchCompletion):MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235756-initwithnaturallanguagequery
    initWithNaturalLanguageQuery(naturalLanguageQuery: string | NSString):MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235757-initwithnaturallanguagequery
    initWithNaturalLanguageQuery_region(naturalLanguageQuery: string | NSString, region: MKCoordinateRegion):MKLocalSearchRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452353-naturallanguagequery
    naturalLanguageQuery(): string | NSString;
    setNaturalLanguageQuery(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1451919-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143410-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143411-resulttypes
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
   * The options to use when capturing map-based imagery.
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions
   */
  interface MKMapSnapshotOptions extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452323-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452727-maprect
    mapRect(): MKMapRect;
    setMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452082-camera
    camera(): MKMapCamera;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452341-maptype
    mapType(): MKMapType;
    setMapType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452191-showsbuildings
    showsBuildings(): BOOL;
    setShowsBuildings(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452316-showspointsofinterest
    showsPointsOfInterest(): BOOL;
    setShowsPointsOfInterest(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3172734-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3152864-traitcollection
    traitCollection(): UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452485-size
    size(): CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/2981023-appearance
    appearance(): NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1615960-scale
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
   * doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange
   */
  interface MKMapCameraZoomRange extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114298-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance_maxCenterCoordinateDistance(minDistance: CLLocationDistance, maxDistance: CLLocationDistance):MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237246-initwithmincentercoordinatedista
    initWithMinCenterCoordinateDistance(minDistance: CLLocationDistance):MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237245-initwithmaxcentercoordinatedista
    initWithMaxCenterCoordinateDistance(maxDistance: CLLocationDistance):MKMapCameraZoomRange;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114299-maxcentercoordinatedistance
    maxCenterCoordinateDistance(): CLLocationDistance;
    setMaxCenterCoordinateDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114300-mincentercoordinatedistance
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
   * doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary
   */
  interface MKMapCameraBoundary extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141908-initwithcoder
    initWithCoder(coder: NSCoder):MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141909-initwithcoordinateregion
    initWithCoordinateRegion(region: MKCoordinateRegion):MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141910-initwithmaprect
    initWithMapRect(mapRect: MKMapRect):MKMapCameraBoundary;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141911-maprect
    mapRect(): MKMapRect;
    setMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141912-region
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
   * doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter
   */
  interface MKPointOfInterestFilter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143464-filterexcludingallcategories
    filterExcludingAllCategories(): MKPointOfInterestFilter;
    setFilterExcludingAllCategories(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143465-filterincludingallcategories
    filterIncludingAllCategories(): MKPointOfInterestFilter;
    setFilterIncludingAllCategories(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143467-initexcludingcategories
    initExcludingCategories(categories: MKPointOfInterestCategory):MKPointOfInterestFilter;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143468-initincludingcategories
    initIncludingCategories(categories: MKPointOfInterestCategory):MKPointOfInterestFilter;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143463-excludescategory
    excludesCategory(category: MKPointOfInterestCategory):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143466-includescategory
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
   * doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest
   */
  interface MKLocalPointsOfInterestRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564412-initwithcentercoordinate
    initWithCenterCoordinate_radius(coordinate: CLLocationCoordinate2D, radius: CLLocationDistance):MKLocalPointsOfInterestRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564413-initwithcoordinateregion
    initWithCoordinateRegion(region: MKCoordinateRegion):MKLocalPointsOfInterestRequest;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564416-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564411-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564415-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564414-pointofinterestfilter
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
   * doc://com.apple.documentation/documentation/mapkit/mkmapitem
   */
  interface MKMapItem extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452002-mapitemforcurrentlocation
    mapItemForCurrentLocation():MKMapItem;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452285-initwithplacemark
    initWithPlacemark(placemark: MKPlacemark):MKMapItem;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452134-placemark
    placemark(): MKPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3143415-pointofinterestcategory
    pointOfInterestCategory(): MKPointOfInterestCategory;
    setPointOfInterestCategory(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452319-iscurrentlocation
    isCurrentLocation(): BOOL;
    setIsCurrentLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452339-name
    name(): string | NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452088-phonenumber
    phoneNumber(): string | NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452746-url
    url(): NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452431-timezone
    timeZone(): NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452207-openmapswithitems
    openMapsWithItems_launchOptions(mapItems: MKMapItem, launchOptions: MKMapItem):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3395860-openmapswithitems
    openMapsWithItems_launchOptions_fromScene_completionHandler(mapItems: MKMapItem, launchOptions: MKMapItem, scene: UIScene, completion: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/1452239-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions(launchOptions: MKMapItem):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkmapitem/3395859-openinmapswithlaunchoptions
    openInMapsWithLaunchOptions_fromScene_completionHandler(launchOptions: MKMapItem, scene: UIScene, completion: BOOL):void;
    //
    alloc():MKMapItem;
    //
    init():MKMapItem;
  }
}

declare const MKMapItem: cocoascript.MKMapItem;
// doc://com.apple.documentation/documentation/mapkit/mkmapitemtypeidentifier
declare const MKMapItemTypeIdentifier: string | NSString;
declare namespace cocoascript {
  /**
   * The visual representation of one of your annotation objects.
   * doc://com.apple.documentation/documentation/mapkit/mkannotationview
   */
  interface MKAnnotationView extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452779-initwithannotation
    initWithAnnotation_reuseIdentifier(annotation: MKAnnotation, reuseIdentifier: string | NSString):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1827527-initwithcoder
    initWithCoder(aDecoder: NSCoder):MKAnnotationView;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1451907-prepareforreuse
    prepareForReuse():void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2921514-preparefordisplay
    prepareForDisplay():void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867298-displaypriority
    displayPriority(): MKFeatureDisplayPriority;
    setDisplayPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/3547913-zpriority
    zPriority(): MKAnnotationViewZPriority;
    setZPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/3547912-selectedzpriority
    selectedZPriority(): MKAnnotationViewZPriority;
    setSelectedZPriority(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452411-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452094-image
    image(): UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452047-highlighted
    highlighted(): BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452613-annotation
    annotation(): MKAnnotation;
    setAnnotation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452144-centeroffset
    centerOffset(): CGPoint;
    setCenterOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452771-calloutoffset
    calloutOffset(): CGPoint;
    setCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452060-reuseidentifier
    reuseIdentifier(): string | NSString;
    setReuseIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452381-setselected
    setSelected_animated(selected: BOOL, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452777-selected
    selected(): BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452451-canshowcallout
    canShowCallout(): BOOL;
    setCanShowCallout(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452423-leftcalloutaccessoryview
    leftCalloutAccessoryView(): UIView;
    setLeftCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452233-rightcalloutaccessoryview
    rightCalloutAccessoryView(): UIView;
    setRightCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452543-detailcalloutaccessoryview
    detailCalloutAccessoryView(): UIView;
    setDetailCalloutAccessoryView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452545-leftcalloutoffset
    leftCalloutOffset(): CGPoint;
    setLeftCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452036-rightcalloutoffset
    rightCalloutOffset(): CGPoint;
    setRightCalloutOffset(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452401-draggable
    draggable(): BOOL;
    setDraggable(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1452639-setdragstate
    setDragState_animated(newDragState: MKAnnotationViewDragState, animated: BOOL):void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/1451941-dragstate
    dragState(): MKAnnotationViewDragState;
    setDragState(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2873315-collisionmode
    collisionMode(): MKAnnotationViewCollisionMode;
    setCollisionMode(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867297-clusteringidentifier
    clusteringIdentifier(): string | NSString;
    setClusteringIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkannotationview/2867294-clusterannotationview
    clusterAnnotationView(): MKAnnotationView;
    setClusterAnnotationView(): void;
    //
    alloc():MKAnnotationView;
    //
    init():MKAnnotationView;
  }
}

declare const MKAnnotationView: cocoascript.MKAnnotationView;
// doc://com.apple.documentation/documentation/mapkit/mkannotationcalloutinfodidchangenotification
declare const MKAnnotationCalloutInfoDidChangeNotification: string | NSString;
declare namespace cocoascript {
  /**
   * An annotation view that displays a balloon-shaped marker at the designated location.
   * doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview
   */
  interface MKMarkerAnnotationView extends MKAnnotationView {
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873822-markertintcolor
    markerTintColor(): UIColor;
    setMarkerTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873817-glyphtext
    glyphText(): string | NSString;
    setGlyphText(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873823-glyphimage
    glyphImage(): UIImage;
    setGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873824-glyphtintcolor
    glyphTintColor(): UIColor;
    setGlyphTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873815-selectedglyphimage
    selectedGlyphImage(): UIImage;
    setSelectedGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873816-titlevisibility
    titleVisibility(): MKFeatureVisibility;
    setTitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873813-subtitlevisibility
    subtitleVisibility(): MKFeatureVisibility;
    setSubtitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873821-animateswhenadded
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
   * doc://com.apple.documentation/documentation/mapkit/mkpinannotationview
   */
  interface MKPinAnnotationView extends MKAnnotationView {
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1451990-redpincolor
    redPinColor():UIColor;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452568-greenpincolor
    greenPinColor():UIColor;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452110-purplepincolor
    purplePinColor():UIColor;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452042-pintintcolor
    pinTintColor(): UIColor;
    setPinTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452654-animatesdrop
    animatesDrop(): BOOL;
    setAnimatesDrop(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452530-pincolor
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
   * doc://com.apple.documentation/documentation/mapkit/mkoverlay
   */
  interface MKOverlay extends MKAnnotation {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452113-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452791-boundingmaprect
    boundingMapRect(): MKMapRect;
    setBoundingMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452138-intersectsmaprect
    intersectsMapRect(mapRect: MKMapRect):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452399-canreplacemapcontent
    canReplaceMapContent():BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The shared infrastructure used to draw overlays on the map surface.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer
   */
  interface MKOverlayRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451915-initwithoverlay
    initWithOverlay(overlay: MKOverlay):MKOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452307-overlay
    overlay(): MKOverlay;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452699-alpha
    alpha(): CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451931-contentscalefactor
    contentScaleFactor(): CGFloat;
    setContentScaleFactor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451899-pointformappoint
    pointForMapPoint(mapPoint: MKMapPoint):CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452670-mappointforpoint
    mapPointForPoint(point: CGPoint):MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452738-rectformaprect
    rectForMapRect(mapRect: MKMapRect):CGRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452680-maprectforrect
    mapRectForRect(rect: CGRect):MKMapRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1451891-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452184-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: MKMapRect, zoomScale: MKZoomScale, context: CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452104-setneedsdisplay
    setNeedsDisplay():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452564-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: MKMapRect):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayrenderer/1452793-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):void;
    //
    alloc():MKOverlayRenderer;
    //
    init():MKOverlayRenderer;
  }
}

declare const MKOverlayRenderer: cocoascript.MKOverlayRenderer;
// doc://com.apple.documentation/documentation/mapkit/1452156-mkroadwidthatzoomscale
declare const MKRoadWidthAtZoomScale: MKZoomScale;
declare namespace cocoascript {
  /**
   * Defines the basic behavior associated with all overlay views.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlayview
   */
  interface MKOverlayView extends UIView {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613884-initwithoverlay
    initWithOverlay(overlay: MKOverlay):MKOverlayView;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613872-overlay
    overlay(): MKOverlay;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613874-pointformappoint
    pointForMapPoint(mapPoint: MKMapPoint):CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613878-mappointforpoint
    mapPointForPoint(point: CGPoint):MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613870-rectformaprect
    rectForMapRect(mapRect: MKMapRect):CGRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613882-maprectforrect
    mapRectForRect(rect: CGRect):MKMapRect;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613864-candrawmaprect
    canDrawMapRect_zoomScale(mapRect: MKMapRect, zoomScale: MKZoomScale):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613868-drawmaprect
    drawMapRect_zoomScale_inContext(mapRect: MKMapRect, zoomScale: MKZoomScale, context: CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613866-setneedsdisplayinmaprect
    setNeedsDisplayInMapRect(mapRect: MKMapRect):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlayview/1613876-setneedsdisplayinmaprect
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
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkshape/1437592-subtitle
    subtitle(): string | NSString;
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
   * doc://com.apple.documentation/documentation/mapkit/mkuserlocation
   */
  interface MKUserLocation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452415-location
    location(): CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452084-updating
    updating(): BOOL;
    setUpdating(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452721-heading
    heading(): CLHeading;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452058-title
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkuserlocation/1452562-subtitle
    subtitle(): string | NSString;
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
   * doc://com.apple.documentation/documentation/mapkit/mkplacemark
   */
  interface MKPlacemark extends CLPlacemark {
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172460-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/2172461-initwithcoordinate
    initWithCoordinate_postalAddress(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress):MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451895-initwithcoordinate
    initWithCoordinate_addressDictionary(coordinate: CLLocationCoordinate2D, addressDictionary: MKPlacemark):MKPlacemark;
    // doc://com.apple.documentation/documentation/mapkit/mkplacemark/1451952-countrycode
    countryCode(): string | NSString;
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
   * doc://com.apple.documentation/documentation/mapkit/mkclusterannotation
   */
  interface MKClusterAnnotation extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866567-initwithmemberannotations
    initWithMemberAnnotations(memberAnnotations: MKAnnotation):MKClusterAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866569-title
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866570-subtitle
    subtitle(): string | NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkclusterannotation/2866568-memberannotations
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
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter
   */
  interface MKLocalSearchCompleter extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452106-delegate
    delegate(): MKLocalSearchCompleterDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452555-queryfragment
    queryFragment(): string | NSString;
    setQueryFragment(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1451923-region
    region(): MKCoordinateRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143405-resulttypes
    resultTypes(): MKLocalSearchCompleterResultType;
    setResultTypes(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143404-pointofinterestfilter
    pointOfInterestFilter(): MKPointOfInterestFilter;
    setPointOfInterestFilter(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452150-filtertype
    filterType(): MKSearchCompletionFilterType;
    setFilterType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452337-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452272-searching
    searching(): BOOL;
    setSearching(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452295-results
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
   * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder
   */
  interface MKReverseGeocoder extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618471-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKReverseGeocoder;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618478-delegate
    delegate(): MKReverseGeocoderDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618477-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618481-placemark
    placemark(): MKPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618480-start
    start():void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618474-querying
    querying(): BOOL;
    setQuerying(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618479-cancel
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
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature
   */
  interface MKGeoJSONFeature extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113996-geometry
    geometry(): MKGeoJSONObject;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113997-identifier
    identifier(): string | NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113998-properties
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
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder
   */
  interface MKGeoJSONDecoder extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder/3113994-geojsonobjectswithdata
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
   * doc://com.apple.documentation/documentation/mapkit/mkcompassbutton
   */
  interface MKCompassButton extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkcompassbutton/2890261-compassbuttonwithmapview
    compassButtonWithMapView(mapView: MKMapView):MKCompassButton;
    // doc://com.apple.documentation/documentation/mapkit/mkcompassbutton/2890264-mapview
    mapView(): MKMapView;
    setMapView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcompassbutton/2890262-compassvisibility
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
   * doc://com.apple.documentation/documentation/mapkit/mkscaleview
   */
  interface MKScaleView extends UIView {
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890255-scaleviewwithmapview
    scaleViewWithMapView(mapView: MKMapView):MKScaleView;
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890257-mapview
    mapView(): MKMapView;
    setMapView(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890254-scalevisibility
    scaleVisibility(): MKFeatureVisibility;
    setScaleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkscaleview/2890258-legendalignment
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
   * doc://com.apple.documentation/documentation/mapkit/mkzoomcontrol
   */
  interface MKZoomControl extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkzoomcontrol/3567218-zoomcontrolwithmapview
    zoomControlWithMapView(mapView: MKMapView):MKZoomControl;
    // doc://com.apple.documentation/documentation/mapkit/mkzoomcontrol/3567217-mapview
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
   * doc://com.apple.documentation/documentation/mapkit/mkpitchcontrol
   */
  interface MKPitchControl extends NSView {
    // doc://com.apple.documentation/documentation/mapkit/mkpitchcontrol/3567215-pitchcontrolwithmapview
    pitchControlWithMapView(mapView: MKMapView):MKPitchControl;
    // doc://com.apple.documentation/documentation/mapkit/mkpitchcontrol/3567214-mapview
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
   * doc://com.apple.documentation/documentation/mapkit/mkusertrackingbutton
   */
  interface MKUserTrackingButton extends UIView {
    // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbutton/2867281-usertrackingbuttonwithmapview
    userTrackingButtonWithMapView(mapView: MKMapView):MKUserTrackingButton;
    // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbutton/2867283-mapview
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
   * doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem
   */
  interface MKUserTrackingBarButtonItem extends UIBarButtonItem {
    // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem/1620146-initwithmapview
    initWithMapView(mapView: MKMapView):MKUserTrackingBarButtonItem;
    // doc://com.apple.documentation/documentation/mapkit/mkusertrackingbarbuttonitem/1620161-mapview
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
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearch
   */
  interface MKLocalSearch extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452759-initwithrequest
    initWithRequest(request: MKLocalSearchRequest):MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/3564418-initwithpointsofinterestrequest
    initWithPointsOfInterestRequest(request: MKLocalPointsOfInterestRequest):MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452652-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: MKLocalSearchCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452349-searching
    searching(): BOOL;
    setSearching(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452160-cancel
    cancel():void;
    //
    alloc():MKLocalSearch;
    //
    init():MKLocalSearch;
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
    initWithOptions(options: MKMapSnapshotOptions):MKMapSnapshotter;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452479-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452419-startwithqueue
    startWithQueue_completionHandler(queue: dispatch_queue_t, completionHandler: MKMapSnapshotCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1452388-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotter/1451960-loading
    loading(): BOOL;
    setLoading(): void;
    //
    alloc():MKMapSnapshotter;
    //
    init():MKMapSnapshotter;
  }
}

declare const MKMapSnapshotter: cocoascript.MKMapSnapshotter;
// doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomdefault
declare const MKMapCameraZoomDefault: CLLocationDistance;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategory
  type MKPointOfInterestCategory = cocoascript.NSString;
}
declare namespace cocoascript {
  interface MKCoordinateRegion {
  }
}
// doc://com.apple.documentation/documentation/mapkit/mkpointsofinterestrequestmaxradius
declare const MKPointsOfInterestRequestMaxRadius: CLLocationDistance;
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
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452566-subtitle
    subtitle(): string | NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1451935-titlehighlightranges
    titleHighlightRanges(): NSValue;
    setTitleHighlightRanges(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452489-subtitlehighlightranges
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
   * doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter
   */
  interface MKDistanceFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1451994-stringfromdistance
    stringFromDistance(distance: CLLocationDistance):string | NSString;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452766-distancefromstring
    distanceFromString(distance: string | NSString):CLLocationDistance;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452235-locale
    locale(): NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452775-units
    units(): MKDistanceFormatterUnits;
    setUnits(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452128-unitstyle
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
   * doc://com.apple.documentation/documentation/mapkit/mkdirections
   */
  interface MKDirections extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452197-initwithrequest
    initWithRequest(request: MKDirectionsRequest):MKDirections;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452078-calculatedirectionswithcompletio
    calculateDirectionsWithCompletionHandler(completionHandler: MKDirectionsHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452736-calculateetawithcompletionhandle
    calculateETAWithCompletionHandler(completionHandler: MKETAHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452656-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452217-calculating
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
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest
   */
  interface MKDirectionsRequest extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433150-isdirectionsrequesturl
    isDirectionsRequestURL(url: NSURL):BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433158-initwithcontentsofurl
    initWithContentsOfURL(url: NSURL):MKDirectionsRequest;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433144-source
    source(): MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433156-setsource
    setSource(source: MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433146-destination
    destination(): MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433157-setdestination
    setDestination(destination: MKMapItem):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433152-transporttype
    transportType(): MKDirectionsTransportType;
    setTransportType(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433154-requestsalternateroutes
    requestsAlternateRoutes(): BOOL;
    setRequestsAlternateRoutes(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433155-departuredate
    departureDate(): NSDate;
    setDepartureDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsrequest/1433148-arrivaldate
    arrivalDate(): NSDate;
    setArrivalDate(): void;
    //
    alloc():MKDirectionsRequest;
    //
    init():MKDirectionsRequest;
  }
}

declare const MKDirectionsRequest: cocoascript.MKDirectionsRequest;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionscamerakey
declare const MKLaunchOptionsCameraKey: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedefault
declare const MKLaunchOptionsDirectionsModeDefault: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodedriving
declare const MKLaunchOptionsDirectionsModeDriving: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodekey
declare const MKLaunchOptionsDirectionsModeKey: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodetransit
declare const MKLaunchOptionsDirectionsModeTransit: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsdirectionsmodewalking
declare const MKLaunchOptionsDirectionsModeWalking: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapcenterkey
declare const MKLaunchOptionsMapCenterKey: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmapspankey
declare const MKLaunchOptionsMapSpanKey: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsmaptypekey
declare const MKLaunchOptionsMapTypeKey: string | NSString;
// doc://com.apple.documentation/documentation/mapkit/mklaunchoptionsshowstraffickey
declare const MKLaunchOptionsShowsTrafficKey: string | NSString;
declare namespace cocoascript {
  /**
   * The route information returned by Apple servers in response to one of your requests for directions.
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse
   */
  interface MKDirectionsResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452261-source
    source(): MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1451981-destination
    destination(): MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452071-routes
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
   * doc://com.apple.documentation/documentation/mapkit/mketaresponse
   */
  interface MKETAResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451947-source
    source(): MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452611-destination
    destination(): MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452551-expectedtraveltime
    expectedTravelTime(): NSTimeInterval;
    setExpectedTravelTime(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452644-expecteddeparturedate
    expectedDepartureDate(): NSDate;
    setExpectedDepartureDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1451881-expectedarrivaldate
    expectedArrivalDate(): NSDate;
    setExpectedArrivalDate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452164-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mketaresponse/1452616-transporttype
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
   * doc://com.apple.documentation/documentation/mapkit/mkroute
   */
  interface MKRoute extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1451943-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452173-steps
    steps(): MKRouteStep;
    setSteps(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452684-name
    name(): string | NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452359-advisorynotices
    advisoryNotices(): string | NSString;
    setAdvisoryNotices(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452405-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452297-expectedtraveltime
    expectedTravelTime(): NSTimeInterval;
    setExpectedTravelTime(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452674-transporttype
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
   * doc://com.apple.documentation/documentation/mapkit/mkroutestep
   */
  interface MKRouteStep extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452223-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452447-instructions
    instructions(): string | NSString;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452347-notice
    notice(): string | NSString;
    setNotice(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452004-distance
    distance(): CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452051-transporttype
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
   * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot
   */
  interface MKMapSnapshot extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/1452701-image
    image(): UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/3013837-appearance
    appearance(): NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/1452523-pointforcoordinate
    pointForCoordinate(coordinate: CLLocationCoordinate2D):CGPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshot/3152226-traitcollection
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
declare const MKFeatureDisplayPriorityDefaultLow: MKFeatureDisplayPriority;
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
    init():MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235759-initwithcoordinate
    initWithCoordinate(coordinate: CLLocationCoordinate2D):MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/3235760-initwithcoordinate
    initWithCoordinate_title_subtitle(coordinate: CLLocationCoordinate2D, title: string | NSString, subtitle: string | NSString):MKPointAnnotation;
    // doc://com.apple.documentation/documentation/mapkit/mkpointannotation/1452620-coordinate
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
  // doc://com.apple.documentation/documentation/mapkit/mkpinannotationcolor
  type MKPinAnnotationColor = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A circular overlay with a configurable radius and centered on a specific geographic coordinate.
   * doc://com.apple.documentation/documentation/mapkit/mkcircle
   */
  interface MKCircle extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411076-circlewithcentercoordinate
    circleWithCenterCoordinate_radius(coord: CLLocationCoordinate2D, radius: CLLocationDistance):MKCircle;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411072-circlewithmaprect
    circleWithMapRect(mapRect: MKMapRect):MKCircle;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411074-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411067-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411065-boundingmaprect
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
   * doc://com.apple.documentation/documentation/mapkit/mktileoverlay
   */
  interface MKTileOverlay extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452705-initwithurltemplate
    initWithURLTemplate(URLTemplate: string | NSString):MKTileOverlay;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452108-tilesize
    tileSize(): CGSize;
    setTileSize(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452251-geometryflipped
    geometryFlipped(): BOOL;
    setGeometryFlipped(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452199-minimumz
    minimumZ(): NSInteger;
    setMinimumZ(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452660-maximumz
    maximumZ(): NSInteger;
    setMaximumZ(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452604-canreplacemapcontent
    canReplaceMapContent(): BOOL;
    setCanReplaceMapContent(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452256-urltemplate
    URLTemplate(): string | NSString;
    setURLTemplate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452606-urlfortilepath
    URLForTilePath(path: MKTileOverlayPath):NSURL;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452445-loadtileatpath
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolygon
   */
  interface MKPolygon extends MKMultiPoint {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452247-polygonwithpoints
    polygonWithPoints_count(points: MKMapPoint, count: NSUInteger):MKPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1451945-polygonwithpoints
    polygonWithPoints_count_interiorPolygons(points: MKMapPoint, count: NSUInteger, interiorPolygons: MKPolygon):MKPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452497-polygonwithcoordinates
    polygonWithCoordinates_count(coords: CLLocationCoordinate2D, count: NSUInteger):MKPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452532-polygonwithcoordinates
    polygonWithCoordinates_count_interiorPolygons(coords: CLLocationCoordinate2D, count: NSUInteger, interiorPolygons: MKPolygon):MKPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452521-interiorpolygons
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolyline
   */
  interface MKPolyline extends MKMultiPoint {
    // doc://com.apple.documentation/documentation/mapkit/mkpolyline/1452773-polylinewithpoints
    polylineWithPoints_count(points: MKMapPoint, count: NSUInteger):MKPolyline;
    // doc://com.apple.documentation/documentation/mapkit/mkpolyline/1452205-polylinewithcoordinates
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
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolygon
   */
  interface MKMultiPolygon extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088835-initwithpolygons
    initWithPolygons(polygons: MKPolygon):MKMultiPolygon;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088836-polygons
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
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolyline
   */
  interface MKMultiPolyline extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088841-initwithpolylines
    initWithPolylines(polylines: MKPolyline):MKMultiPolyline;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088842-polylines
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
  // doc://com.apple.documentation/documentation/mapkit/mkzoomscale
  type MKZoomScale = cocoascript.CGFloat;
}
// doc://com.apple.documentation/documentation/mapkit/mkmapsizeworld
declare const MKMapSizeWorld: MKMapSize;
// doc://com.apple.documentation/documentation/mapkit/mkmaprectnull
declare const MKMapRectNull: MKMapRect;
// doc://com.apple.documentation/documentation/mapkit/mkmaprectworld
declare const MKMapRectWorld: MKMapRect;
declare namespace cocoascript {
  /**
   * An abstract class that defines the common behavior shared by polygon and polyline overlays.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipoint
   */
  interface MKMultiPoint extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452425-points
    points():MKMapPoint;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452179-pointcount
    pointCount(): NSUInteger;
    setPointCount(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571236-locationatpointindex
    locationAtPointIndex(index: NSUInteger):CGFloat;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571237-locationsatpointindexes
    locationsAtPointIndexes(indexes: NSIndexSet):NSNumber;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1451911-getcoordinates
    getCoordinates_range(coords: CLLocationCoordinate2D, range: NSRange):void;
    //
    alloc():MKMultiPoint;
    //
    init():MKMultiPoint;
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
    alloc():MKUserLocationView;
    //
    init():MKUserLocationView;
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
    initWithCircle(circle: MKCircle):MKCircleRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/1452413-circle
    circle(): MKCircle;
    setCircle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573871-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573870-strokeend
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer
   */
  interface MKPolygonRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/1448129-initwithpolygon
    initWithPolygon(polygon: MKPolygon):MKPolygonRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/1448132-polygon
    polygon(): MKPolygon;
    setPolygon(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/3573873-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonrenderer/3573872-strokeend
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
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer
   */
  interface MKMultiPolygonRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer/3088838-initwithmultipolygon
    initWithMultiPolygon(multiPolygon: MKMultiPolygon):MKMultiPolygonRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolygonrenderer/3088839-multipolygon
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
   * doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer
   */
  interface MKOverlayPathRenderer extends MKOverlayRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1451875-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452686-createpath
    createPath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452076-invalidatepath
    invalidatePath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452668-fillcolor
    fillColor(): UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452175-strokecolor
    strokeColor(): UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452441-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452031-linejoin
    lineJoin(): CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452556-linecap
    lineCap(): CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452395-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452363-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452493-linedashpattern
    lineDashPattern(): NSNumber;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452713-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452281-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452549-strokepath
    strokePath_inContext(path: CGPathRef, context: CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452100-fillpath
    fillPath_inContext(path: CGPathRef, context: CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/3088846-shouldrasterize
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
   * doc://com.apple.documentation/documentation/mapkit/mkgeodesicpolyline
   */
  interface MKGeodesicPolyline extends MKPolyline {
    // doc://com.apple.documentation/documentation/mapkit/mkgeodesicpolyline/1452053-polylinewithpoints
    polylineWithPoints_count(points: MKMapPoint, count: NSUInteger):MKGeodesicPolyline;
    // doc://com.apple.documentation/documentation/mapkit/mkgeodesicpolyline/1452314-polylinewithcoordinates
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer
   */
  interface MKPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452074-initwithpolyline
    initWithPolyline(polyline: MKPolyline):MKPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452465-polyline
    polyline(): MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573875-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573874-strokeend
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
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer
   */
  interface MKMultiPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088844-initwithmultipolyline
    initWithMultiPolyline(multiPolyline: MKMultiPolyline):MKMultiPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088845-multipolyline
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
   * doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer
   */
  interface MKGradientPolylineRenderer extends MKPolylineRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571235-setcolors
    setColors_atLocations(colors: UIColor, locations: NSNumber):void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571233-colors
    colors(): UIColor;
    setColors(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571234-locations
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
   * doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer
   */
  interface MKTileOverlayRenderer extends MKOverlayRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452303-initwithtileoverlay
    initWithTileOverlay(overlay: MKTileOverlay):MKTileOverlayRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452676-reloaddata
    reloadData():void;
    //
    alloc():MKTileOverlayRenderer;
    //
    init():MKTileOverlayRenderer;
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
    fillColor(): UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617209-strokecolor
    strokeColor(): UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617218-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617206-linejoin
    lineJoin(): CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617212-linecap
    lineCap(): CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617219-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617211-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617210-linedashpattern
    lineDashPattern(): NSArray;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617208-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617216-createpath
    createPath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617217-invalidatepath
    invalidatePath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617205-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617207-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: CGContextRef, zoomScale: MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617214-strokepath
    strokePath_inContext(path: CGPathRef, context: CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617213-fillpath
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
   * doc://com.apple.documentation/documentation/mapkit/mkcircleview
   */
  interface MKCircleView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623524-initwithcircle
    initWithCircle(circle: MKCircle):MKCircleView;
    // doc://com.apple.documentation/documentation/mapkit/mkcircleview/1623525-circle
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolygonview
   */
  interface MKPolygonView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonview/1614141-initwithpolygon
    initWithPolygon(polygon: MKPolygon):MKPolygonView;
    // doc://com.apple.documentation/documentation/mapkit/mkpolygonview/1614140-polygon
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
   * doc://com.apple.documentation/documentation/mapkit/mkpolylineview
   */
  interface MKPolylineView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618189-initwithpolyline
    initWithPolyline(polyline: MKPolyline):MKPolylineView;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618188-polyline
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
    mapItems(): MKMapItem;
    setMapItems(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse/1452501-boundingregion
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
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotcompletionhandler
  type MKMapSnapshotCompletionHandler = cocoascript.NSError;
}
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryairport
declare const MKPointOfInterestCategoryAirport: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryamusementpark
declare const MKPointOfInterestCategoryAmusementPark: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryaquarium
declare const MKPointOfInterestCategoryAquarium: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryatm
declare const MKPointOfInterestCategoryATM: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybakery
declare const MKPointOfInterestCategoryBakery: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybank
declare const MKPointOfInterestCategoryBank: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybeach
declare const MKPointOfInterestCategoryBeach: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorybrewery
declare const MKPointOfInterestCategoryBrewery: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycafe
declare const MKPointOfInterestCategoryCafe: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycampground
declare const MKPointOfInterestCategoryCampground: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorycarrental
declare const MKPointOfInterestCategoryCarRental: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryevcharger
declare const MKPointOfInterestCategoryEVCharger: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfirestation
declare const MKPointOfInterestCategoryFireStation: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfitnesscenter
declare const MKPointOfInterestCategoryFitnessCenter: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryfoodmarket
declare const MKPointOfInterestCategoryFoodMarket: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorygasstation
declare const MKPointOfInterestCategoryGasStation: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryhospital
declare const MKPointOfInterestCategoryHospital: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryhotel
declare const MKPointOfInterestCategoryHotel: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorylaundry
declare const MKPointOfInterestCategoryLaundry: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorylibrary
declare const MKPointOfInterestCategoryLibrary: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymarina
declare const MKPointOfInterestCategoryMarina: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymovietheater
declare const MKPointOfInterestCategoryMovieTheater: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorymuseum
declare const MKPointOfInterestCategoryMuseum: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorynationalpark
declare const MKPointOfInterestCategoryNationalPark: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorynightlife
declare const MKPointOfInterestCategoryNightlife: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypark
declare const MKPointOfInterestCategoryPark: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryparking
declare const MKPointOfInterestCategoryParking: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypharmacy
declare const MKPointOfInterestCategoryPharmacy: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypolice
declare const MKPointOfInterestCategoryPolice: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypostoffice
declare const MKPointOfInterestCategoryPostOffice: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorypublictransport
declare const MKPointOfInterestCategoryPublicTransport: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryrestaurant
declare const MKPointOfInterestCategoryRestaurant: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryrestroom
declare const MKPointOfInterestCategoryRestroom: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryschool
declare const MKPointOfInterestCategorySchool: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorystadium
declare const MKPointOfInterestCategoryStadium: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorystore
declare const MKPointOfInterestCategoryStore: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorytheater
declare const MKPointOfInterestCategoryTheater: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryuniversity
declare const MKPointOfInterestCategoryUniversity: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategorywinery
declare const MKPointOfInterestCategoryWinery: MKPointOfInterestCategory;
// doc://com.apple.documentation/documentation/mapkit/mkpointofinterestcategoryzoo
declare const MKPointOfInterestCategoryZoo: MKPointOfInterestCategory;
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
declare const MKFeatureDisplayPriorityRequired: MKFeatureDisplayPriority;
// doc://com.apple.documentation/documentation/mapkit/mkfeaturedisplayprioritydefaulthigh
declare const MKFeatureDisplayPriorityDefaultHigh: MKFeatureDisplayPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritydefaultunselected
declare const MKAnnotationViewZPriorityDefaultUnselected: MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritydefaultselected
declare const MKAnnotationViewZPriorityDefaultSelected: MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritymax
declare const MKAnnotationViewZPriorityMax: MKAnnotationViewZPriority;
// doc://com.apple.documentation/documentation/mapkit/mkannotationviewzprioritymin
declare const MKAnnotationViewZPriorityMin: MKAnnotationViewZPriority;
declare namespace cocoascript {
  interface MKTileOverlayPath {
  }
}
