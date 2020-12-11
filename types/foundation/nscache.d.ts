declare namespace cocoascript {
  /**
   * A mutable collection you use to temporarily store transient key-value pairs that are subject to eviction when resources are low.
   * doc://com.apple.documentation/documentation/foundation/nscache
   */
  interface NSCache extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscache/1409941-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1416355-countlimit
    countLimit(): cocoascript.NSUInteger;
    setCountLimit(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1407672-totalcostlimit
    totalCostLimit(): cocoascript.NSUInteger;
    setTotalCostLimit(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1408469-evictsobjectswithdiscardedconten
    evictsObjectsWithDiscardedContent(): cocoascript.BOOL;
    setEvictsObjectsWithDiscardedContent(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1413061-delegate
    delegate(): cocoascript.NSCacheDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1415458-objectforkey
    objectForKey(key: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1408223-setobject
    setObject(key: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1416399-setobject
    setObject(key: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1409900-removeobjectforkey
    removeObjectForKey(key: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nscache/1411382-removeallobjects
    removeAllObjects():void;
    //
    alloc():cocoascript.NSCache;
    //
    init():cocoascript.NSCache;
  }
}

declare const NSCache: cocoascript.NSCache;
