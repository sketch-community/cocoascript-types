declare namespace cocoascript {
/**
 * A layer that provides a layer suitable for rendering OpenGL content.
 * doc://com.apple.documentation/documentation/quartzcore/caopengllayer
 */
interface CAOpenGLLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521873-colorspace
  colorspace(): cocoascript.CGColorSpaceRef;
  setColorspace(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521900-wantsextendeddynamicrangecontent
  wantsExtendedDynamicRangeContent(): cocoascript.BOOL;
  setWantsExtendedDynamicRangeContent(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522116-asynchronous
  asynchronous(): cocoascript.BOOL;
  setAsynchronous(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522184-candrawincglcontext
  canDrawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522316-drawincglcontext
  drawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):void;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522052-copycglpixelformatfordisplaymask
  copyCGLPixelFormatForDisplayMask(mask: number):any;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521910-releasecglpixelformat
  releaseCGLPixelFormat(pf: any):void;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521894-copycglcontextforpixelformat
  copyCGLContextForPixelFormat(pf: any):any;
  // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521850-releasecglcontext
  releaseCGLContext(ctx: any):void;
  // 
  alloc():cocoascript.CAOpenGLLayer;
  // 
  init():cocoascript.CAOpenGLLayer;
}
}
declare const CAOpenGLLayer: cocoascript.CAOpenGLLayer;

