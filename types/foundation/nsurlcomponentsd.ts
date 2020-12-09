declare namespace cocoascript {
/**
 * An object that parses URLs into and constructs URLs from their constituent parts. 
 * doc://com.apple.documentation/documentation/foundation/nsurlcomponents
 */
interface NSURLComponents extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1414141-init
  init():cocoascript.NSURLComponents;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410784-initwithstring
  initWithString(URLString: cocoascript.NSString):cocoascript.NSURLComponents;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1416476-initwithurl
  initWithURL_resolvingAgainstBaseURL(url: cocoascript.NSURL, resolve: cocoascript.BOOL):cocoascript.NSURLComponents;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417970-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1413469-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408378-urlrelativetourl
  URLRelativeToURL(baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417638-fragment
  fragment(): cocoascript.NSString;
  setFragment(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1411178-host
  host(): cocoascript.NSString;
  setHost(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415604-password
  password(): cocoascript.NSString;
  setPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1409650-path
  path(): cocoascript.NSString;
  setPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1413451-port
  port(): cocoascript.NSNumber;
  setPort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415452-query
  query(): cocoascript.NSString;
  setQuery(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1407752-queryitems
  queryItems(): cocoascript.NSURLQueryItem;
  setQueryItems(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1407517-scheme
  scheme(): cocoascript.NSString;
  setScheme(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415026-user
  user(): cocoascript.NSString;
  setUser(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418392-percentencodedfragment
  percentEncodedFragment(): cocoascript.NSString;
  setPercentEncodedFragment(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418231-percentencodedhost
  percentEncodedHost(): cocoascript.NSString;
  setPercentEncodedHost(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410319-percentencodedpassword
  percentEncodedPassword(): cocoascript.NSString;
  setPercentEncodedPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408161-percentencodedpath
  percentEncodedPath(): cocoascript.NSString;
  setPercentEncodedPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410395-percentencodedquery
  percentEncodedQuery(): cocoascript.NSString;
  setPercentEncodedQuery(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1417767-percentencodeduser
  percentEncodedUser(): cocoascript.NSString;
  setPercentEncodedUser(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/2865531-percentencodedqueryitems
  percentEncodedQueryItems(): cocoascript.NSURLQueryItem;
  setPercentEncodedQueryItems(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415180-rangeoffragment
  rangeOfFragment(): cocoascript.NSRange;
  setRangeOfFragment(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1408894-rangeofhost
  rangeOfHost(): cocoascript.NSRange;
  setRangeOfHost(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1415024-rangeofpassword
  rangeOfPassword(): cocoascript.NSRange;
  setRangeOfPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1418459-rangeofpath
  rangeOfPath(): cocoascript.NSRange;
  setRangeOfPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1411790-rangeofport
  rangeOfPort(): cocoascript.NSRange;
  setRangeOfPort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1409456-rangeofquery
  rangeOfQuery(): cocoascript.NSRange;
  setRangeOfQuery(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1410099-rangeofscheme
  rangeOfScheme(): cocoascript.NSRange;
  setRangeOfScheme(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcomponents/1414961-rangeofuser
  rangeOfUser(): cocoascript.NSRange;
  setRangeOfUser(): void;
  // 
  alloc():cocoascript.NSURLComponents;
  // 
  init():cocoascript.NSURLComponents;
}
}
declare const NSURLComponents: cocoascript.NSURLComponents;

