declare namespace cocoascript {
/**
 * Your app’s response to a send message intent.
 * doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse
 */
interface INSendMessageIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/1638961-initwithcode
  initWithCode_userActivity(code: cocoascript.INSendMessageIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendMessageIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/1823491-code
  code(): cocoascript.INSendMessageIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/2875672-sentmessage
  sentMessage(): cocoascript.INMessage;
  setSentMessage(): void;
  // 
  alloc():cocoascript.INSendMessageIntentResponse;
  // 
  init():cocoascript.INSendMessageIntentResponse;
}
}
declare const INSendMessageIntentResponse: cocoascript.INSendMessageIntentResponse;

