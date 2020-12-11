declare namespace cocoascript {
  /**
   * An operation that modifies one or more record zones.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation
   */
  interface CKModifyRecordZonesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415167-initwithrecordzonestosave
    initWithRecordZonesToSave_recordZoneIDsToDelete(recordZonesToSave: cocoascript.CKRecordZone, recordZoneIDsToDelete: cocoascript.CKRecordZoneID):cocoascript.CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415169-init
    init():cocoascript.CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415171-recordzonestosave
    recordZonesToSave(): cocoascript.CKRecordZone;
    setRecordZonesToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415173-recordzoneidstodelete
    recordZoneIDsToDelete(): cocoascript.CKRecordZoneID;
    setRecordZoneIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415164-modifyrecordzonescompletionblock
    modifyRecordZonesCompletionBlock(): cocoascript.NSError;
    setModifyRecordZonesCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifyRecordZonesOperation;
    //
    init():cocoascript.CKModifyRecordZonesOperation;
  }
}

declare const CKModifyRecordZonesOperation: cocoascript.CKModifyRecordZonesOperation;
