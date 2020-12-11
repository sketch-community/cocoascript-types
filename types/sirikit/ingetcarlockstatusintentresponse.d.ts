declare namespace cocoascript {
  /**
   * Your app’s response to a request to get the car’s lock status.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse
   */
  interface INGetCarLockStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799326-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetCarLockStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetCarLockStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799323-code
    code(): cocoascript.INGetCarLockStatusIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799331-locked
    locked(): cocoascript.NSNumber;
    setLocked(): void;
    //
    alloc():cocoascript.INGetCarLockStatusIntentResponse;
    //
    init():cocoascript.INGetCarLockStatusIntentResponse;
  }
}

declare const INGetCarLockStatusIntentResponse: cocoascript.INGetCarLockStatusIntentResponse;
