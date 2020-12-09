declare namespace cocoascript {
/**
 * A notification dispatch mechanism that enables the broadcast of information to registered observers.
 * doc://com.apple.documentation/documentation/foundation/nsnotificationcenter
 */
interface NSNotificationCenter extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1414169-defaultcenter
  defaultCenter(): cocoascript.NSNotificationCenter;
  setDefaultCenter(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1411723-addobserverforname
  addObserverForName_object_queue_usingBlock(name: cocoascript.NSNotificationName, obj: cocoascript.NSNotificationCenter, queue: cocoascript.NSOperationQueue, block: cocoascript.NSNotification):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1415360-addobserver
  addObserver_selector_name_object(observer: cocoascript.NSNotificationCenter, aSelector: cocoascript.SEL, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1407263-removeobserver
  removeObserver_name_object(observer: cocoascript.NSNotificationCenter, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1413994-removeobserver
  removeObserver(observer: cocoascript.NSNotificationCenter):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1410472-postnotification
  postNotification(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1410608-postnotificationname
  postNotificationName_object_userInfo(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter, aUserInfo: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/foundation/nsnotificationcenter/1415812-postnotificationname
  postNotificationName_object(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSNotificationCenter):void;
  // 
  alloc():cocoascript.NSNotificationCenter;
  // 
  init():cocoascript.NSNotificationCenter;
}
}
declare const NSNotificationCenter: cocoascript.NSNotificationCenter;

