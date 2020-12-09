declare namespace cocoascript {
/**
 * A notification that can be scheduled for display in the notification center.
 * doc://com.apple.documentation/documentation/foundation/nsusernotification
 */
interface NSUserNotification extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1415172-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413777-subtitle
  subtitle(): cocoascript.NSString;
  setSubtitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416180-informativetext
  informativeText(): cocoascript.NSString;
  setInformativeText(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1414856-contentimage
  contentImage(): cocoascript.NSImage;
  setContentImage(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416410-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416115-response
  response(): cocoascript.NSAttributedString;
  setResponse(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1410983-responseplaceholder
  responsePlaceholder(): cocoascript.NSString;
  setResponsePlaceholder(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411564-hasactionbutton
  hasActionButton(): cocoascript.BOOL;
  setHasActionButton(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411669-actionbuttontitle
  actionButtonTitle(): cocoascript.NSString;
  setActionButtonTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1412410-otherbuttontitle
  otherButtonTitle(): cocoascript.NSString;
  setOtherButtonTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413216-hasreplybutton
  hasReplyButton(): cocoascript.BOOL;
  setHasReplyButton(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1407781-deliverydate
  deliveryDate(): cocoascript.NSDate;
  setDeliveryDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416009-actualdeliverydate
  actualDeliveryDate(): cocoascript.NSDate;
  setActualDeliveryDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411500-deliveryrepeatinterval
  deliveryRepeatInterval(): cocoascript.NSDateComponents;
  setDeliveryRepeatInterval(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416406-deliverytimezone
  deliveryTimeZone(): cocoascript.NSTimeZone;
  setDeliveryTimeZone(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1409281-presented
  presented(): cocoascript.BOOL;
  setPresented(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1411995-remote
  remote(): cocoascript.BOOL;
  setRemote(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1412612-soundname
  soundName(): cocoascript.NSString;
  setSoundName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1416143-activationtype
  activationType(): cocoascript.NSUserNotificationActivationType;
  setActivationType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1413264-additionalactivationaction
  additionalActivationAction(): cocoascript.NSUserNotificationAction;
  setAdditionalActivationAction(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1407829-additionalactions
  additionalActions(): cocoascript.NSUserNotificationAction;
  setAdditionalActions(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1415675-userinfo
  userInfo(): cocoascript.id;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsusernotification/1410841-init
  init():cocoascript.NSUserNotification;
  // 
  alloc():cocoascript.NSUserNotification;
  // 
  init():cocoascript.NSUserNotification;
}
}
declare const NSUserNotification: cocoascript.NSUserNotification;

