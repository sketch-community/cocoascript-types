declare namespace cocoascript {
  /**
   * An object representing a single name/value pair for an item in the query portion of a URL.
   * doc://com.apple.documentation/documentation/foundation/nsurlqueryitem
   */
  interface NSURLQueryItem extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1410963-initwithname
    initWithName_value(name: cocoascript.NSString, value: cocoascript.NSString):cocoascript.NSURLQueryItem;
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1407785-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlqueryitem/1412041-value
    value(): cocoascript.NSString;
    setValue(): void;
    //
    alloc():cocoascript.NSURLQueryItem;
    //
    init():cocoascript.NSURLQueryItem;
  }
}

declare const NSURLQueryItem: cocoascript.NSURLQueryItem;
