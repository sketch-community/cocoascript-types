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

