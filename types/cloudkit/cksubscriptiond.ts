declare namespace cocoascript {
  /**
   * An abstract base class for subscriptions.
   * doc://com.apple.documentation/documentation/cloudkit/cksubscription
   */
  interface CKSubscription extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1514948-notificationinfo
    notificationInfo(): cocoascript.CKNotificationInfo;
    setNotificationInfo(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515199-subscriptionid
    subscriptionID(): cocoascript.CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515250-subscriptiontype
    subscriptionType(): cocoascript.CKSubscriptionType;
    setSubscriptionType(): void;
    //
    alloc():cocoascript.CKSubscription;
    //
    init():cocoascript.CKSubscription;
  }
}

declare const CKSubscription: cocoascript.CKSubscription;
