declare namespace cocoascript {
/**
 * Your app’s response to a request to search for account information.
 * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse
 */
interface INSearchForAccountsIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867968-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForAccountsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForAccountsIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867969-code
  code(): cocoascript.INSearchForAccountsIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867970-accounts
  accounts(): cocoascript.INPaymentAccount;
  setAccounts(): void;
  // 
  alloc():cocoascript.INSearchForAccountsIntentResponse;
  // 
  init():cocoascript.INSearchForAccountsIntentResponse;
}
}
declare const INSearchForAccountsIntentResponse: cocoascript.INSearchForAccountsIntentResponse;

