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
