declare namespace cocoascript {
/**
 * A protocol that URL download delegates implement to interact with a URL download request.
 * doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate
 */
interface NSURLDownloadDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1417213-download
  download_canAuthenticateAgainstProtectionSpace(connection: cocoascript.NSURLDownload, protectionSpace: cocoascript.NSURLProtectionSpace):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1416233-download
  download_didCancelAuthenticationChallenge(download: cocoascript.NSURLDownload, challenge: cocoascript.NSURLAuthenticationChallenge):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1411969-download
  download_didReceiveAuthenticationChallenge(download: cocoascript.NSURLDownload, challenge: cocoascript.NSURLAuthenticationChallenge):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1416506-downloadshouldusecredentialstora
  downloadShouldUseCredentialStorage(download: cocoascript.NSURLDownload):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1413588-download
  download_decideDestinationWithSuggestedFilename(download: cocoascript.NSURLDownload, filename: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1409618-downloaddidbegin
  downloadDidBegin(download: cocoascript.NSURLDownload):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1415265-download
  download_didCreateDestination(download: cocoascript.NSURLDownload, path: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1415460-download
  download_didReceiveResponse(download: cocoascript.NSURLDownload, response: cocoascript.NSURLResponse):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1413663-download
  download_didReceiveDataOfLength(download: cocoascript.NSURLDownload, length: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1408526-download
  download_shouldDecodeSourceDataOfMIMEType(download: cocoascript.NSURLDownload, encodingType: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1409514-download
  download_willResumeWithResponse_fromByte(download: cocoascript.NSURLDownload, response: cocoascript.NSURLResponse, startingByte: number):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1412181-download
  download_willSendRequest_redirectResponse(download: cocoascript.NSURLDownload, request: cocoascript.NSURLRequest, redirectResponse: cocoascript.NSURLResponse):cocoascript.NSURLRequest;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1411640-download
  download_didFailWithError(download: cocoascript.NSURLDownload, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsurldownloaddelegate/1408884-downloaddidfinish
  downloadDidFinish(download: cocoascript.NSURLDownload):void;
}
}

