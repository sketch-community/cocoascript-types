declare namespace cocoascript {
/**
 * The element nodes in an XML tree structure.
 * doc://com.apple.documentation/documentation/foundation/nsxmlelement
 */
interface NSXMLElement extends NSXMLNode {
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388319-initwithname
  initWithName(name: cocoascript.NSString):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388356-initwithname
  initWithName_stringValue(name: cocoascript.NSString, string: cocoascript.NSString):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388325-initwithxmlstring
  initWithXMLString_error(string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388348-initwithname
  initWithName_URI(name: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388329-elementsforname
  elementsForName(name: cocoascript.NSString):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388344-elementsforlocalname
  elementsForLocalName_URI(localName: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLElement;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388340-addchild
  addChild(child: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388332-insertchild
  insertChild_atIndex(child: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388331-insertchildren
  insertChildren_atIndex(children: cocoascript.NSXMLNode, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388311-removechildatindex
  removeChildAtIndex(index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388317-replacechildatindex
  replaceChildAtIndex_withNode(index: cocoascript.NSUInteger, node: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388350-setchildren
  setChildren(children: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388346-normalizeadjacenttextnodespreser
  normalizeAdjacentTextNodesPreservingCDATA(preserve: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388336-addattribute
  addAttribute(attribute: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388305-attributeforname
  attributeForName(name: cocoascript.NSString):cocoascript.NSXMLNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388315-attributeforlocalname
  attributeForLocalName_URI(localName: cocoascript.NSString, URI: cocoascript.NSString):cocoascript.NSXMLNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388321-attributes
  attributes(): cocoascript.NSXMLNode;
  setAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388338-removeattributeforname
  removeAttributeForName(name: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388354-setattributeswithdictionary
  setAttributesWithDictionary(attributes: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388352-setattributesasdictionary
  setAttributesAsDictionary(attributes: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388358-addnamespace
  addNamespace(aNamespace: cocoascript.NSXMLNode):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388342-namespaces
  namespaces(): cocoascript.NSXMLNode;
  setNamespaces(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388307-namespaceforprefix
  namespaceForPrefix(name: cocoascript.NSString):cocoascript.NSXMLNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388327-removenamespaceforprefix
  removeNamespaceForPrefix(name: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388334-resolvenamespaceforname
  resolveNamespaceForName(name: cocoascript.NSString):cocoascript.NSXMLNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388309-resolveprefixfornamespaceuri
  resolvePrefixForNamespaceURI(namespaceURI: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsxmlelement/1388323-initwithkind
  initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLElement;
  // 
  alloc():cocoascript.NSXMLElement;
  // 
  init():cocoascript.NSXMLElement;
}
}
declare const NSXMLElement: cocoascript.NSXMLElement;

