declare namespace cocoascript {
/**
 * The delegate of an 
 * doc://com.apple.documentation/documentation/foundation/nscachedelegate
 */
interface NSCacheDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nscachedelegate/1416107-cache
  cache_willEvictObject(cache: cocoascript.NSCache, obj: cocoascript.NSCacheDelegate):void;
}
}

