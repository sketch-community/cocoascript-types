declare namespace cocoascript {
  /**
   * The handler interface for requesting the current status of the car’s locks.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling
   */
  interface INGetCarLockStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799270-resolvecarnameforgetcarlockstatu
    resolveCarNameForGetCarLockStatus_withCompletion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799271-confirmgetcarlockstatus
    confirmGetCarLockStatus_completion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INGetCarLockStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799269-handlegetcarlockstatus
    handleGetCarLockStatus_completion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INGetCarLockStatusIntentResponse):void;
  }
}
