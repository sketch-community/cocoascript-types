declare namespace cocoascript {
  /**
   * An object representing the location, size, movement, and force of a touch occurring on the screen.
   * doc://com.apple.documentation/documentation/uikit/uitouch
   */
  interface UITouch extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618116-locationinview
    locationInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618135-previouslocationinview
    previousLocationInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618109-view
    view(): cocoascript.UIView;
    setView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618126-window
    window(): cocoascript.UIWindow;
    setWindow(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618106-majorradius
    majorRadius(): cocoascript.CGFloat;
    setMajorRadius(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618120-majorradiustolerance
    majorRadiusTolerance(): cocoascript.CGFloat;
    setMajorRadiusTolerance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618134-preciselocationinview
    preciseLocationInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618129-precisepreviouslocationinview
    precisePreviousLocationInView(view: cocoascript.UIView):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618132-tapcount
    tapCount(): cocoascript.NSUInteger;
    setTapCount(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618144-timestamp
    timestamp(): cocoascript.NSTimeInterval;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618143-type
    type(): cocoascript.UITouchType;
    setType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618113-phase
    phase(): cocoascript.UITouchPhase;
    setPhase(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618110-force
    force(): cocoascript.CGFloat;
    setForce(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618121-maximumpossibleforce
    maximumPossibleForce(): cocoascript.CGFloat;
    setMaximumPossibleForce(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618118-altitudeangle
    altitudeAngle(): cocoascript.CGFloat;
    setAltitudeAngle(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618131-azimuthangleinview
    azimuthAngleInView(view: cocoascript.UIView):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618133-azimuthunitvectorinview
    azimuthUnitVectorInView(view: cocoascript.UIView):cocoascript.CGVector;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618130-estimatedproperties
    estimatedProperties(): cocoascript.UITouchProperties;
    setEstimatedProperties(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618119-estimatedpropertiesexpectingupda
    estimatedPropertiesExpectingUpdates(): cocoascript.UITouchProperties;
    setEstimatedPropertiesExpectingUpdates(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618137-estimationupdateindex
    estimationUpdateIndex(): cocoascript.NSNumber;
    setEstimationUpdateIndex(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1618114-gesturerecognizers
    gestureRecognizers(): cocoascript.UIGestureRecognizer;
    setGestureRecognizers(): void;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1614836-locationinnode
    locationInNode(node: cocoascript.SKNode):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uitouch/1615023-previouslocationinnode
    previousLocationInNode(node: cocoascript.SKNode):cocoascript.CGPoint;
    //
    alloc():cocoascript.UITouch;
    //
    init():cocoascript.UITouch;
  }
}

declare const UITouch: cocoascript.UITouch;
