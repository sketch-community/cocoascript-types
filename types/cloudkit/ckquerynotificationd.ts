declare namespace cocoascript {
/**
 * An object that represents a push notification that a query subscription generates.
 * doc://com.apple.documentation/documentation/cloudkit/ckquerynotification
 */
interface CKQueryNotification extends CKNotification {
  // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1640449-databasescope
  databaseScope(): cocoascript.CKDatabaseScope;
  setDatabaseScope(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428123-querynotificationreason
  queryNotificationReason(): cocoascript.CKQueryNotificationReason;
  setQueryNotificationReason(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428134-recordid
  recordID(): cocoascript.CKRecordID;
  setRecordID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428114-recordfields
  recordFields(): cocoascript.id;
  setRecordFields(): void;
  // 
  alloc():cocoascript.CKQueryNotification;
  // 
  init():cocoascript.CKQueryNotification;
}
}
declare const CKQueryNotification: cocoascript.CKQueryNotification;

