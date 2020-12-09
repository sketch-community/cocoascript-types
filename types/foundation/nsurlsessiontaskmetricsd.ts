declare namespace cocoascript {
/**
 * An object encapsulating the metrics for a session task. 
 * doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics
 */
interface NSURLSessionTaskMetrics extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643240-init
  init():cocoascript.NSURLSessionTaskMetrics;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1642789-transactionmetrics
  transactionMetrics(): cocoascript.NSURLSessionTaskTransactionMetrics;
  setTransactionMetrics(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643169-taskinterval
  taskInterval(): cocoascript.NSDateInterval;
  setTaskInterval(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskmetrics/1643136-redirectcount
  redirectCount(): cocoascript.NSUInteger;
  setRedirectCount(): void;
  // 
  alloc():cocoascript.NSURLSessionTaskMetrics;
  // 
  init():cocoascript.NSURLSessionTaskMetrics;
}
}
declare const NSURLSessionTaskMetrics: cocoascript.NSURLSessionTaskMetrics;

