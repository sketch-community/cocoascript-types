declare namespace cocoascript {
  /**
   * An object that downloads a resource asynchronously and saves the data to a file.
   * doc://com.apple.documentation/documentation/foundation/nsurldownload
   */
  interface NSURLDownload extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1416302-initwithrequest
    initWithRequest_delegate(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLDownloadDelegate):cocoascript.NSURLDownload;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1412923-setdestination
    setDestination_allowOverwrite(path: cocoascript.NSString, allowOverwrite: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1412919-initwithresumedata
    initWithResumeData_delegate_path(resumeData: cocoascript.NSData, delegate: cocoascript.NSURLDownloadDelegate, path: cocoascript.NSString):cocoascript.NSURLDownload;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1413244-resumedata
    resumeData(): cocoascript.NSData;
    setResumeData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1409172-deletesfileuponfailure
    deletesFileUponFailure(): cocoascript.BOOL;
    setDeletesFileUponFailure(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1415299-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1416157-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurldownload/1409172-deletesfileuponfailure
    deletesFileUponFailure(): cocoascript.BOOL;
    setDeletesFileUponFailure(): void;
    //
    alloc():cocoascript.NSURLDownload;
    //
    init():cocoascript.NSURLDownload;
  }
}

declare const NSURLDownload: cocoascript.NSURLDownload;
