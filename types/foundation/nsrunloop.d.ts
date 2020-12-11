declare namespace cocoascript {
  /**
   * The programmatic interface to objects that manage input sources.
   * doc://com.apple.documentation/documentation/foundation/nsrunloop
   */
  interface NSRunLoop extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412291-currentrunloop
    currentRunLoop(): cocoascript.NSRunLoop;
    setCurrentRunLoop(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412652-currentmode
    currentMode(): cocoascript.NSRunLoopMode;
    setCurrentMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412837-limitdateformode
    limitDateForMode(mode: cocoascript.NSRunLoopMode):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418388-mainrunloop
    mainRunLoop(): cocoascript.NSRunLoop;
    setMainRunLoop(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1410140-getcfrunloop
    getCFRunLoop():cocoascript.CFRunLoopRef;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418468-addtimer
    addTimer_forMode(timer: cocoascript.NSTimer, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1417637-addport
    addPort_forMode(aPort: cocoascript.NSPort, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1414332-removeport
    removePort_forMode(aPort: cocoascript.NSPort, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1577695-configureasserver
    configureAsServer():void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1412430-run
    run():void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1411525-runmode
    runMode_beforeDate(mode: cocoascript.NSRunLoopMode, limitDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1415778-rununtildate
    runUntilDate(limitDate: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1417143-acceptinputformode
    acceptInputForMode_beforeDate(mode: cocoascript.NSRunLoopMode, limitDate: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1409310-performselector
    performSelector_target_argument_order_modes(aSelector: cocoascript.SEL, target: cocoascript.NSRunLoop, arg: cocoascript.NSRunLoop, order: cocoascript.NSUInteger, modes: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1418077-cancelperformselector
    cancelPerformSelector_target_argument(aSelector: cocoascript.SEL, target: cocoascript.NSRunLoop, arg: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/1414208-cancelperformselectorswithtarget
    cancelPerformSelectorsWithTarget(target: cocoascript.NSRunLoop):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/2091881-performblock
    performBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsrunloop/2091880-performinmodes
    performInModes_block(modes: cocoascript.NSRunLoopMode, block: void):void;
    //
    alloc():cocoascript.NSRunLoop;
    //
    init():cocoascript.NSRunLoop;
  }
}

declare const NSRunLoop: cocoascript.NSRunLoop;
