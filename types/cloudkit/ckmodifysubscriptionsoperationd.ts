declare namespace cocoascript {
  /**
   * An operation for modifying one or more subscriptions.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation
   */
  interface CKModifySubscriptionsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515015-initwithsubscriptionstosave
    initWithSubscriptionsToSave_subscriptionIDsToDelete(subscriptionsToSave: cocoascript.CKSubscription, subscriptionIDsToDelete: cocoascript.CKSubscriptionID):cocoascript.CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/2715835-init
    init():cocoascript.CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515135-subscriptionstosave
    subscriptionsToSave(): cocoascript.CKSubscription;
    setSubscriptionsToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1514892-subscriptionidstodelete
    subscriptionIDsToDelete(): cocoascript.CKSubscriptionID;
    setSubscriptionIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515288-modifysubscriptionscompletionblo
    modifySubscriptionsCompletionBlock(): cocoascript.NSError;
    setModifySubscriptionsCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifySubscriptionsOperation;
    //
    init():cocoascript.CKModifySubscriptionsOperation;
  }
}

declare const CKModifySubscriptionsOperation: cocoascript.CKModifySubscriptionsOperation;
