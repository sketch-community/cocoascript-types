declare namespace cocoascript {
/**
 * A set of changes in the persistent history based on a context save or batch operation.
 * doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction
 */
interface NSPersistentHistoryTransaction extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894946-objectidnotification
  objectIDNotification():cocoascript.NSNotification;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/3240596-fetchrequest
  fetchRequest(): cocoascript.NSFetchRequest;
  setFetchRequest(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/3240594-entitydescription
  entityDescription(): cocoascript.NSEntityDescription;
  setEntityDescription(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894947-author
  author(): cocoascript.NSString;
  setAuthor(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894943-bundleid
  bundleID(): cocoascript.NSString;
  setBundleID(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894948-changes
  changes(): cocoascript.NSPersistentHistoryChange;
  setChanges(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894944-contextname
  contextName(): cocoascript.NSString;
  setContextName(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894939-processid
  processID(): cocoascript.NSString;
  setProcessID(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894941-storeid
  storeID(): cocoascript.NSString;
  setStoreID(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894940-timestamp
  timestamp(): cocoascript.NSDate;
  setTimestamp(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894938-token
  token(): cocoascript.NSPersistentHistoryToken;
  setToken(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894945-transactionnumber
  transactionNumber(): number;
  setTransactionNumber(): void;
  // 
  alloc():cocoascript.NSPersistentHistoryTransaction;
  // 
  init():cocoascript.NSPersistentHistoryTransaction;
}
}
declare const NSPersistentHistoryTransaction: cocoascript.NSPersistentHistoryTransaction;

