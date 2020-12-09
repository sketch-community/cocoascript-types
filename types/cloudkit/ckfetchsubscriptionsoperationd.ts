declare namespace cocoascript {
/**
 * An operation for fetching subscriptions. 
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation
 */
interface CKFetchSubscriptionsOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515157-initwithsubscriptionids
  initWithSubscriptionIDs(subscriptionIDs: cocoascript.CKSubscriptionID):cocoascript.CKFetchSubscriptionsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515123-init
  init():cocoascript.CKFetchSubscriptionsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515011-subscriptionids
  subscriptionIDs(): cocoascript.CKSubscriptionID;
  setSubscriptionIDs(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515261-fetchsubscriptioncompletionblock
  fetchSubscriptionCompletionBlock(): cocoascript.NSError;
  setFetchSubscriptionCompletionBlock(): void;
  // 
  alloc():cocoascript.CKFetchSubscriptionsOperation;
  // 
  init():cocoascript.CKFetchSubscriptionsOperation;
}
}
declare const CKFetchSubscriptionsOperation: cocoascript.CKFetchSubscriptionsOperation;

