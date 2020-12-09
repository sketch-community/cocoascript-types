declare namespace cocoascript {
/**
 * An abstract class representing a stream.
 * doc://com.apple.documentation/documentation/foundation/nsstream
 */
interface NSStream extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsstream/1410226-propertyforkey
  propertyForKey(key: cocoascript.NSStreamPropertyKey):cocoascript.NSStream;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1412045-setproperty
  setProperty_forKey(property: cocoascript.NSStream, key: cocoascript.NSStreamPropertyKey):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1418423-delegate
  delegate(): cocoascript.NSStreamDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1411963-open
  open():void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1410399-close
  close():void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1417370-scheduleinrunloop
  scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1411285-removefromrunloop
  removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1413038-streamstatus
  streamStatus(): cocoascript.NSStreamStatus;
  setStreamStatus(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstream/1416359-streamerror
  streamError(): cocoascript.NSError;
  setStreamError(): void;
  // 
  alloc():cocoascript.NSStream;
  // 
  init():cocoascript.NSStream;
}
}
declare const NSStream: cocoascript.NSStream;

