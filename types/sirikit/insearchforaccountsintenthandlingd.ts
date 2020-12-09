declare namespace cocoascript {
/**
 * The handler interface for searching for account information.
 * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling
 */
interface INSearchForAccountsIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867913-resolveaccountnicknameforsearchf
  resolveAccountNicknameForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867911-resolveaccounttypeforsearchforac
  resolveAccountTypeForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INAccountTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867920-resolveorganizationnameforsearch
  resolveOrganizationNameForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867915-resolverequestedbalancetypeforse
  resolveRequestedBalanceTypeForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INBalanceTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867908-confirmsearchforaccounts
  confirmSearchForAccounts_completion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSearchForAccountsIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867909-handlesearchforaccounts
  handleSearchForAccounts_completion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSearchForAccountsIntentResponse):void;
}
}

