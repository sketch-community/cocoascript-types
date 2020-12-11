declare namespace cocoascript {
  /**
   * An operation that retrieves unread notifications from a CloudKit container.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation
   */
  interface CKFetchNotificationChangesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515141-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/2715837-init
    init():cocoascript.CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515139-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515275-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515108-morecoming
    moreComing(): cocoascript.BOOL;
    setMoreComing(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515253-notificationchangedblock
    notificationChangedBlock(): cocoascript.CKNotification;
    setNotificationChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515125-fetchnotificationchangescompleti
    fetchNotificationChangesCompletionBlock(): cocoascript.NSError;
    setFetchNotificationChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchNotificationChangesOperation;
    //
    init():cocoascript.CKFetchNotificationChangesOperation;
  }
}

declare const CKFetchNotificationChangesOperation: cocoascript.CKFetchNotificationChangesOperation;
