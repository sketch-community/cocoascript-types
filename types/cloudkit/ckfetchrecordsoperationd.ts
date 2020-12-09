declare namespace cocoascript {
/**
 * An operation for retrieving records from CloudKit.
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation
 */
interface CKFetchRecordsOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476074-initwithrecordids
  initWithRecordIDs(recordIDs: cocoascript.CKRecordID):cocoascript.CKFetchRecordsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476072-init
  init():cocoascript.CKFetchRecordsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476076-recordids
  recordIDs(): cocoascript.CKRecordID;
  setRecordIDs(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476088-desiredkeys
  desiredKeys(): cocoascript.CKRecordFieldKey;
  setDesiredKeys(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476080-perrecordprogressblock
  perRecordProgressBlock(): number;
  setPerRecordProgressBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476082-perrecordcompletionblock
  perRecordCompletionBlock(): cocoascript.NSError;
  setPerRecordCompletionBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476078-fetchrecordscompletionblock
  fetchRecordsCompletionBlock(): cocoascript.NSError;
  setFetchRecordsCompletionBlock(): void;
  // 
  alloc():cocoascript.CKFetchRecordsOperation;
  // 
  init():cocoascript.CKFetchRecordsOperation;
}
}
declare const CKFetchRecordsOperation: cocoascript.CKFetchRecordsOperation;

