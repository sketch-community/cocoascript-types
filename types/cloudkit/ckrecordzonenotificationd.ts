declare namespace cocoascript {
  /**
   * A notification that triggers when the contents of a record zone change.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification
   */
  interface CKRecordZoneNotification extends CKNotification {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification/1428086-recordzoneid
    recordZoneID(): cocoascript.CKRecordZoneID;
    setRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification/1640394-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.CKRecordZoneNotification;
    //
    init():cocoascript.CKRecordZoneNotification;
  }
}

declare const CKRecordZoneNotification: cocoascript.CKRecordZoneNotification;
