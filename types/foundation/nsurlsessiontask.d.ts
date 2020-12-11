declare namespace cocoascript {
  /**
   * A task, like downloading a specific resource, performed in a URL session.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiontask
   */
  interface NSURLSessionTask extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411591-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411121-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411565-suspend
    suspend():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1409888-state
    state(): cocoascript.NSURLSessionTaskState;
    setState(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410569-priority
    priority(): number;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2908821-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410663-countofbytesexpectedtoreceive
    countOfBytesExpectedToReceive(): number;
    setCountOfBytesExpectedToReceive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411581-countofbytesreceived
    countOfBytesReceived(): number;
    setCountOfBytesReceived(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411534-countofbytesexpectedtosend
    countOfBytesExpectedToSend(): number;
    setCountOfBytesExpectedToSend(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410444-countofbytessent
    countOfBytesSent(): number;
    setCountOfBytesSent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411649-currentrequest
    currentRequest(): cocoascript.NSURLRequest;
    setCurrentRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411572-originalrequest
    originalRequest(): cocoascript.NSURLRequest;
    setOriginalRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1410586-response
    response(): cocoascript.NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1409798-taskdescription
    taskDescription(): cocoascript.NSString;
    setTaskDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1411231-taskidentifier
    taskIdentifier(): cocoascript.NSUInteger;
    setTaskIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/1408145-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873414-countofbytesclientexpectstorecei
    countOfBytesClientExpectsToReceive(): number;
    setCountOfBytesClientExpectsToReceive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873401-countofbytesclientexpectstosend
    countOfBytesClientExpectsToSend(): number;
    setCountOfBytesClientExpectsToSend(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/2873413-earliestbegindate
    earliestBeginDate(): cocoascript.NSDate;
    setEarliestBeginDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiontask/3240624-init
    init():cocoascript.NSURLSessionTask;
    //
    alloc():cocoascript.NSURLSessionTask;
    //
    init():cocoascript.NSURLSessionTask;
  }
}

declare const NSURLSessionTask: cocoascript.NSURLSessionTask;
