declare namespace cocoascript {
  /**
   * An action that the user can take in response to receiving a notification.
   * doc://com.apple.documentation/documentation/foundation/nsusernotificationaction
   */
  interface NSUserNotificationAction extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationaction/1414798-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsusernotificationaction/1410336-title
    title(): cocoascript.NSString;
    setTitle(): void;
    //
    alloc():cocoascript.NSUserNotificationAction;
    //
    init():cocoascript.NSUserNotificationAction;
  }
}

declare const NSUserNotificationAction: cocoascript.NSUserNotificationAction;
