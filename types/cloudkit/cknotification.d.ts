declare namespace cocoascript {
  /**
   * The abstract base class for CloudKit notifications.
   * doc://com.apple.documentation/documentation/cloudkit/cknotification
   */
  interface CKNotification extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428080-notificationid
    notificationID(): cocoascript.CKNotificationID;
    setNotificationID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428078-notificationtype
    notificationType(): cocoascript.CKNotificationType;
    setNotificationType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428119-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428088-ispruned
    isPruned(): cocoascript.BOOL;
    setIsPruned(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428084-alertbody
    alertBody(): cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428095-alertlocalizationkey
    alertLocalizationKey(): cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428105-alertlocalizationargs
    alertLocalizationArgs(): cocoascript.NSString;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428109-alertactionlocalizationkey
    alertActionLocalizationKey(): cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428103-alertlaunchimage
    alertLaunchImage(): cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428077-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428082-badge
    badge(): cocoascript.NSNumber;
    setBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428107-category
    category(): cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428118-subscriptionid
    subscriptionID(): cocoascript.CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/3577533-subscriptionowneruserrecordid
    subscriptionOwnerUserRecordID(): cocoascript.CKRecordID;
    setSubscriptionOwnerUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868440-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868436-titlelocalizationkey
    titleLocalizationKey(): cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868437-titlelocalizationargs
    titleLocalizationArgs(): cocoascript.NSString;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868435-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868438-subtitlelocalizationkey
    subtitleLocalizationKey(): cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868439-subtitlelocalizationargs
    subtitleLocalizationArgs(): cocoascript.NSString;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():cocoascript.CKNotification;
    //
    init():cocoascript.CKNotification;
  }
}

declare const CKNotification: cocoascript.CKNotification;
