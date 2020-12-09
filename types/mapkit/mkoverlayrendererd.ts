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
  // doc://com.apple.documentation/documentation/mapkit/1452156-mkroadwidthatzoomscale
  MKRoadWidthAtZoomScale(): cocoascript.MKZoomScale;
  setMKRoadWidthAtZoomScale(): void;
  // 
  alloc():cocoascript.MKOverlayRenderer;
  // 
  init():cocoascript.MKOverlayRenderer;
}
}
declare const MKOverlayRenderer: cocoascript.MKOverlayRenderer;

