declare namespace cocoascript {
  /**
   * The interface used by
   * doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient
   */
  interface NSURLProtocolClient extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1416347-urlprotocol
    URLProtocol_didReceiveResponse_cacheStoragePolicy(protocol: cocoascript.NSURLProtocol, response: cocoascript.NSURLResponse, policy: cocoascript.NSURLCacheStoragePolicy):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1415800-urlprotocol
    URLProtocol_wasRedirectedToRequest_redirectResponse(protocol: cocoascript.NSURLProtocol, request: cocoascript.NSURLRequest, redirectResponse: cocoascript.NSURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1412327-urlprotocol
    URLProtocol_cachedResponseIsValid(protocol: cocoascript.NSURLProtocol, cachedResponse: cocoascript.NSCachedURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1410932-urlprotocol
    URLProtocol_didCancelAuthenticationChallenge(protocol: cocoascript.NSURLProtocol, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1413387-urlprotocol
    URLProtocol_didReceiveAuthenticationChallenge(protocol: cocoascript.NSURLProtocol, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1413131-urlprotocol
    URLProtocol_didFailWithError(protocol: cocoascript.NSURLProtocol, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1411370-urlprotocol
    URLProtocol_didLoadData(protocol: cocoascript.NSURLProtocol, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocolclient/1411543-urlprotocoldidfinishloading
    URLProtocolDidFinishLoading(protocol: cocoascript.NSURLProtocol):void;
  }
}
