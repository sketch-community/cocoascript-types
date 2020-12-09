declare namespace cocoascript {
/**
 * An object that coordinates a group of related, network data-transfer tasks.
 * doc://com.apple.documentation/documentation/foundation/nsurlsession
 */
interface NSURLSession extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409000-sharedsession
  sharedSession(): cocoascript.NSURLSession;
  setSharedSession(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411477-configuration
  configuration(): cocoascript.NSURLSessionConfiguration;
  setConfiguration(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411530-delegate
  delegate(): cocoascript.NSURLSessionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411571-delegatequeue
  delegateQueue(): cocoascript.NSOperationQueue;
  setDelegateQueue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411554-datataskwithurl
  dataTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionDataTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410330-datataskwithurl
  dataTaskWithURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDataTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410592-datataskwithrequest
  dataTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionDataTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1407613-datataskwithrequest
  dataTaskWithRequest_completionHandler(request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDataTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411482-downloadtaskwithurl
  downloadTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411608-downloadtaskwithurl
  downloadTaskWithURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411481-downloadtaskwithrequest
  downloadTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411511-downloadtaskwithrequest
  downloadTaskWithRequest_completionHandler(request: cocoascript.NSURLRequest, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409226-downloadtaskwithresumedata
  downloadTaskWithResumeData(resumeData: cocoascript.NSData):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411598-downloadtaskwithresumedata
  downloadTaskWithResumeData_completionHandler(resumeData: cocoascript.NSData, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionDownloadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1409763-uploadtaskwithrequest
  uploadTaskWithRequest_fromData(request: cocoascript.NSURLRequest, bodyData: cocoascript.NSData):cocoascript.NSURLSessionUploadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411518-uploadtaskwithrequest
  uploadTaskWithRequest_fromData_completionHandler(request: cocoascript.NSURLRequest, bodyData: cocoascript.NSData, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionUploadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411550-uploadtaskwithrequest
  uploadTaskWithRequest_fromFile(request: cocoascript.NSURLRequest, fileURL: cocoascript.NSURL):cocoascript.NSURLSessionUploadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411638-uploadtaskwithrequest
  uploadTaskWithRequest_fromFile_completionHandler(request: cocoascript.NSURLRequest, fileURL: cocoascript.NSURL, completionHandler: cocoascript.NSError):cocoascript.NSURLSessionUploadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1410934-uploadtaskwithstreamedrequest
  uploadTaskWithStreamedRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionUploadTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411587-streamtaskwithhostname
  streamTaskWithHostName_port(hostname: cocoascript.NSString, port: cocoascript.NSInteger):cocoascript.NSURLSessionStreamTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411545-streamtaskwithnetservice
  streamTaskWithNetService(service: cocoascript.NSNetService):cocoascript.NSURLSessionStreamTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/3181171-websockettaskwithurl
  webSocketTaskWithURL(url: cocoascript.NSURL):cocoascript.NSURLSessionWebSocketTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/3235750-websockettaskwithrequest
  webSocketTaskWithRequest(request: cocoascript.NSURLRequest):cocoascript.NSURLSessionWebSocketTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/3181172-websockettaskwithurl
  webSocketTaskWithURL_protocols(url: cocoascript.NSURL, protocols: cocoascript.NSString):cocoascript.NSURLSessionWebSocketTask;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1407428-finishtasksandinvalidate
  finishTasksAndInvalidate():void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411622-flushwithcompletionhandler
  flushWithCompletionHandler(completionHandler: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411578-gettaskswithcompletionhandler
  getTasksWithCompletionHandler(completionHandler: cocoascript.NSURLSessionDownloadTask):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411618-getalltaskswithcompletionhandler
  getAllTasksWithCompletionHandler(completionHandler: cocoascript.NSURLSessionTask):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411538-invalidateandcancel
  invalidateAndCancel():void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1411479-resetwithcompletionhandler
  resetWithCompletionHandler(completionHandler: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/1408277-sessiondescription
  sessionDescription(): cocoascript.NSString;
  setSessionDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlsession/3240614-init
  init():cocoascript.NSURLSession;
  // 
  alloc():cocoascript.NSURLSession;
  // 
  init():cocoascript.NSURLSession;
}
}
declare const NSURLSession: cocoascript.NSURLSession;

