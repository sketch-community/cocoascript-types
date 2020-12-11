declare namespace cocoascript {
  /**
   * An object representing a dynamic byte buffer in memory.
   * doc://com.apple.documentation/documentation/foundation/nsmutabledata
   */
  interface NSMutableData extends NSData {
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413350-initwithcapacity
    initWithCapacity(capacity: cocoascript.NSUInteger):cocoascript.NSMutableData;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413159-initwithlength
    initWithLength(length: cocoascript.NSUInteger):cocoascript.NSMutableData;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1410770-mutablebytes
    mutableBytes(): void;
    setMutableBytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1413333-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1407704-appendbytes
    appendBytes_length(bytes: void, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1410724-appenddata
    appendData(other: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1416186-increaselengthby
    increaseLengthBy(extraLength: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1414281-replacebytesinrange
    replaceBytesInRange_withBytes(range: cocoascript.NSRange, bytes: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1412428-replacebytesinrange
    replaceBytesInRange_withBytes_length(range: cocoascript.NSRange, replacementBytes: void, replacementLength: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1415526-resetbytesinrange
    resetBytesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/1417012-setdata
    setData(data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/3174967-compressusingalgorithm
    compressUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsmutabledata/3174968-decompressusingalgorithm
    decompressUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.NSMutableData;
    //
    init():cocoascript.NSMutableData;
  }
}

declare const NSMutableData: cocoascript.NSMutableData;
