declare namespace cocoascript {
/**
 * A notification center buffer.
 * doc://com.apple.documentation/documentation/foundation/nsnotificationqueue
 */
interface NSNotificationQueue extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1410062-initwithnotificationcenter
  initWithNotificationCenter(notificationCenter: cocoascript.NSNotificationCenter):cocoascript.NSNotificationQueue;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1412392-defaultqueue
  defaultQueue(): cocoascript.NSNotificationQueue;
  setDefaultQueue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1413873-enqueuenotification
  enqueueNotification_postingStyle_coalesceMask_forModes(notification: cocoascript.NSNotification, postingStyle: cocoascript.NSPostingStyle, coalesceMask: cocoascript.NSNotificationCoalescing, modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1416340-enqueuenotification
  enqueueNotification_postingStyle(notification: cocoascript.NSNotification, postingStyle: cocoascript.NSPostingStyle):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationqueue/1416688-dequeuenotificationsmatching
  dequeueNotificationsMatching_coalesceMask(notification: cocoascript.NSNotification, coalesceMask: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.NSNotificationQueue;
  // 
  init():cocoascript.NSNotificationQueue;
}
}
declare const NSNotificationQueue: cocoascript.NSNotificationQueue;

