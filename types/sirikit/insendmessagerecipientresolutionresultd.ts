declare namespace cocoascript {
/**
 * A resolution result for the recipient of a message.
 * doc://com.apple.documentation/documentation/sirikit/insendmessagerecipientresolutionresult
 */
interface INSendMessageRecipientResolutionResult extends INPersonResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/insendmessagerecipientresolutionresult/2914612-initwithpersonresolutionresult
  initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INSendMessageRecipientResolutionResult;
  // 
  alloc():cocoascript.INSendMessageRecipientResolutionResult;
  // 
  init():cocoascript.INSendMessageRecipientResolutionResult;
}
}
declare const INSendMessageRecipientResolutionResult: cocoascript.INSendMessageRecipientResolutionResult;

