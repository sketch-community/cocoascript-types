declare namespace cocoascript {
/**
 * A 
 * doc://com.apple.documentation/documentation/quartz/qcrenderer
 */
interface QCRenderer extends NSObject {
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504825-initwithcomposition
  initWithComposition_colorSpace(composition: cocoascript.QCComposition, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.QCRenderer;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504247-initwithopenglcontext
  initWithOpenGLContext_pixelFormat_file(context: cocoascript.NSOpenGLContext, format: cocoascript.NSOpenGLPixelFormat, path: cocoascript.NSString):cocoascript.QCRenderer;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504424-initwithcglcontext
  initWithCGLContext_pixelFormat_colorSpace_composition(context: any, format: any, colorSpace: cocoascript.CGColorSpaceRef, composition: cocoascript.QCComposition):cocoascript.QCRenderer;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504610-initoffscreenwithsize
  initOffScreenWithSize_colorSpace_composition(size: cocoascript.NSSize, colorSpace: cocoascript.CGColorSpaceRef, composition: cocoascript.QCComposition):cocoascript.QCRenderer;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503792-renderattime
  renderAtTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503919-composition
  composition():cocoascript.QCComposition;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504422-snapshotimage
  snapshotImage():cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503473-createsnapshotimageoftype
  createSnapshotImageOfType(type: cocoascript.NSString):cocoascript.QCRenderer;
  // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504024-renderingtimefortime
  renderingTimeForTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.NSTimeInterval;
  // 
  alloc():cocoascript.QCRenderer;
  // 
  init():cocoascript.QCRenderer;
}
}
declare const QCRenderer: cocoascript.QCRenderer;

