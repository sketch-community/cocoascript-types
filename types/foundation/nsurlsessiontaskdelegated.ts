declare namespace cocoascript {
/**
 * A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
 * doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate
 */
interface NSURLSessionTaskDelegate extends NSURLSessionDelegate {
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411610-urlsession
  URLSession_task_didCompleteWithError(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411626-urlsession
  URLSession_task_willPerformHTTPRedirection_newRequest_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, response: cocoascript.NSHTTPURLResponse, request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSURLRequest):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1408299-urlsession
  URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1410001-urlsession
  URLSession_task_needNewBodyStream(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSInputStream):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1411595-urlsession
  URLSession_task_didReceiveChallenge_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, challenge: cocoascript.NSURLAuthenticationChallenge, completionHandler: cocoascript.NSURLCredential):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/2873415-urlsession
  URLSession_task_willBeginDelayedRequest_completionHandler(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSURLRequest):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/2908819-urlsession
  URLSession_taskIsWaitingForConnectivity(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsessiontaskdelegate/1643148-urlsession
  URLSession_task_didFinishCollectingMetrics(session: cocoascript.NSURLSession, task: cocoascript.NSURLSessionTask, metrics: cocoascript.NSURLSessionTaskMetrics):void;
}
}

