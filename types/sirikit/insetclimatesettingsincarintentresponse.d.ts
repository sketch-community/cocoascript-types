declare namespace cocoascript {
  /**
   * Your app’s response to a set climate settings in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse
   */
  interface INSetClimateSettingsInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse/1649645-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetClimateSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetClimateSettingsInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse/1829405-code
    code(): cocoascript.INSetClimateSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetClimateSettingsInCarIntentResponse;
    //
    init():cocoascript.INSetClimateSettingsInCarIntentResponse;
  }
}

declare const INSetClimateSettingsInCarIntentResponse: cocoascript.INSetClimateSettingsInCarIntentResponse;
