declare namespace cocoascript {
  /**
   * The metadata associated with the response to a URL load request, independent of protocol and URL scheme.
   * doc://com.apple.documentation/documentation/foundation/nsurlresponse
   */
  interface NSURLResponse extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1413566-initwithurl
    initWithURL_MIMEType_expectedContentLength_textEncodingName(URL: cocoascript.NSURL, MIMEType: cocoascript.NSString, length: cocoascript.NSInteger, name: cocoascript.NSString):cocoascript.NSURLResponse;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1413507-expectedcontentlength
    expectedContentLength(): number;
    setExpectedContentLength(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1415924-suggestedfilename
    suggestedFilename(): cocoascript.NSString;
    setSuggestedFilename(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1411613-mimetype
    MIMEType(): cocoascript.NSString;
    setMIMEType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1408005-textencodingname
    textEncodingName(): cocoascript.NSString;
    setTextEncodingName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlresponse/1414219-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.NSURLResponse;
    //
    init():cocoascript.NSURLResponse;
  }
}

declare const NSURLResponse: cocoascript.NSURLResponse;
