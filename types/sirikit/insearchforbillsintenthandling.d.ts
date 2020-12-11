declare namespace cocoascript {
  /**
   * The handler interface for searching for bills associated with the user.
   * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling
   */
  interface INSearchForBillsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798972-resolvebillpayeeforsearchforbill
    resolveBillPayeeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INBillPayeeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798982-resolvebilltypeforsearchforbills
    resolveBillTypeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INBillTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798978-resolveduedaterangeforsearchforb
    resolveDueDateRangeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798979-resolvepaymentdaterangeforsearch
    resolvePaymentDateRangeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798981-resolvestatusforsearchforbills
    resolveStatusForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INPaymentStatusResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798977-confirmsearchforbills
    confirmSearchForBills_completion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INSearchForBillsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798973-handlesearchforbills
    handleSearchForBills_completion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INSearchForBillsIntentResponse):void;
  }
}
