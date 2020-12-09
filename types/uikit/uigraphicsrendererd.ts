declare namespace cocoascript {
/**
 * An abstract base class for creating graphics renderers.
 * doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer
 */
interface UIGraphicsRenderer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer/1648548-initwithbounds
  initWithBounds(bounds: cocoascript.CGRect):cocoascript.UIGraphicsRenderer;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer/1648558-initwithbounds
  initWithBounds_format(bounds: cocoascript.CGRect, format: cocoascript.UIGraphicsRendererFormat):cocoascript.UIGraphicsRenderer;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer/1648553-allowsimageoutput
  allowsImageOutput(): cocoascript.BOOL;
  setAllowsImageOutput(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer/1648556-format
  format(): cocoascript.UIGraphicsRendererFormat;
  setFormat(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderer/1649839-rundrawingactions
  runDrawingActions_completionActions_error(drawingActions: cocoascript.UIGraphicsDrawingActions, completionActions: cocoascript.UIGraphicsDrawingActions, error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.UIGraphicsRenderer;
  // 
  init():cocoascript.UIGraphicsRenderer;
}
}
declare const UIGraphicsRenderer: cocoascript.UIGraphicsRenderer;

