declare namespace cocoascript {
  /**
   * A static byte buffer in memory.
   * doc://com.apple.documentation/documentation/foundation/nsdata
   */
  interface NSData extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412793-initwithbytes
    initWithBytes_length(bytes: void, length: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1409454-initwithbytesnocopy
    initWithBytesNoCopy_length(bytes: void, length: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417337-initwithbytesnocopy
    initWithBytesNoCopy_length_deallocator(bytes: void, length: cocoascript.NSUInteger, deallocator: cocoascript.NSUInteger):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416020-initwithbytesnocopy
    initWithBytesNoCopy_length_freeWhenDone(bytes: void, length: cocoascript.NSUInteger, b: cocoascript.BOOL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417055-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408672-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1411145-initwithcontentsoffile
    initWithContentsOfFile_options_error(path: cocoascript.NSString, readOptionsMask: cocoascript.NSDataReadingOptions, errorPtr: cocoascript._Nullable):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413892-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1407864-initwithcontentsofurl
    initWithContentsOfURL_options_error(url: cocoascript.NSURL, readOptionsMask: cocoascript.NSDataReadingOptions, errorPtr: cocoascript._Nullable):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413302-initwithcontentsofmappedfile
    initWithContentsOfMappedFile(path: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408033-writetofile
    writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1414800-writetofile
    writeToFile_options_error(path: cocoascript.NSString, writeOptionsMask: cocoascript.NSDataWritingOptions, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1415134-writetourl
    writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410595-writetourl
    writeToURL_options_error(url: cocoascript.NSURL, writeOptionsMask: cocoascript.NSDataWritingOptions, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1417833-initwithbase64encodeddata
    initWithBase64EncodedData_options(base64Data: cocoascript.NSData, options: cocoascript.NSDataBase64DecodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1547237-initwithbase64encoding
    initWithBase64Encoding(base64String: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410081-initwithbase64encodedstring
    initWithBase64EncodedString_options(base64String: cocoascript.NSString, options: cocoascript.NSDataBase64DecodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412739-base64encodeddatawithoptions
    base64EncodedDataWithOptions(options: cocoascript.NSDataBase64EncodingOptions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1413546-base64encodedstringwithoptions
    base64EncodedStringWithOptions(options: cocoascript.NSDataBase64EncodingOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1547242-base64encoding
    base64Encoding():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410616-bytes
    bytes(): void;
    setBytes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1408400-enumeratebyterangesusingblock
    enumerateByteRangesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416532-getbytes
    getBytes(buffer: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1411450-getbytes
    getBytes_length(buffer: void, length: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1407224-getbytes
    getBytes_range(buffer: void, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410128-subdatawithrange
    subdataWithRange(range: cocoascript.NSRange):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1410391-rangeofdata
    rangeOfData_options_range(dataToFind: cocoascript.NSData, mask: cocoascript.NSDataSearchOptions, searchRange: cocoascript.NSRange):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1409330-isequaltodata
    isEqualToData(other: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1416769-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/1412579-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdata/3174960-compresseddatausingalgorithm
    compressedDataUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript._Nullable):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsdata/3174961-decompresseddatausingalgorithm
    decompressedDataUsingAlgorithm_error(algorithm: cocoascript.NSDataCompressionAlgorithm, error: cocoascript._Nullable):cocoascript.NSData;
    //
    alloc():cocoascript.NSData;
    //
    init():cocoascript.NSData;
  }
}

declare const NSData: cocoascript.NSData;
