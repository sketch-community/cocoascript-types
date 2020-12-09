declare namespace cocoascript {
/**
 * A resolution result for the call capability for the call.
 * doc://com.apple.documentation/documentation/sirikit/instartcallcallcapabilityresolutionresult
 */
interface INStartCallCallCapabilityResolutionResult extends INCallCapabilityResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/instartcallcallcapabilityresolutionresult/3165924-initwithcallcapabilityresolution
  initWithCallCapabilityResolutionResult(callCapabilityResolutionResult: cocoascript.INCallCapabilityResolutionResult):cocoascript.INStartCallCallCapabilityResolutionResult;
  // 
  alloc():cocoascript.INStartCallCallCapabilityResolutionResult;
  // 
  init():cocoascript.INStartCallCallCapabilityResolutionResult;
}
}
declare const INStartCallCallCapabilityResolutionResult: cocoascript.INStartCallCallCapabilityResolutionResult;

