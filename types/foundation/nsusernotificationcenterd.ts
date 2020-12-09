declare namespace cocoascript {
/**
 * An object that delivers notifications from apps to the user.
 * doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter
 */
interface NSUserNotificationCenter extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416403-defaultusernotificationcenter
  defaultUserNotificationCenter(): cocoascript.NSUserNotificationCenter;
  setDefaultUserNotificationCenter(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1407647-schedulenotification
  scheduleNotification(notification: cocoascript.NSUserNotification):void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1411832-schedulednotifications
  scheduledNotifications(): cocoascript.NSUserNotification;
  setScheduledNotifications(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1415613-removeschedulednotification
  removeScheduledNotification(notification: cocoascript.NSUserNotification):void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1414633-delivernotification
  deliverNotification(notification: cocoascript.NSUserNotification):void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1407791-deliverednotifications
  deliveredNotifications(): cocoascript.NSUserNotification;
  setDeliveredNotifications(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416057-removedeliverednotification
  removeDeliveredNotification(notification: cocoascript.NSUserNotification):void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1416204-removealldeliverednotifications
  removeAllDeliveredNotifications():void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenter/1410385-delegate
  delegate(): cocoascript.NSUserNotificationCenterDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.NSUserNotificationCenter;
  // 
  init():cocoascript.NSUserNotificationCenter;
}
}
declare const NSUserNotificationCenter: cocoascript.NSUserNotificationCenter;

