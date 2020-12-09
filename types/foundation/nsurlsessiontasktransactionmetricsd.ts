declare namespace cocoascript {
/**
 * An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
 * doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics
 */
interface NSURLSessionTaskTransactionMetrics extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643144-request
  request(): cocoascript.NSURLRequest;
  setRequest(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643172-response
  response(): cocoascript.NSURLResponse;
  setResponse(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643009-fetchstartdate
  fetchStartDate(): cocoascript.NSDate;
  setFetchStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642859-domainlookupstartdate
  domainLookupStartDate(): cocoascript.NSDate;
  setDomainLookupStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643173-domainlookupenddate
  domainLookupEndDate(): cocoascript.NSDate;
  setDomainLookupEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642815-connectstartdate
  connectStartDate(): cocoascript.NSDate;
  setConnectStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643219-secureconnectionstartdate
  secureConnectionStartDate(): cocoascript.NSDate;
  setSecureConnectionStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643255-secureconnectionenddate
  secureConnectionEndDate(): cocoascript.NSDate;
  setSecureConnectionEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643239-connectenddate
  connectEndDate(): cocoascript.NSDate;
  setConnectEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642906-requeststartdate
  requestStartDate(): cocoascript.NSDate;
  setRequestStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643056-requestenddate
  requestEndDate(): cocoascript.NSDate;
  setRequestEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642966-responsestartdate
  responseStartDate(): cocoascript.NSDate;
  setResponseStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643300-responseenddate
  responseEndDate(): cocoascript.NSDate;
  setResponseEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240629-countofrequestbodybytesbeforeenc
  countOfRequestBodyBytesBeforeEncoding(): number;
  setCountOfRequestBodyBytesBeforeEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240630-countofrequestbodybytessent
  countOfRequestBodyBytesSent(): number;
  setCountOfRequestBodyBytesSent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240631-countofrequestheaderbytessent
  countOfRequestHeaderBytesSent(): number;
  setCountOfRequestHeaderBytesSent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240632-countofresponsebodybytesafterdec
  countOfResponseBodyBytesAfterDecoding(): number;
  setCountOfResponseBodyBytesAfterDecoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240633-countofresponsebodybytesreceived
  countOfResponseBodyBytesReceived(): number;
  setCountOfResponseBodyBytesReceived(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240634-countofresponseheaderbytesreceiv
  countOfResponseHeaderBytesReceived(): number;
  setCountOfResponseHeaderBytesReceived(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643141-networkprotocolname
  networkProtocolName(): cocoascript.NSString;
  setNetworkProtocolName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240642-remoteaddress
  remoteAddress(): cocoascript.NSString;
  setRemoteAddress(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240643-remoteport
  remotePort(): cocoascript.NSNumber;
  setRemotePort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240636-localaddress
  localAddress(): cocoascript.NSString;
  setLocalAddress(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240637-localport
  localPort(): cocoascript.NSNumber;
  setLocalPort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240639-negotiatedtlsciphersuite
  negotiatedTLSCipherSuite(): cocoascript.NSNumber;
  setNegotiatedTLSCipherSuite(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240640-negotiatedtlsprotocolversion
  negotiatedTLSProtocolVersion(): cocoascript.NSNumber;
  setNegotiatedTLSProtocolVersion(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240627-cellular
  cellular(): cocoascript.BOOL;
  setCellular(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240635-expensive
  expensive(): cocoascript.BOOL;
  setExpensive(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240628-constrained
  constrained(): cocoascript.BOOL;
  setConstrained(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642917-proxyconnection
  proxyConnection(): cocoascript.BOOL;
  setProxyConnection(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1643233-reusedconnection
  reusedConnection(): cocoascript.BOOL;
  setReusedConnection(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3240638-multipath
  multipath(): cocoascript.BOOL;
  setMultipath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642919-resourcefetchtype
  resourceFetchType(): cocoascript.NSURLSessionTaskMetricsResourceFetchType;
  setResourceFetchType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/1642954-init
  init():cocoascript.NSURLSessionTaskTransactionMetrics;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontasktransactionmetrics/3674827-domainresolutionprotocol
  domainResolutionProtocol(): cocoascript.NSURLSessionTaskMetricsDomainResolutionProtocol;
  setDomainResolutionProtocol(): void;
  // 
  alloc():cocoascript.NSURLSessionTaskTransactionMetrics;
  // 
  init():cocoascript.NSURLSessionTaskTransactionMetrics;
}
}
declare const NSURLSessionTaskTransactionMetrics: cocoascript.NSURLSessionTaskTransactionMetrics;

