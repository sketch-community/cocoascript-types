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

