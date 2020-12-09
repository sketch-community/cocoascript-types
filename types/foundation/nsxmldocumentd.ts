declare namespace cocoascript {
/**
 * An XML document as internalized into a logical tree structure.
 * doc://com.apple.documentation/documentation/foundation/nsxmldocument
 */
interface NSXMLDocument extends NSXMLNode {
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1418467-initwithcontentsofurl
  initWithContentsOfURL_options_error(url: cocoascript.NSURL, mask: cocoascript.NSXMLNodeOptions, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413086-initwithdata
  initWithData_options_error(data: cocoascript.NSData, mask: cocoascript.NSXMLNodeOptions, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409062-initwithrootelement
  initWithRootElement(element: cocoascript.NSXMLElement):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1416228-initwithxmlstring
  initWithXMLString_options_error(string: cocoascript.NSString, mask: cocoascript.NSXMLNodeOptions, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410987-characterencoding
  characterEncoding(): cocoascript.NSString;
  setCharacterEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1407426-documentcontentkind
  documentContentKind(): cocoascript.NSXMLDocumentContentKind;
  setDocumentContentKind(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1418474-dtd
  DTD(): cocoascript.NSXMLDTD;
  setDTD(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413655-standalone
  standalone(): cocoascript.BOOL;
  setStandalone(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1408633-mimetype
  MIMEType(): cocoascript.NSString;
  setMIMEType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409066-version
  version(): cocoascript.NSString;
  setVersion(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1411693-rootelement
  rootElement():cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415610-setrootelement
  setRootElement(root: cocoascript.NSXMLElement):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415740-addchild
  addChild(child: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1413912-insertchild
  insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415612-insertchildren
  insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410060-removechildatindex
  removeChildAtIndex(index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1416857-replacechildatindex
  replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1407550-setchildren
  setChildren(children: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415843-objectbyapplyingxslt
  objectByApplyingXSLT_arguments_error(xslt: cocoascript.NSData, arguments: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1409737-objectbyapplyingxsltstring
  objectByApplyingXSLTString_arguments_error(xslt: cocoascript.NSString, arguments: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1410606-objectbyapplyingxsltaturl
  objectByApplyingXSLTAtURL_arguments_error(xsltURL: cocoascript.NSURL, argument: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSXMLDocument;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1411660-xmldata
  XMLData(): cocoascript.NSData;
  setXMLData(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1412424-xmldatawithoptions
  XMLDataWithOptions(options: cocoascript.NSXMLNodeOptions):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1408561-validateandreturnerror
  validateAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsxmldocument/1415210-init
  init():cocoascript.NSXMLDocument;
  // 
  alloc():cocoascript.NSXMLDocument;
  // 
  init():cocoascript.NSXMLDocument;
}
}
declare const NSXMLDocument: cocoascript.NSXMLDocument;

