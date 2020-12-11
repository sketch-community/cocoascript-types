declare namespace cocoascript {
  /**
   * An interaction between the user and your app involving an intent object.
   * doc://com.apple.documentation/documentation/sirikit/ininteraction
   */
  interface INInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1639259-initwithintent
    initWithIntent_response(intent: cocoascript.INIntent, response: cocoascript.INIntentResponse):cocoascript.INInteraction;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638928-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638817-intentresponse
    intentResponse(): cocoascript.INIntentResponse;
    setIntentResponse(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1690386-donateinteractionwithcompletion
    donateInteractionWithCompletion(completion: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638740-intenthandlingstatus
    intentHandlingStatus(): cocoascript.INIntentHandlingStatus;
    setIntentHandlingStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1639368-direction
    direction(): cocoascript.INInteractionDirection;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638853-dateinterval
    dateInterval(): cocoascript.NSDateInterval;
    setDateInterval(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638924-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638832-groupidentifier
    groupIdentifier(): cocoascript.NSString;
    setGroupIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/2908769-parametervalueforparameter
    parameterValueForParameter(parameter: cocoascript.INParameter):cocoascript.INInteraction;
    //
    alloc():cocoascript.INInteraction;
    //
    init():cocoascript.INInteraction;
  }
}

declare const INInteraction: cocoascript.INInteraction;
