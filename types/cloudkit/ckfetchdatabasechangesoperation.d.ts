declare namespace cocoascript {
  /**
   * An operation that fetches database changes.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation
   */
  interface CKFetchDatabaseChangesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640502-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2715838-init
    init():cocoascript.CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640473-fetchallchanges
    fetchAllChanges(): cocoascript.BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640522-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640520-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640391-recordzonewithidchangedblock
    recordZoneWithIDChangedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640428-recordzonewithidwasdeletedblock
    recordZoneWithIDWasDeletedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2866207-recordzonewithidwaspurgedblock
    recordZoneWithIDWasPurgedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDWasPurgedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640467-changetokenupdatedblock
    changeTokenUpdatedBlock(): cocoascript.CKServerChangeToken;
    setChangeTokenUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640434-fetchdatabasechangescompletionbl
    fetchDatabaseChangesCompletionBlock(): cocoascript.NSError;
    setFetchDatabaseChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchDatabaseChangesOperation;
    //
    init():cocoascript.CKFetchDatabaseChangesOperation;
  }
}

declare const CKFetchDatabaseChangesOperation: cocoascript.CKFetchDatabaseChangesOperation;
