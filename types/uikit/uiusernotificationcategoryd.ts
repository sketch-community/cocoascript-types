declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uiusernotificationcategory
 */
interface UIUserNotificationCategory extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationcategory/1615383-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationcategory/1615374-actionsforcontext
  actionsForContext(context: cocoascript.UIUserNotificationActionContext):cocoascript.UIUserNotificationAction;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationcategory/1615327-init
  init():cocoascript.UIUserNotificationCategory;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationcategory/1615391-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIUserNotificationCategory;
  // 
  alloc():cocoascript.UIUserNotificationCategory;
  // 
  init():cocoascript.UIUserNotificationCategory;
}
}
declare const UIUserNotificationCategory: cocoascript.UIUserNotificationCategory;

