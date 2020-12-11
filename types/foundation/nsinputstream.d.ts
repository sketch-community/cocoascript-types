declare namespace cocoascript {
  /**
   * A stream that provides read-only stream functionality.
   * doc://com.apple.documentation/documentation/foundation/nsinputstream
   */
  interface NSInputStream extends NSStream {
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1412470-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1408976-initwithfileatpath
    initWithFileAtPath(path: cocoascript.NSString):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1417891-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1411544-read
    read_maxLength(buffer: number, len: cocoascript.NSUInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1416811-getbuffer
    getBuffer_length(buffer: cocoascript._Nullable, len: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsinputstream/1409410-hasbytesavailable
    hasBytesAvailable(): cocoascript.BOOL;
    setHasBytesAvailable(): void;
    //
    alloc():cocoascript.NSInputStream;
    //
    init():cocoascript.NSInputStream;
  }
}

declare const NSInputStream: cocoascript.NSInputStream;
