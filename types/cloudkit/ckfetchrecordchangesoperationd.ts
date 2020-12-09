declare namespace cocoascript {
/**
 * An operation that reports on the changed and deleted records in the specified record zone.
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation
 */
interface CKFetchRecordChangesOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515224-initwithrecordzoneid
  initWithRecordZoneID_previousServerChangeToken(recordZoneID: cocoascript.CKRecordZoneID, previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchRecordChangesOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/2715828-init
  init():cocoascript.CKFetchRecordChangesOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515018-recordzoneid
  recordZoneID(): cocoascript.CKRecordZoneID;
  setRecordZoneID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515209-previousserverchangetoken
  previousServerChangeToken(): cocoascript.CKServerChangeToken;
  setPreviousServerChangeToken(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515230-desiredkeys
  desiredKeys(): cocoascript.CKRecordFieldKey;
  setDesiredKeys(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1514891-resultslimit
  resultsLimit(): cocoascript.NSUInteger;
  setResultsLimit(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515322-morecoming
  moreComing(): cocoascript.BOOL;
  setMoreComing(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515155-recordchangedblock
  recordChangedBlock(): cocoascript.CKRecord;
  setRecordChangedBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515054-recordwithidwasdeletedblock
  recordWithIDWasDeletedBlock(): cocoascript.CKRecordID;
  setRecordWithIDWasDeletedBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515267-fetchrecordchangescompletionbloc
  fetchRecordChangesCompletionBlock(): cocoascript.NSError;
  setFetchRecordChangesCompletionBlock(): void;
  // 
  alloc():cocoascript.CKFetchRecordChangesOperation;
  // 
  init():cocoascript.CKFetchRecordChangesOperation;
}
}
declare const CKFetchRecordChangesOperation: cocoascript.CKFetchRecordChangesOperation;

