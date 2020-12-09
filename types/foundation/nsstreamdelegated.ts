declare namespace cocoascript {
/**
 * An interface that delegates of a stream instance use to handle events on the stream.
 * doc://com.apple.documentation/documentation/foundation/nsstreamdelegate
 */
interface NSStreamDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsstreamdelegate/1410079-stream
  stream_handleEvent(aStream: cocoascript.NSStream, eventCode: cocoascript.NSStreamEvent):void;
}
}

