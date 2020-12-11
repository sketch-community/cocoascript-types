declare namespace cocoascript {
  /**
   * An object that describes the configuration of a subscription’s push notifications.
   * doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo
   */
  interface CKNotificationInfo extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515082-category
    category(): cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2887430-collapseidkey
    collapseIDKey(): cocoascript.NSString;
    setCollapseIDKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514996-shouldbadge
    shouldBadge(): cocoascript.BOOL;
    setShouldBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515270-alertbody
    alertBody(): cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514968-alertlocalizationkey
    alertLocalizationKey(): cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515182-alertlocalizationargs
    alertLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514945-alertactionlocalizationkey
    alertActionLocalizationKey(): cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515075-alertlaunchimage
    alertLaunchImage(): cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514987-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515110-shouldsendcontentavailable
    shouldSendContentAvailable(): cocoascript.BOOL;
    setShouldSendContentAvailable(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2868500-shouldsendmutablecontent
    shouldSendMutableContent(): cocoascript.BOOL;
    setShouldSendMutableContent(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514931-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869870-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869865-titlelocalizationkey
    titleLocalizationKey(): cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869866-titlelocalizationargs
    titleLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869863-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869864-subtitlelocalizationkey
    subtitleLocalizationKey(): cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869869-subtitlelocalizationargs
    subtitleLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():cocoascript.CKNotificationInfo;
    //
    init():cocoascript.CKNotificationInfo;
  }
}

declare const CKNotificationInfo: cocoascript.CKNotificationInfo;
