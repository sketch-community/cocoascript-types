declare namespace cocoascript {
  /**
   * The handler interface for requesting to lock or unlock a car.
   * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling
   */
  interface INSetCarLockStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799287-resolvecarnameforsetcarlockstatu
    resolveCarNameForSetCarLockStatus_withCompletion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799281-resolvelockedforsetcarlockstatus
    resolveLockedForSetCarLockStatus_withCompletion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799284-confirmsetcarlockstatus
    confirmSetCarLockStatus_completion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSetCarLockStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799286-handlesetcarlockstatus
    handleSetCarLockStatus_completion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSetCarLockStatusIntentResponse):void;
  }
}
