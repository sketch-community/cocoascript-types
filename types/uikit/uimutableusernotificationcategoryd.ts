declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uimutableusernotificationcategory
 */
interface UIMutableUserNotificationCategory extends UIUserNotificationCategory {
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationcategory/1615376-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationcategory/1615397-setactions
  setActions_forContext(actions: cocoascript.UIUserNotificationAction, context: cocoascript.UIUserNotificationActionContext):void;
  // 
  alloc():cocoascript.UIMutableUserNotificationCategory;
  // 
  init():cocoascript.UIMutableUserNotificationCategory;
}
}
declare const UIMutableUserNotificationCategory: cocoascript.UIMutableUserNotificationCategory;

