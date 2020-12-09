declare namespace cocoascript {
/**
 * The handler interface for initiating a video call from your app.
 * doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling
 */
interface INStartVideoCallIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1902444-resolvecontactsforstartvideocall
  resolveContactsForStartVideoCall_withCompletion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INPersonResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1639163-confirmstartvideocall
  confirmStartVideoCall_completion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INStartVideoCallIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1639069-handlestartvideocall
  handleStartVideoCall_completion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INStartVideoCallIntentResponse):void;
}
}

