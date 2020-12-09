declare namespace cocoascript {
/**
 * A single render task issued in conjunction with 
 * doc://com.apple.documentation/documentation/coreimage/cirendertask
 */
interface CIRenderTask extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cirendertask/2881294-waituntilcompletedandreturnerror
  waitUntilCompletedAndReturnError(error: cocoascript._Nullable):cocoascript.CIRenderInfo;
  // 
  alloc():cocoascript.CIRenderTask;
  // 
  init():cocoascript.CIRenderTask;
}
}
declare const CIRenderTask: cocoascript.CIRenderTask;

