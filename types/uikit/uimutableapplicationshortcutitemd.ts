declare namespace cocoascript {
/**
 * An item that specifies a configurable user-initiated action for your app (the item is also called a mutable Home screen dynamic quick action). 
 * doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem
 */
interface UIMutableApplicationShortcutItem extends UIApplicationShortcutItem {
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/1623371-localizedtitle
  localizedTitle(): cocoascript.NSString;
  setLocalizedTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/1623384-localizedsubtitle
  localizedSubtitle(): cocoascript.NSString;
  setLocalizedSubtitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/1623362-type
  type(): cocoascript.NSString;
  setType(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/1623351-icon
  icon(): cocoascript.UIApplicationShortcutIcon;
  setIcon(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/1623375-userinfo
  userInfo(): cocoascript.NSSecureCoding;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/uikit/uimutableapplicationshortcutitem/3238039-targetcontentidentifier
  targetContentIdentifier(): cocoascript.id;
  setTargetContentIdentifier(): void;
  // 
  alloc():cocoascript.UIMutableApplicationShortcutItem;
  // 
  init():cocoascript.UIMutableApplicationShortcutItem;
}
}
declare const UIMutableApplicationShortcutItem: cocoascript.UIMutableApplicationShortcutItem;

