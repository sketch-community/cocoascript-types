declare namespace cocoascript {
  /**
   * The interface an object implements to confirm and handle play media intents.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling
   */
  interface INPlayMediaIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074275-resolvemediaitemsforplaymedia
    resolveMediaItemsForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074276-resolveplayshuffledforplaymedia
    resolvePlayShuffledForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074277-resolveplaybackqueuelocationforp
    resolvePlaybackQueueLocationForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlaybackQueueLocationResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074278-resolveplaybackrepeatmodeforplay
    resolvePlaybackRepeatModeForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlaybackRepeatModeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3180131-resolveplaybackspeedforplaymedia
    resolvePlaybackSpeedForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaPlaybackSpeedResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074279-resolveresumeplaybackforplaymedi
    resolveResumePlaybackForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/2963020-confirmplaymedia
    confirmPlayMedia_completion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/2963021-handleplaymedia
    handlePlayMedia_completion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaIntentResponse):void;
  }
}
