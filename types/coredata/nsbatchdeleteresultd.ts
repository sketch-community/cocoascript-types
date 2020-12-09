declare namespace cocoascript {
/**
 * The result returned when executing a batch delete request.
 * doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult
 */
interface NSBatchDeleteResult extends NSPersistentStoreResult {
  // doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult/1404922-result
  result(): cocoascript.id;
  setResult(): void;
  // doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult/1404941-resulttype
  resultType(): cocoascript.NSBatchDeleteRequestResultType;
  setResultType(): void;
  // 
  alloc():cocoascript.NSBatchDeleteResult;
  // 
  init():cocoascript.NSBatchDeleteResult;
}
}
declare const NSBatchDeleteResult: cocoascript.NSBatchDeleteResult;

