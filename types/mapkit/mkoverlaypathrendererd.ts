declare namespace cocoascript {
/**
 * The visual representation for a path-based overlay. 
 * doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer
 */
interface MKOverlayPathRenderer extends MKOverlayRenderer {
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1451875-path
  path(): cocoascript.CGPathRef;
  setPath(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452686-createpath
  createPath():void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452076-invalidatepath
  invalidatePath():void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452668-fillcolor
  fillColor(): cocoascript.UIColor;
  setFillColor(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452175-strokecolor
  strokeColor(): cocoascript.UIColor;
  setStrokeColor(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452441-linewidth
  lineWidth(): cocoascript.CGFloat;
  setLineWidth(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452031-linejoin
  lineJoin(): cocoascript.CGLineJoin;
  setLineJoin(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452556-linecap
  lineCap(): cocoascript.CGLineCap;
  setLineCap(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452395-miterlimit
  miterLimit(): cocoascript.CGFloat;
  setMiterLimit(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452363-linedashphase
  lineDashPhase(): cocoascript.CGFloat;
  setLineDashPhase(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452493-linedashpattern
  lineDashPattern(): cocoascript.NSNumber;
  setLineDashPattern(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452713-applystrokepropertiestocontext
  applyStrokePropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452281-applyfillpropertiestocontext
  applyFillPropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452549-strokepath
  strokePath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/1452100-fillpath
  fillPath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
  // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathrenderer/3088846-shouldrasterize
  shouldRasterize(): cocoascript.BOOL;
  setShouldRasterize(): void;
  // 
  alloc():cocoascript.MKOverlayPathRenderer;
  // 
  init():cocoascript.MKOverlayPathRenderer;
}
}
declare const MKOverlayPathRenderer: cocoascript.MKOverlayPathRenderer;

