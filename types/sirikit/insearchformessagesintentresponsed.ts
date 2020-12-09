declare namespace cocoascript {
/**
 * Your app’s response to a search for messages intent.
 * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse
 */
interface INSearchForMessagesIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1638285-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForMessagesIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForMessagesIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1823496-code
  code(): cocoascript.INSearchForMessagesIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1639421-messages
  messages(): cocoascript.INMessage;
  setMessages(): void;
  // 
  alloc():cocoascript.INSearchForMessagesIntentResponse;
  // 
  init():cocoascript.INSearchForMessagesIntentResponse;
}
}
declare const INSearchForMessagesIntentResponse: cocoascript.INSearchForMessagesIntentResponse;

