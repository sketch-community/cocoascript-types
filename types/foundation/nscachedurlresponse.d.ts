declare namespace cocoascript {
  /**
   * A cached response to a URL request.
   * doc://com.apple.documentation/documentation/foundation/nscachedurlresponse
   */
  interface NSCachedURLResponse extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1413035-initwithresponse
    initWithResponse_data(response: cocoascript.NSURLResponse, data: cocoascript.NSData):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411556-initwithresponse
    initWithResponse_data_userInfo_storagePolicy(response: cocoascript.NSURLResponse, data: cocoascript.NSData, userInfo: cocoascript.NSDictionary, storagePolicy: cocoascript.NSURLCacheStoragePolicy):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1414011-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411077-response
    response(): cocoascript.NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1412269-storagepolicy
    storagePolicy(): cocoascript.NSURLCacheStoragePolicy;
    setStoragePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nscachedurlresponse/1411900-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSCachedURLResponse;
    //
    init():cocoascript.NSCachedURLResponse;
  }
}

declare const NSCachedURLResponse: cocoascript.NSCachedURLResponse;
