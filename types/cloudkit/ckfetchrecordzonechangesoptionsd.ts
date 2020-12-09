declare namespace cocoascript {
/**
 * A configuration object that describes the information to fetch from a record zone.
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions
 */
interface CKFetchRecordZoneChangesOptions extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640472-desiredkeys
  desiredKeys(): cocoascript.CKRecordFieldKey;
  setDesiredKeys(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640389-previousserverchangetoken
  previousServerChangeToken(): cocoascript.CKServerChangeToken;
  setPreviousServerChangeToken(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640481-resultslimit
  resultsLimit(): cocoascript.NSUInteger;
  setResultsLimit(): void;
  // 
  alloc():cocoascript.CKFetchRecordZoneChangesOptions;
  // 
  init():cocoascript.CKFetchRecordZoneChangesOptions;
}
}
declare const CKFetchRecordZoneChangesOptions: cocoascript.CKFetchRecordZoneChangesOptions;

