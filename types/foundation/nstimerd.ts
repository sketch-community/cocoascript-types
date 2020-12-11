declare namespace cocoascript {
  /**
   * A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.
   * doc://com.apple.documentation/documentation/foundation/nstimer
   */
  interface NSTimer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstimer/2091887-initwithfiredate
    initWithFireDate_interval_repeats_block(date: cocoascript.NSDate, interval: cocoascript.NSTimeInterval, repeats: cocoascript.BOOL, block: cocoascript.NSTimer):cocoascript.NSTimer;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415700-initwithfiredate
    initWithFireDate_interval_target_selector_userInfo_repeats(date: cocoascript.NSDate, ti: cocoascript.NSTimeInterval, t: cocoascript.NSTimer, s: cocoascript.SEL, ui: cocoascript.NSTimer, rep: cocoascript.BOOL):cocoascript.NSTimer;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1414035-fire
    fire():void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415405-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1408249-valid
    valid(): cocoascript.BOOL;
    setValid(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1407353-firedate
    fireDate(): cocoascript.NSDate;
    setFireDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1409024-timeinterval
    timeInterval(): cocoascript.NSTimeInterval;
    setTimeInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1408911-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimer/1415085-tolerance
    tolerance(): cocoascript.NSTimeInterval;
    setTolerance(): void;
    //
    alloc():cocoascript.NSTimer;
    //
    init():cocoascript.NSTimer;
  }
}

declare const NSTimer: cocoascript.NSTimer;
