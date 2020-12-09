declare namespace cocoascript {
/**
 * An operation that marks push notifications as read by your app.
 * doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation
 */
interface CKMarkNotificationsReadOperation extends CKOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515228-initwithnotificationidstomarkrea
  initWithNotificationIDsToMarkRead(notificationIDs: cocoascript.CKNotificationID):cocoascript.CKMarkNotificationsReadOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1640383-init
  init():cocoascript.CKMarkNotificationsReadOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515056-notificationids
  notificationIDs(): cocoascript.CKNotificationID;
  setNotificationIDs(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515317-marknotificationsreadcompletionb
  markNotificationsReadCompletionBlock(): cocoascript.NSError;
  setMarkNotificationsReadCompletionBlock(): void;
  // 
  alloc():cocoascript.CKMarkNotificationsReadOperation;
  // 
  init():cocoascript.CKMarkNotificationsReadOperation;
}
}
declare const CKMarkNotificationsReadOperation: cocoascript.CKMarkNotificationsReadOperation;

