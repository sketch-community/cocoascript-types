declare namespace cocoascript {
  /**
   * An object that uniquely identifies a push notification that a container sends.
   * doc://com.apple.documentation/documentation/cloudkit/cknotificationid
   */
  interface CKNotificationID extends NSObject {
    //
    alloc():cocoascript.CKNotificationID;
    //
    init():cocoascript.CKNotificationID;
  }
}

declare const CKNotificationID: cocoascript.CKNotificationID;
