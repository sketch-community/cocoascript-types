declare namespace cocoascript {
  /**
   * A port that can be used as an endpoint for distributed object connections (or raw messaging).
   * doc://com.apple.documentation/documentation/foundation/nsmachport
   */
  interface NSMachPort extends NSPort {
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399499-initwithmachport
    initWithMachPort(machPort: number):cocoascript.NSMachPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399559-initwithmachport
    initWithMachPort_options(machPort: number, f: cocoascript.NSMachPortOptions):cocoascript.NSMachPort;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399539-machport
    machPort(): number;
    setMachPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399555-removefromrunloop
    removeFromRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399523-scheduleinrunloop
    scheduleInRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399476-delegate
    delegate():cocoascript.NSMachPortDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsmachport/1399547-setdelegate
    setDelegate(anObject: cocoascript.NSMachPortDelegate):void;
    //
    alloc():cocoascript.NSMachPort;
    //
    init():cocoascript.NSMachPort;
  }
}

declare const NSMachPort: cocoascript.NSMachPort;
