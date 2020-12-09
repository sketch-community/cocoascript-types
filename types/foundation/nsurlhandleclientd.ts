declare namespace cocoascript {
/**
 * The interface implemented by URL handle clients.
 * doc://com.apple.documentation/documentation/foundation/nsurlhandleclient
 */
interface NSURLHandleClient {
  // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589226-urlhandleresourcedidbeginloading
  URLHandleResourceDidBeginLoading(sender: cocoascript.NSURLHandle):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589219-urlhandleresourcedidcancelloadin
  URLHandleResourceDidCancelLoading(sender: cocoascript.NSURLHandle):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589228-urlhandleresourcedidfinishloadin
  URLHandleResourceDidFinishLoading(sender: cocoascript.NSURLHandle):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589237-urlhandle
  URLHandle_resourceDataDidBecomeAvailable(sender: cocoascript.NSURLHandle, newBytes: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlhandleclient/1589217-urlhandle
  URLHandle_resourceDidFailLoadingWithReason(sender: cocoascript.NSURLHandle, reason: cocoascript.NSString):void;
}
}

