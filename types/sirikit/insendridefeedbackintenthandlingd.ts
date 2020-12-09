declare namespace cocoascript {
/**
 * The handler interface for sending ride feedback to your service.
 * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling
 */
interface INSendRideFeedbackIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling/2875665-confirmsendridefeedback
  confirmSendRideFeedback_completion(sendRideFeedbackIntent: cocoascript.INSendRideFeedbackIntent, completion: cocoascript.INSendRideFeedbackIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling/2875582-handlesendridefeedback
  handleSendRideFeedback_completion(sendRideFeedbackintent: cocoascript.INSendRideFeedbackIntent, completion: cocoascript.INSendRideFeedbackIntentResponse):void;
}
}

