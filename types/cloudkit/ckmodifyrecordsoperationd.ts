declare namespace cocoascript {
/**
 * An operation that modifies one or more records.
 * doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation
 */
interface CKModifyRecordsOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447464-initwithrecordstosave
  initWithRecordsToSave_recordIDsToDelete(records: cocoascript.CKRecord, recordIDs: cocoascript.CKRecordID):cocoascript.CKModifyRecordsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447466-init
  init():cocoascript.CKModifyRecordsOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447482-recordstosave
  recordsToSave(): cocoascript.CKRecord;
  setRecordsToSave(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447479-recordidstodelete
  recordIDsToDelete(): cocoascript.CKRecordID;
  setRecordIDsToDelete(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447472-clientchangetokendata
  clientChangeTokenData(): cocoascript.NSData;
  setClientChangeTokenData(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447484-atomic
  atomic(): cocoascript.BOOL;
  setAtomic(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447488-savepolicy
  savePolicy(): cocoascript.CKRecordSavePolicy;
  setSavePolicy(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447477-perrecordprogressblock
  perRecordProgressBlock(): number;
  setPerRecordProgressBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447470-perrecordcompletionblock
  perRecordCompletionBlock(): cocoascript.NSError;
  setPerRecordCompletionBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447486-modifyrecordscompletionblock
  modifyRecordsCompletionBlock(): cocoascript.NSError;
  setModifyRecordsCompletionBlock(): void;
  // 
  alloc():cocoascript.CKModifyRecordsOperation;
  // 
  init():cocoascript.CKModifyRecordsOperation;
}
}
declare const CKModifyRecordsOperation: cocoascript.CKModifyRecordsOperation;

