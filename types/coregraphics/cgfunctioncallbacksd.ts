declare namespace cocoascript {
/**
 * A structure that contains callbacks needed by a 
 * doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks
 */
interface CGFunctionCallbacks {
  // doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks/1390866-evaluate
  evaluate(): cocoascript.CGFunctionEvaluateCallback;
  setEvaluate(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks/1390868-releaseinfo
  releaseInfo(): cocoascript.CGFunctionReleaseInfoCallback;
  setReleaseInfo(): void;
}
}

