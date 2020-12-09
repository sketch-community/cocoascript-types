declare namespace cocoascript {
/**
 * The base class for the drawing environments for graphics renderers.
 * doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext
 */
interface UIGraphicsRendererContext extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648560-cgcontext
  CGContext(): cocoascript.CGContextRef;
  setCGContext(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648557-format
  format(): cocoascript.UIGraphicsRendererFormat;
  setFormat(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648555-strokerect
  strokeRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648562-strokerect
  strokeRect_blendMode(rect: cocoascript.CGRect, blendMode: cocoascript.CGBlendMode):void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648552-fillrect
  fillRect_blendMode(rect: cocoascript.CGRect, blendMode: cocoascript.CGBlendMode):void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648554-fillrect
  fillRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsrenderercontext/1648549-cliptorect
  clipToRect(rect: cocoascript.CGRect):void;
  // 
  alloc():cocoascript.UIGraphicsRendererContext;
  // 
  init():cocoascript.UIGraphicsRendererContext;
}
}
declare const UIGraphicsRendererContext: cocoascript.UIGraphicsRendererContext;

