declare namespace cocoascript {
/**
 * A layer that supports drawing OpenGL content in iOS and tvOS applications.  
 * doc://com.apple.documentation/documentation/quartzcore/caeagllayer
 */
interface CAEAGLLayer extends CALayer {
  // doc://com.apple.documentation/documentation/quartzcore/caeagllayer/1618676-presentswithtransaction
  presentsWithTransaction(): cocoascript.BOOL;
  setPresentsWithTransaction(): void;
  // 
  alloc():cocoascript.CAEAGLLayer;
  // 
  init():cocoascript.CAEAGLLayer;
}
}
declare const CAEAGLLayer: cocoascript.CAEAGLLayer;

