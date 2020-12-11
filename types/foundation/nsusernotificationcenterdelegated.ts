declare namespace cocoascript {
  /**
   * An interface that enables customizing the behavior of the default notification center.
   * doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate
   */
  interface NSUserNotificationCenterDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1410579-usernotificationcenter
    userNotificationCenter_didDeliverNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1418378-usernotificationcenter
    userNotificationCenter_didActivateNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationcenterdelegate/1409032-usernotificationcenter
    userNotificationCenter_shouldPresentNotification(center: cocoascript.NSUserNotificationCenter, notification: cocoascript.NSUserNotification):cocoascript.BOOL;
  }
}
