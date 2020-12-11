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
