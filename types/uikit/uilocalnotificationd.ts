declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uilocalnotification
 */
interface UILocalNotification extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616650-firedate
  fireDate(): cocoascript.NSDate;
  setFireDate(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616659-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616643-repeatinterval
  repeatInterval(): cocoascript.NSCalendarUnit;
  setRepeatInterval(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616656-repeatcalendar
  repeatCalendar(): cocoascript.NSCalendar;
  setRepeatCalendar(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616644-region
  region(): cocoascript.CLRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616654-regiontriggersonce
  regionTriggersOnce(): cocoascript.BOOL;
  setRegionTriggersOnce(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616646-alertbody
  alertBody(): cocoascript.NSString;
  setAlertBody(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616648-alertaction
  alertAction(): cocoascript.NSString;
  setAlertAction(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616647-alerttitle
  alertTitle(): cocoascript.NSString;
  setAlertTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616649-hasaction
  hasAction(): cocoascript.BOOL;
  setHasAction(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616660-alertlaunchimage
  alertLaunchImage(): cocoascript.NSString;
  setAlertLaunchImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616655-category
  category(): cocoascript.NSString;
  setCategory(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616658-applicationiconbadgenumber
  applicationIconBadgeNumber(): cocoascript.NSInteger;
  setApplicationIconBadgeNumber(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616651-soundname
  soundName(): cocoascript.NSString;
  setSoundName(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616657-userinfo
  userInfo(): cocoascript.NSDictionary;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616645-init
  init():cocoascript.UILocalNotification;
  // doc://com.apple.documentation/documentation/uikit/uilocalnotification/1616653-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UILocalNotification;
  // 
  alloc():cocoascript.UILocalNotification;
  // 
  init():cocoascript.UILocalNotification;
}
}
declare const UILocalNotification: cocoascript.UILocalNotification;

