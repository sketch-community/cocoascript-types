declare namespace cocoascript {
  /**
   * An event driven parser of XML documents (including DTD declarations).
   * doc://com.apple.documentation/documentation/foundation/nsxmlparser
   */
  interface NSXMLParser extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1415575-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1418103-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1415904-initwithstream
    initWithStream(stream: cocoascript.NSInputStream):cocoascript.NSXMLParser;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1416209-delegate
    delegate(): cocoascript.NSXMLParserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1418380-shouldprocessnamespaces
    shouldProcessNamespaces(): cocoascript.BOOL;
    setShouldProcessNamespaces(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1410809-shouldreportnamespaceprefixes
    shouldReportNamespacePrefixes(): cocoascript.BOOL;
    setShouldReportNamespacePrefixes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1414143-shouldresolveexternalentities
    shouldResolveExternalEntities(): cocoascript.BOOL;
    setShouldResolveExternalEntities(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1411778-parse
    parse():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1410083-abortparsing
    abortParsing():void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1417446-parsererror
    parserError(): cocoascript.NSError;
    setParserError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1416983-columnnumber
    columnNumber(): cocoascript.NSInteger;
    setColumnNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1413404-linenumber
    lineNumber(): cocoascript.NSInteger;
    setLineNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1414516-publicid
    publicID(): cocoascript.NSString;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1411917-systemid
    systemID(): cocoascript.NSString;
    setSystemID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1412380-allowedexternalentityurls
    allowedExternalEntityURLs(): cocoascript.NSURL;
    setAllowedExternalEntityURLs(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparser/1407399-externalentityresolvingpolicy
    externalEntityResolvingPolicy(): cocoascript.NSXMLParserExternalEntityResolvingPolicy;
    setExternalEntityResolvingPolicy(): void;
    //
    alloc():cocoascript.NSXMLParser;
    //
    init():cocoascript.NSXMLParser;
  }
}

declare const NSXMLParser: cocoascript.NSXMLParser;
