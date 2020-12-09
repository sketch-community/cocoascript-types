declare namespace cocoascript {
/**
 * An interface that handles requests to start audio and video calls.
 * doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling
 */
interface INStartCallIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165949-resolvecallcapabilityforstartcal
  resolveCallCapabilityForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallCallCapabilityResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165950-resolvecontactsforstartcall
  resolveContactsForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallContactResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165951-resolvedestinationtypeforstartca
  resolveDestinationTypeForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INCallDestinationTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165947-confirmstartcall
  confirmStartCall_completion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165948-handlestartcall
  handleStartCall_completion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3649678-resolvecallrecordtocallbackforst
  resolveCallRecordToCallBackForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INCallRecordResolutionResult):void;
}
}

