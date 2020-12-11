declare namespace cocoascript {
  /**
   * An abstract class that represents a communication channel.
   * doc://com.apple.documentation/documentation/foundation/nsport
   */
  interface NSPort extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsport/1399521-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399503-valid
    valid(): cocoascript.BOOL;
    setValid(): void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399527-setdelegate
    setDelegate(anObject: cocoascript.NSPortDelegate):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399545-delegate
    delegate():cocoascript.NSPortDelegate;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399553-addconnection
    addConnection_toRunLoop_forMode(conn: cocoascript.NSConnection, runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399501-removeconnection
    removeConnection_fromRunLoop_forMode(conn: cocoascript.NSConnection, runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399537-sendbeforedate
    sendBeforeDate_components_from_reserved(limitDate: cocoascript.NSDate, components: cocoascript.NSMutableArray, receivePort: cocoascript.NSPort, headerSpaceReserved: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399482-sendbeforedate
    sendBeforeDate_msgid_components_from_reserved(limitDate: cocoascript.NSDate, msgID: cocoascript.NSUInteger, components: cocoascript.NSMutableArray, receivePort: cocoascript.NSPort, headerSpaceReserved: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399529-reservedspacelength
    reservedSpaceLength(): cocoascript.NSUInteger;
    setReservedSpaceLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399525-removefromrunloop
    removeFromRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsport/1399517-scheduleinrunloop
    scheduleInRunLoop_forMode(runLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    //
    alloc():cocoascript.NSPort;
    //
    init():cocoascript.NSPort;
  }
}

declare const NSPort: cocoascript.NSPort;
