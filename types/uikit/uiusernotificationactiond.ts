declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uiusernotificationaction
 */
interface UIUserNotificationAction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615361-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615358-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615329-activationmode
  activationMode(): cocoascript.UIUserNotificationActivationMode;
  setActivationMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615381-authenticationrequired
  authenticationRequired(): cocoascript.BOOL;
  setAuthenticationRequired(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615385-destructive
  destructive(): cocoascript.BOOL;
  setDestructive(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615399-behavior
  behavior(): cocoascript.UIUserNotificationActionBehavior;
  setBehavior(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615337-parameters
  parameters(): cocoascript.NSDictionary;
  setParameters(): void;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615368-init
  init():cocoascript.UIUserNotificationAction;
  // doc://com.apple.documentation/documentation/uikit/uiusernotificationaction/1615366-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIUserNotificationAction;
  // 
  alloc():cocoascript.UIUserNotificationAction;
  // 
  init():cocoascript.UIUserNotificationAction;
}
}
declare const UIUserNotificationAction: cocoascript.UIUserNotificationAction;

