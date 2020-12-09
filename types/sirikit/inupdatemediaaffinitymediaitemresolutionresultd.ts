declare namespace cocoascript {
/**
 * A resolution result for updating the user’s affinity for a media item.
 * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult
 */
interface INUpdateMediaAffinityMediaItemResolutionResult extends INMediaItemResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult/3180165-initwithmediaitemresolutionresul
  initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
  // 
  alloc():cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
  // 
  init():cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
}
}
declare const INUpdateMediaAffinityMediaItemResolutionResult: cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;

