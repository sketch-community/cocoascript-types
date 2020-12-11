declare namespace cocoascript {
  /**
   * The nodes in the abstract, logical tree structure that represents an XML document.
   * doc://com.apple.documentation/documentation/foundation/nsxmlnode
   */
  interface NSXMLNode extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409766-initwithkind
    initWithKind(kind: cocoascript.NSXMLNodeKind):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409747-initwithkind
    initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409743-index
    index(): cocoascript.NSUInteger;
    setIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1408882-kind
    kind(): cocoascript.NSXMLNodeKind;
    setKind(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1407508-level
    level(): cocoascript.NSUInteger;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409770-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409756-objectvalue
    objectValue(): cocoascript.id;
    setObjectValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409818-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409758-setstringvalue
    setStringValue_resolvingEntities(string: cocoascript.NSString, resolve: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409774-uri
    URI(): cocoascript.NSString;
    setURI(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409830-rootdocument
    rootDocument(): cocoascript.NSXMLDocument;
    setRootDocument(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409740-parent
    parent(): cocoascript.NSXMLNode;
    setParent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409811-childatindex
    childAtIndex(index: cocoascript.NSUInteger):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409808-childcount
    childCount(): cocoascript.NSUInteger;
    setChildCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409828-children
    children(): cocoascript.NSXMLNode;
    setChildren(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409800-nextnode
    nextNode(): cocoascript.NSXMLNode;
    setNextNode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409750-nextsibling
    nextSibling(): cocoascript.NSXMLNode;
    setNextSibling(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409736-previousnode
    previousNode(): cocoascript.NSXMLNode;
    setPreviousNode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409764-previoussibling
    previousSibling(): cocoascript.NSXMLNode;
    setPreviousSibling(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409806-detach
    detach():void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409772-xmlstring
    XMLString(): cocoascript.NSString;
    setXMLString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409778-xmlstringwithoptions
    XMLStringWithOptions(options: cocoascript.NSXMLNodeOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409817-canonicalxmlstringpreservingcomm
    canonicalXMLStringPreservingComments(comments: cocoascript.BOOL):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409788-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409813-nodesforxpath
    nodesForXPath_error(xpath: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSXMLNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409768-objectsforxquery
    objectsForXQuery_error(xquery: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409792-objectsforxquery
    objectsForXQuery_constants_error(xquery: cocoascript.NSString, constants: cocoascript.NSXMLNode, error: cocoascript._Nullable):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409826-xpath
    XPath(): cocoascript.NSString;
    setXPath(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409734-localname
    localName(): cocoascript.NSString;
    setLocalName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409797-prefix
    prefix(): cocoascript.NSString;
    setPrefix(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlnode/1409780-init
    init():cocoascript.NSXMLNode;
    //
    alloc():cocoascript.NSXMLNode;
    //
    init():cocoascript.NSXMLNode;
  }
}

declare const NSXMLNode: cocoascript.NSXMLNode;
