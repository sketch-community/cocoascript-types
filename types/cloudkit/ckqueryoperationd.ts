declare namespace cocoascript {
/**
 * An operation for executing queries in a database.
 * doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation
 */
interface CKQueryOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1514958-initwithquery
  initWithQuery(query: cocoascript.CKQuery):cocoascript.CKQueryOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515033-initwithcursor
  initWithCursor(cursor: cocoascript.CKQueryCursor):cocoascript.CKQueryOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515115-init
  init():cocoascript.CKQueryOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515127-query
  query(): cocoascript.CKQuery;
  setQuery(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1514975-cursor
  cursor(): cocoascript.CKQueryCursor;
  setCursor(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515269-zoneid
  zoneID(): cocoascript.CKRecordZoneID;
  setZoneID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515078-resultslimit
  resultsLimit(): cocoascript.NSUInteger;
  setResultsLimit(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515268-desiredkeys
  desiredKeys(): cocoascript.CKRecordFieldKey;
  setDesiredKeys(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515283-recordfetchedblock
  recordFetchedBlock(): cocoascript.CKRecord;
  setRecordFetchedBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515067-querycompletionblock
  queryCompletionBlock(): cocoascript.NSError;
  setQueryCompletionBlock(): void;
  // 
  alloc():cocoascript.CKQueryOperation;
  // 
  init():cocoascript.CKQueryOperation;
}
}
declare const CKQueryOperation: cocoascript.CKQueryOperation;

