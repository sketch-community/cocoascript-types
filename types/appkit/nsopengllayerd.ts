declare namespace cocoascript {
/**
 * A subclass of 
 * doc://com.apple.documentation/documentation/appkit/nsopengllayer
 */
interface NSOpenGLLayer extends CAOpenGLLayer {
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522566-candrawinopenglcontext
  canDrawInOpenGLContext_pixelFormat_forLayerTime_displayTime(context: cocoascript.NSOpenGLContext, pixelFormat: cocoascript.NSOpenGLPixelFormat, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522572-drawinopenglcontext
  drawInOpenGLContext_pixelFormat_forLayerTime_displayTime(context: cocoascript.NSOpenGLContext, pixelFormat: cocoascript.NSOpenGLPixelFormat, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):void;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522568-openglpixelformat
  openGLPixelFormat(): cocoascript.NSOpenGLPixelFormat;
  setOpenGLPixelFormat(): void;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522574-openglpixelformatfordisplaymask
  openGLPixelFormatForDisplayMask(mask: number):cocoascript.NSOpenGLPixelFormat;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522570-openglcontext
  openGLContext(): cocoascript.NSOpenGLContext;
  setOpenGLContext(): void;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522578-openglcontextforpixelformat
  openGLContextForPixelFormat(pixelFormat: cocoascript.NSOpenGLPixelFormat):cocoascript.NSOpenGLContext;
  // doc://com.apple.documentation/documentation/appkit/nsopengllayer/1522576-view
  view(): cocoascript.NSView;
  setView(): void;
  // 
  alloc():cocoascript.NSOpenGLLayer;
  // 
  init():cocoascript.NSOpenGLLayer;
}
}
declare const NSOpenGLLayer: cocoascript.NSOpenGLLayer;

