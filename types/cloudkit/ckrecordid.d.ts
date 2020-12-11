declare namespace cocoascript {
  /**
   * An object that uniquely identifies a record in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordid
   */
  interface CKRecordID extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500975-initwithrecordname
    initWithRecordName(recordName: cocoascript.NSString):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500967-initwithrecordname
    initWithRecordName_zoneID(recordName: cocoascript.NSString, zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500973-recordname
    recordName(): cocoascript.NSString;
    setRecordName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500969-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKRecordID;
    //
    init():cocoascript.CKRecordID;
  }
}

declare const CKRecordID: cocoascript.CKRecordID;
