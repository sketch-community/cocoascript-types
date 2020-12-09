declare namespace cocoascript {
/**
 * A mutable URL load request that is independent of protocol or URL scheme.
 * doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest
 */
interface NSMutableURLRequest extends NSURLRequest {
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414716-cachepolicy
  cachePolicy(): cocoascript.NSURLRequestCachePolicy;
  setCachePolicy(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1413047-httpmethod
  HTTPMethod(): cocoascript.NSString;
  setHTTPMethod(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1410342-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1409064-httpbody
  HTTPBody(): cocoascript.NSData;
  setHTTPBody(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1409529-httpbodystream
  HTTPBodyStream(): cocoascript.NSInputStream;
  setHTTPBodyStream(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1415630-maindocumenturl
  mainDocumentURL(): cocoascript.NSURL;
  setMainDocumentURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414617-allhttpheaderfields
  allHTTPHeaderFields(): cocoascript.NSString;
  setAllHTTPHeaderFields(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1407676-addvalue
  addValue_forHTTPHeaderField(value: cocoascript.NSString, field: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1408793-setvalue
  setValue_forHTTPHeaderField(value: cocoascript.NSString, field: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1414063-timeoutinterval
  timeoutInterval(): cocoascript.NSTimeInterval;
  setTimeoutInterval(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1415485-httpshouldhandlecookies
  HTTPShouldHandleCookies(): cocoascript.BOOL;
  setHTTPShouldHandleCookies(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1412705-httpshouldusepipelining
  HTTPShouldUsePipelining(): cocoascript.BOOL;
  setHTTPShouldUsePipelining(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1416749-allowscellularaccess
  allowsCellularAccess(): cocoascript.BOOL;
  setAllowsCellularAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/3325676-allowsconstrainednetworkaccess
  allowsConstrainedNetworkAccess(): cocoascript.BOOL;
  setAllowsConstrainedNetworkAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/3325677-allowsexpensivenetworkaccess
  allowsExpensiveNetworkAccess(): cocoascript.BOOL;
  setAllowsExpensiveNetworkAccess(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1412378-networkservicetype
  networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
  setNetworkServiceType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableurlrequest/1619006-bindtohotspothelpercommand
  bindToHotspotHelperCommand(command: cocoascript.NEHotspotHelperCommand):void;
  // 
  alloc():cocoascript.NSMutableURLRequest;
  // 
  init():cocoascript.NSMutableURLRequest;
}
}
declare const NSMutableURLRequest: cocoascript.NSMutableURLRequest;

