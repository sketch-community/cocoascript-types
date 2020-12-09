declare namespace cocoascript {
/**
 * A URL load request that is independent of protocol or URL scheme.
 * doc://com.apple.documentation/documentation/foundation/nsurlrequest
 */
interface NSURLRequest extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1410303-initwithurl
  initWithURL(URL: cocoascript.NSURL):cocoascript.NSURLRequest;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1416292-initwithurl
  initWithURL_cachePolicy_timeoutInterval(URL: cocoascript.NSURL, cachePolicy: cocoascript.NSURLRequestCachePolicy, timeoutInterval: cocoascript.NSTimeInterval):cocoascript.NSURLRequest;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1407944-cachepolicy
  cachePolicy(): cocoascript.NSURLRequestCachePolicy;
  setCachePolicy(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1413030-httpmethod
  HTTPMethod(): cocoascript.NSString;
  setHTTPMethod(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1408996-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1411317-httpbody
  HTTPBody(): cocoascript.NSData;
  setHTTPBody(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1407341-httpbodystream
  HTTPBodyStream(): cocoascript.NSInputStream;
  setHTTPBodyStream(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1414134-maindocumenturl
  mainDocumentURL(): cocoascript.NSURL;
  setMainDocumentURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418477-allhttpheaderfields
  allHTTPHeaderFields(): cocoascript.NSString;
  setAllHTTPHeaderFields(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1409376-valueforhttpheaderfield
  valueForHTTPHeaderField(field: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418229-timeoutinterval
  timeoutInterval(): cocoascript.NSTimeInterval;
  setTimeoutInterval(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418369-httpshouldhandlecookies
  HTTPShouldHandleCookies(): cocoascript.BOOL;
  setHTTPShouldHandleCookies(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1409170-httpshouldusepipelining
  HTTPShouldUsePipelining(): cocoascript.BOOL;
  setHTTPShouldUsePipelining(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1412032-allowscellularaccess
  allowsCellularAccess(): cocoascript.BOOL;
  setAllowsCellularAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/3325678-allowsconstrainednetworkaccess
  allowsConstrainedNetworkAccess(): cocoascript.BOOL;
  setAllowsConstrainedNetworkAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/3325679-allowsexpensivenetworkaccess
  allowsExpensiveNetworkAccess(): cocoascript.BOOL;
  setAllowsExpensiveNetworkAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1418333-networkservicetype
  networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
  setNetworkServiceType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlrequest/1416510-supportssecurecoding
  supportsSecureCoding(): cocoascript.BOOL;
  setSupportsSecureCoding(): void;
  // 
  alloc():cocoascript.NSURLRequest;
  // 
  init():cocoascript.NSURLRequest;
}
}
declare const NSURLRequest: cocoascript.NSURLRequest;

