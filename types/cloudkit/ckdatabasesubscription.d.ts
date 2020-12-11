declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription
   */
  interface CKDatabaseSubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640456-init
    init():cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640530-initwithsubscriptionid
    initWithSubscriptionID(subscriptionID: cocoascript.CKSubscriptionID):cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/3547080-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640418-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    //
    alloc():cocoascript.CKDatabaseSubscription;
    //
    init():cocoascript.CKDatabaseSubscription;
  }
}

declare const CKDatabaseSubscription: cocoascript.CKDatabaseSubscription;
