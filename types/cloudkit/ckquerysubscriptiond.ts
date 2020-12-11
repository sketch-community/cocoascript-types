declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records that match a predicate.
   * doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription
   */
  interface CKQuerySubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640466-initwithrecordtype
    initWithRecordType_predicate_options(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate, querySubscriptionOptions: cocoascript.CKQuerySubscriptionOptions):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640505-initwithrecordtype
    initWithRecordType_predicate_subscriptionID_options(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate, subscriptionID: cocoascript.CKSubscriptionID, querySubscriptionOptions: cocoascript.CKQuerySubscriptionOptions):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/3547081-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640485-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640414-querysubscriptionoptions
    querySubscriptionOptions(): cocoascript.CKQuerySubscriptionOptions;
    setQuerySubscriptionOptions(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640393-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640390-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKQuerySubscription;
    //
    init():cocoascript.CKQuerySubscription;
  }
}

declare const CKQuerySubscription: cocoascript.CKQuerySubscription;
