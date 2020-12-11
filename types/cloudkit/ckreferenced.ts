declare namespace cocoascript {
  /**
   * An object that describes a many-to-one relationship between records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckreference
   */
  interface CKReference extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1515280-initwithrecordid
    initWithRecordID_action(recordID: cocoascript.CKRecordID, action: cocoascript.CKReferenceAction):cocoascript.CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1515312-initwithrecord
    initWithRecord_action(record: cocoascript.CKRecord, action: cocoascript.CKReferenceAction):cocoascript.CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514900-referenceaction
    referenceAction(): cocoascript.CKReferenceAction;
    setReferenceAction(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514956-recordid
    recordID(): cocoascript.CKRecordID;
    setRecordID(): void;
    //
    alloc():cocoascript.CKReference;
    //
    init():cocoascript.CKReference;
  }
}

declare const CKReference: cocoascript.CKReference;
