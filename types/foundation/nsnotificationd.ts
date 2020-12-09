declare namespace cocoascript {
/**
 * A container for information broadcast through a notification center to all registered observers.
 * doc://com.apple.documentation/documentation/foundation/nsnotification
 */
interface NSNotification extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1412595-init
  init():cocoascript.NSNotification;
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1412464-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSNotification;
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1415764-initwithname
  initWithName_object_userInfo(name: cocoascript.NSNotificationName, object: cocoascript.NSNotification, userInfo: cocoascript.NSDictionary):cocoascript.NSNotification;
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1416472-name
  name(): cocoascript.NSNotificationName;
  setName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1414469-object
  object(): cocoascript.id;
  setObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnotification/1409222-userinfo
  userInfo(): cocoascript.NSDictionary;
  setUserInfo(): void;
  // 
  alloc():cocoascript.NSNotification;
  // 
  init():cocoascript.NSNotification;
}
}
declare const NSNotification: cocoascript.NSNotification;

