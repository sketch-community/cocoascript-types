declare namespace cocoascript {
  /**
   * A notification dispatch mechanism that enables the broadcast of notifications across task boundaries.
   * doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter
   */
  interface NSDistributedNotificationCenter extends NSNotificationCenter {
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1414151-addobserver
    addObserver_selector_name_object(observer: cocoascript.NSDistributedNotificationCenter, aSelector: cocoascript.SEL, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1414136-addobserver
    addObserver_selector_name_object_suspensionBehavior(observer: cocoascript.NSDistributedNotificationCenter, selector: cocoascript.SEL, name: cocoascript.NSNotificationName, object: cocoascript.NSString, suspensionBehavior: cocoascript.NSNotificationSuspensionBehavior):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1416236-removeobserver
    removeObserver_name_object(observer: cocoascript.NSDistributedNotificationCenter, aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1410991-postnotificationname
    postNotificationName_object(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1416995-postnotificationname
    postNotificationName_object_userInfo(aName: cocoascript.NSNotificationName, anObject: cocoascript.NSString, aUserInfo: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1418360-postnotificationname
    postNotificationName_object_userInfo_deliverImmediately(name: cocoascript.NSNotificationName, object: cocoascript.NSString, userInfo: cocoascript.NSDictionary, deliverImmediately: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1417581-postnotificationname
    postNotificationName_object_userInfo_options(name: cocoascript.NSNotificationName, object: cocoascript.NSString, userInfo: cocoascript.NSDictionary, options: cocoascript.NSDistributedNotificationOptions):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributednotificationcenter/1407301-suspended
    suspended(): cocoascript.BOOL;
    setSuspended(): void;
    //
    alloc():cocoascript.NSDistributedNotificationCenter;
    //
    init():cocoascript.NSDistributedNotificationCenter;
  }
}

declare const NSDistributedNotificationCenter: cocoascript.NSDistributedNotificationCenter;
