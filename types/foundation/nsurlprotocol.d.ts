declare namespace cocoascript {
  /**
   * An abstract class that handles the loading of protocol-specific URL data.
   * doc://com.apple.documentation/documentation/foundation/nsurlprotocol
   */
  interface NSURLProtocol extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1414366-initwithrequest
    initWithRequest_cachedResponse_client(request: cocoascript.NSURLRequest, cachedResponse: cocoascript.NSCachedURLResponse, client: cocoascript.NSURLProtocolClient):cocoascript.NSURLProtocol;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1417672-initwithtask
    initWithTask_cachedResponse_client(task: cocoascript.NSURLSessionTask, cachedResponse: cocoascript.NSCachedURLResponse, client: cocoascript.NSURLProtocolClient):cocoascript.NSURLProtocol;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1408989-startloading
    startLoading():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1408666-stoploading
    stopLoading():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1418409-cachedresponse
    cachedResponse(): cocoascript.NSCachedURLResponse;
    setCachedResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1413722-client
    client(): cocoascript.NSURLProtocolClient;
    setClient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1412383-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotocol/1407649-task
    task(): cocoascript.NSURLSessionTask;
    setTask(): void;
    //
    alloc():cocoascript.NSURLProtocol;
    //
    init():cocoascript.NSURLProtocol;
  }
}

declare const NSURLProtocol: cocoascript.NSURLProtocol;
