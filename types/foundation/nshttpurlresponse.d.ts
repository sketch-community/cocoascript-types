declare namespace cocoascript {
  /**
   * The metadata associated with the response to an HTTP protocol URL load request.
   * doc://com.apple.documentation/documentation/foundation/nshttpurlresponse
   */
  interface NSHTTPURLResponse extends NSURLResponse {
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1415870-initwithurl
    initWithURL_statusCode_HTTPVersion_headerFields(url: cocoascript.NSURL, statusCode: cocoascript.NSInteger, HTTPVersion: cocoascript.NSString, headerFields: cocoascript.NSString):cocoascript.NSHTTPURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1417930-allheaderfields
    allHeaderFields(): cocoascript.NSDictionary;
    setAllHeaderFields(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/3240613-valueforhttpheaderfield
    valueForHTTPHeaderField(field: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nshttpurlresponse/1409395-statuscode
    statusCode(): cocoascript.NSInteger;
    setStatusCode(): void;
    //
    alloc():cocoascript.NSHTTPURLResponse;
    //
    init():cocoascript.NSHTTPURLResponse;
  }
}

declare const NSHTTPURLResponse: cocoascript.NSHTTPURLResponse;
