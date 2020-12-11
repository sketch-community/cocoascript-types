declare namespace cocoascript {
  /**
   * An operation for retrieving zones from a CloudKit database.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation
   */
  interface CKFetchRecordZonesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515299-initwithrecordzoneids
    initWithRecordZoneIDs(zoneIDs: cocoascript.CKRecordZoneID):cocoascript.CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515256-init
    init():cocoascript.CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515084-recordzoneids
    recordZoneIDs(): cocoascript.CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515145-fetchrecordzonescompletionblock
    fetchRecordZonesCompletionBlock(): cocoascript.NSError;
    setFetchRecordZonesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordZonesOperation;
    //
    init():cocoascript.CKFetchRecordZonesOperation;
  }
}

declare const CKFetchRecordZonesOperation: cocoascript.CKFetchRecordZonesOperation;
