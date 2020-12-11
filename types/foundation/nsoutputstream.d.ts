declare namespace cocoascript {
  /**
   * A stream that provides write-only stream functionality.
   * doc://com.apple.documentation/documentation/foundation/nsoutputstream
   */
  interface NSOutputStream extends NSStream {
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1409909-inittomemory
    initToMemory():cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1410805-inittobuffer
    initToBuffer_capacity(buffer: number, capacity: cocoascript.NSUInteger):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1416367-inittofileatpath
    initToFileAtPath_append(path: cocoascript.NSString, shouldAppend: cocoascript.BOOL):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1414446-initwithurl
    initWithURL_append(url: cocoascript.NSURL, shouldAppend: cocoascript.BOOL):cocoascript.NSOutputStream;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1411335-hasspaceavailable
    hasSpaceAvailable(): cocoascript.BOOL;
    setHasSpaceAvailable(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoutputstream/1410720-write
    write_maxLength(buffer: number, len: cocoascript.NSUInteger):cocoascript.NSInteger;
    //
    alloc():cocoascript.NSOutputStream;
    //
    init():cocoascript.NSOutputStream;
  }
}

declare const NSOutputStream: cocoascript.NSOutputStream;
