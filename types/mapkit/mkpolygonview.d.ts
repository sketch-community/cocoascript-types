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
