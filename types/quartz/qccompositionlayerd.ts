declare namespace cocoascript {
/**
 * A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy. 
 * doc://com.apple.documentation/documentation/quartz/qccompositionlayer
 */
interface QCCompositionLayer extends CAOpenGLLayer {
  // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1504706-initwithfile
  initWithFile(path: cocoascript.NSString):cocoascript.QCCompositionLayer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1503553-initwithcomposition
  initWithComposition(composition: cocoascript.QCComposition):cocoascript.QCCompositionLayer;
  // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1503496-composition
  composition():cocoascript.QCComposition;
  // 
  alloc():cocoascript.QCCompositionLayer;
  // 
  init():cocoascript.QCCompositionLayer;
}
}
declare const QCCompositionLayer: cocoascript.QCCompositionLayer;

