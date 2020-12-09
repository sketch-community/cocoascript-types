declare namespace cocoascript {
/**
 * The visual representation for a circular overlay. 
 * doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer
 */
interface MKCircleRenderer extends MKOverlayPathRenderer {
  // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/1452547-initwithcircle
  initWithCircle(circle: cocoascript.MKCircle):cocoascript.MKCircleRenderer;
  // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/1452413-circle
  circle(): cocoascript.MKCircle;
  setCircle(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573871-strokestart
  strokeStart(): cocoascript.CGFloat;
  setStrokeStart(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcirclerenderer/3573870-strokeend
  strokeEnd(): cocoascript.CGFloat;
  setStrokeEnd(): void;
  // 
  alloc():cocoascript.MKCircleRenderer;
  // 
  init():cocoascript.MKCircleRenderer;
}
}
declare const MKCircleRenderer: cocoascript.MKCircleRenderer;

