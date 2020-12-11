declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records in a record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription
   */
  interface CKRecordZoneSubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640392-initwithzoneid
    initWithZoneID(zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640415-initwithzoneid
    initWithZoneID_subscriptionID(zoneID: cocoascript.CKRecordZoneID, subscriptionID: cocoascript.CKSubscriptionID):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/3547082-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640479-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640367-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKRecordZoneSubscription;
    //
    init():cocoascript.CKRecordZoneSubscription;
  }
}

declare const CKRecordZoneSubscription: cocoascript.CKRecordZoneSubscription;
