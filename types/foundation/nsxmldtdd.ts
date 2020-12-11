declare namespace cocoascript {
  /**
   * A representation of a Document Type Definition.
   * doc://com.apple.documentation/documentation/foundation/nsxmldtd
   */
  interface NSXMLDTD extends NSXMLNode {
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410482-initwithcontentsofurl
    initWithContentsOfURL_options_error(url: cocoascript.NSURL, mask: cocoascript.NSXMLNodeOptions, error: cocoascript._Nullable):cocoascript.NSXMLDTD;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412807-initwithdata
    initWithData_options_error(data: cocoascript.NSData, mask: cocoascript.NSXMLNodeOptions, error: cocoascript._Nullable):cocoascript.NSXMLDTD;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1408524-publicid
    publicID(): cocoascript.NSString;
    setPublicID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410949-systemid
    systemID(): cocoascript.NSString;
    setSystemID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412988-addchild
    addChild(child: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1411759-insertchild
    insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1413709-insertchildren
    insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412262-removechildatindex
    removeChildAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1413890-replacechildatindex
    replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1415145-setchildren
    setChildren(children: cocoascript.NSXMLNode):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1416067-elementdeclarationforname
    elementDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1411397-attributedeclarationforname
    attributeDeclarationForName_elementName(name: cocoascript.NSString, elementName: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1412325-entitydeclarationforname
    entityDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1410533-notationdeclarationforname
    notationDeclarationForName(name: cocoascript.NSString):cocoascript.NSXMLDTDNode;
    // doc://com.apple.documentation/documentation/foundation/nsxmldtd/1417840-init
    init():cocoascript.NSXMLDTD;
    //
    alloc():cocoascript.NSXMLDTD;
    //
    init():cocoascript.NSXMLDTD;
  }
}

declare const NSXMLDTD: cocoascript.NSXMLDTD;
