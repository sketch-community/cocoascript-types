declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction
 */
interface UIMutableUserNotificationAction extends UIUserNotificationAction {
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615379-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615370-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615372-activationmode
  activationMode(): cocoascript.UIUserNotificationActivationMode;
  setActivationMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615389-authenticationrequired
  authenticationRequired(): cocoascript.BOOL;
  setAuthenticationRequired(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615322-destructive
  destructive(): cocoascript.BOOL;
  setDestructive(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615395-behavior
  behavior(): cocoascript.UIUserNotificationActionBehavior;
  setBehavior(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableusernotificationaction/1615354-parameters
  parameters(): cocoascript.NSDictionary;
  setParameters(): void;
  // 
  alloc():cocoascript.UIMutableUserNotificationAction;
  // 
  init():cocoascript.UIMutableUserNotificationAction;
}
}
declare const UIMutableUserNotificationAction: cocoascript.UIMutableUserNotificationAction;

