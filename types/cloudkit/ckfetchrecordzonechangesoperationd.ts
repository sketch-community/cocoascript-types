declare namespace cocoascript {
  /**
   * An operation that fetches record zone changes.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation
   */
  interface CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980665-initwithrecordzoneids
    initWithRecordZoneIDs_configurationsByRecordZoneID(recordZoneIDs: cocoascript.CKRecordZoneID, configurationsByRecordZoneID: cocoascript.CKFetchRecordZoneChangesConfiguration):cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2715840-init
    init():cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640509-initwithrecordzoneids
    initWithRecordZoneIDs_optionsByRecordZoneID(recordZoneIDs: cocoascript.CKRecordZoneID, optionsByRecordZoneID: cocoascript.CKFetchRecordZoneChangesOptions):cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980664-configurationsbyrecordzoneid
    configurationsByRecordZoneID(): cocoascript.CKFetchRecordZoneChangesConfiguration;
    setConfigurationsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640386-fetchallchanges
    fetchAllChanges(): cocoascript.BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640463-recordzoneids
    recordZoneIDs(): cocoascript.CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640452-optionsbyrecordzoneid
    optionsByRecordZoneID(): cocoascript.CKFetchRecordZoneChangesOptions;
    setOptionsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640417-recordchangedblock
    recordChangedBlock(): cocoascript.CKRecord;
    setRecordChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640470-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): cocoascript.CKRecordType;
    setRecordWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640422-recordzonechangetokensupdatedblo
    recordZoneChangeTokensUpdatedBlock(): cocoascript.NSData;
    setRecordZoneChangeTokensUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640411-recordzonefetchcompletionblock
    recordZoneFetchCompletionBlock(): cocoascript.NSError;
    setRecordZoneFetchCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640409-fetchrecordzonechangescompletion
    fetchRecordZoneChangesCompletionBlock(): cocoascript.NSError;
    setFetchRecordZoneChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordZoneChangesOperation;
    //
    init():cocoascript.CKFetchRecordZoneChangesOperation;
  }
}

declare const CKFetchRecordZoneChangesOperation: cocoascript.CKFetchRecordZoneChangesOperation;
