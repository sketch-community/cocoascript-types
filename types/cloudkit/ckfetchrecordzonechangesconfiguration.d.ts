declare namespace cocoascript {
  /**
   * A configuration object that describes the information to fetch from a record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration
   */
  interface CKFetchRecordZoneChangesConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980662-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980663-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980661-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    //
    alloc():cocoascript.CKFetchRecordZoneChangesConfiguration;
    //
    init():cocoascript.CKFetchRecordZoneChangesConfiguration;
  }
}

declare const CKFetchRecordZoneChangesConfiguration: cocoascript.CKFetchRecordZoneChangesConfiguration;
