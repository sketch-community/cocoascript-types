declare namespace cocoascript {
/**
 * A concrete class used to represent the results of an asynchronous request.
 * doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult
 */
interface NSPersistentStoreAsynchronousResult extends NSPersistentStoreResult {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404916-managedobjectcontext
  managedObjectContext(): cocoascript.NSManagedObjectContext;
  setManagedObjectContext(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404904-operationerror
  operationError(): cocoascript.NSError;
  setOperationError(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404920-progress
  progress(): cocoascript.NSProgress;
  setProgress(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404924-cancel
  cancel():void;
  // 
  alloc():cocoascript.NSPersistentStoreAsynchronousResult;
  // 
  init():cocoascript.NSPersistentStoreAsynchronousResult;
}
}
declare const NSPersistentStoreAsynchronousResult: cocoascript.NSPersistentStoreAsynchronousResult;

