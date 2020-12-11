declare namespace cocoascript {
  /**
   * An object that maps URL requests to cached response objects.
   * doc://com.apple.documentation/documentation/foundation/nsurlcache
   */
  interface NSURLCache extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1413377-sharedurlcache
    sharedURLCache(): cocoascript.NSURLCache;
    setSharedURLCache(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/3240612-initwithmemorycapacity
    initWithMemoryCapacity_diskCapacity_directoryURL(memoryCapacity: cocoascript.NSUInteger, diskCapacity: cocoascript.NSUInteger, directoryURL: cocoascript.NSURL):cocoascript.NSURLCache;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415637-initwithmemorycapacity
    initWithMemoryCapacity_diskCapacity_diskPath(memoryCapacity: cocoascript.NSUInteger, diskCapacity: cocoascript.NSUInteger, path: cocoascript.NSString):cocoascript.NSURLCache;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1411817-cachedresponseforrequest
    cachedResponseForRequest(request: cocoascript.NSURLRequest):cocoascript.NSCachedURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1410340-storecachedresponse
    storeCachedResponse_forRequest(cachedResponse: cocoascript.NSCachedURLResponse, request: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1409184-getcachedresponsefordatatask
    getCachedResponseForDataTask_completionHandler(dataTask: cocoascript.NSURLSessionDataTask, completionHandler: cocoascript.NSCachedURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1414434-storecachedresponse
    storeCachedResponse_forDataTask(cachedResponse: cocoascript.NSCachedURLResponse, dataTask: cocoascript.NSURLSessionDataTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415377-removecachedresponseforrequest
    removeCachedResponseForRequest(request: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1412258-removecachedresponsefordatatask
    removeCachedResponseForDataTask(dataTask: cocoascript.NSURLSessionDataTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1415231-removecachedresponsessincedate
    removeCachedResponsesSinceDate(date: cocoascript.NSDate):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1417802-removeallcachedresponses
    removeAllCachedResponses():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1407771-currentdiskusage
    currentDiskUsage(): cocoascript.NSUInteger;
    setCurrentDiskUsage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1413505-diskcapacity
    diskCapacity(): cocoascript.NSUInteger;
    setDiskCapacity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1408199-currentmemoryusage
    currentMemoryUsage(): cocoascript.NSUInteger;
    setCurrentMemoryUsage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcache/1409781-memorycapacity
    memoryCapacity(): cocoascript.NSUInteger;
    setMemoryCapacity(): void;
    //
    alloc():cocoascript.NSURLCache;
    //
    init():cocoascript.NSURLCache;
  }
}

declare const NSURLCache: cocoascript.NSURLCache;
