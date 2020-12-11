declare namespace cocoascript {
  /**
   * A representation of an HTTP cookie.
   * doc://com.apple.documentation/documentation/foundation/nshttpcookie
   */
  interface NSHTTPCookie extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392975-initwithproperties
    initWithProperties(properties: cocoascript.NSHTTPCookie):cocoascript.NSHTTPCookie;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393015-domain
    domain(): cocoascript.NSString;
    setDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392981-path
    path(): cocoascript.NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393027-portlist
    portList(): cocoascript.NSNumber;
    setPortList(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393013-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392995-value
    value(): cocoascript.NSString;
    setValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392993-version
    version(): cocoascript.NSUInteger;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393019-expiresdate
    expiresDate(): cocoascript.NSDate;
    setExpiresDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392991-sessiononly
    sessionOnly(): cocoascript.BOOL;
    setSessionOnly(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392969-httponly
    HTTPOnly(): cocoascript.BOOL;
    setHTTPOnly(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393025-secure
    secure(): cocoascript.BOOL;
    setSecure(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/3042420-samesitepolicy
    sameSitePolicy(): cocoascript.NSHTTPCookieStringPolicy;
    setSameSitePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1393017-properties
    properties(): cocoascript.id;
    setProperties(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392997-comment
    comment(): cocoascript.NSString;
    setComment(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttpcookie/1392987-commenturl
    commentURL(): cocoascript.NSURL;
    setCommentURL(): void;
    //
    alloc():cocoascript.NSHTTPCookie;
    //
    init():cocoascript.NSHTTPCookie;
  }
}

declare const NSHTTPCookie: cocoascript.NSHTTPCookie;
