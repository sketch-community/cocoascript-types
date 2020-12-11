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
    // doc://com.apple.documentation/documentation/mapkit/mkannotationcalloutinfodidchangenotification
    MKAnnotationCalloutInfoDidChangeNotification(): cocoascript.const;
    setMKAnnotationCalloutInfoDidChangeNotification(): void;
    //
    alloc():cocoascript.MKAnnotationView;
    //
    init():cocoascript.MKAnnotationView;
  }
}

declare const MKAnnotationView: cocoascript.MKAnnotationView;
