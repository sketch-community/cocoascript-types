declare namespace cocoascript {
/**
 * A notification that triggers when the contents of a database change.
 * doc://com.apple.documentation/documentation/cloudkit/ckdatabasenotification
 */
interface CKDatabaseNotification extends CKNotification {
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabasenotification/1640510-databasescope
  databaseScope(): cocoascript.CKDatabaseScope;
  setDatabaseScope(): void;
  // 
  alloc():cocoascript.CKDatabaseNotification;
  // 
  init():cocoascript.CKDatabaseNotification;
}
}
declare const CKDatabaseNotification: cocoascript.CKDatabaseNotification;

