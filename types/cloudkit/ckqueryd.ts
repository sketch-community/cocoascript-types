declare namespace cocoascript {
/**
 * A query that describes the criteria to apply when searching for records in a database.
 * doc://com.apple.documentation/documentation/cloudkit/ckquery
 */
interface CKQuery extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413119-initwithrecordtype
  initWithRecordType_predicate(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate):cocoascript.CKQuery;
  // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413111-initwithcoder
  initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKQuery;
  // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413117-recordtype
  recordType(): cocoascript.CKRecordType;
  setRecordType(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413112-predicate
  predicate(): cocoascript.NSPredicate;
  setPredicate(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413121-sortdescriptors
  sortDescriptors(): cocoascript.NSSortDescriptor;
  setSortDescriptors(): void;
  // 
  alloc():cocoascript.CKQuery;
  // 
  init():cocoascript.CKQuery;
}
}
declare const CKQuery: cocoascript.CKQuery;

