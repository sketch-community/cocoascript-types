declare namespace cocoascript {
/**
 * An application shortcut item, also called a 
 * doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem
 */
interface UIApplicationShortcutItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623355-initwithtype
  initWithType_localizedTitle(type: cocoascript.NSString, localizedTitle: cocoascript.NSString):cocoascript.UIApplicationShortcutItem;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623372-initwithtype
  initWithType_localizedTitle_localizedSubtitle_icon_userInfo(type: cocoascript.NSString, localizedTitle: cocoascript.NSString, localizedSubtitle: cocoascript.NSString, icon: cocoascript.UIApplicationShortcutIcon, userInfo: cocoascript.NSSecureCoding):cocoascript.UIApplicationShortcutItem;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623354-localizedtitle
  localizedTitle(): cocoascript.NSString;
  setLocalizedTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623376-localizedsubtitle
  localizedSubtitle(): cocoascript.NSString;
  setLocalizedSubtitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623382-type
  type(): cocoascript.NSString;
  setType(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623352-icon
  icon(): cocoascript.UIApplicationShortcutIcon;
  setIcon(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/1623370-userinfo
  userInfo(): cocoascript.NSSecureCoding;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationshortcutitem/3238038-targetcontentidentifier
  targetContentIdentifier(): cocoascript.id;
  setTargetContentIdentifier(): void;
  // 
  alloc():cocoascript.UIApplicationShortcutItem;
  // 
  init():cocoascript.UIApplicationShortcutItem;
}
}
declare const UIApplicationShortcutItem: cocoascript.UIApplicationShortcutItem;

