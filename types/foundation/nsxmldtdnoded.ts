declare namespace cocoascript {
/**
 * A representation of element, attribute-list, entity, and notation declarations in a Document Type Definition.
 * doc://com.apple.documentation/documentation/foundation/nsxmldtdnode
 */
interface NSXMLDTDNode extends NSXMLNode {
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1409605-initwithxmlstring
  initWithXMLString(string: cocoascript.NSString):cocoascript.NSXMLDTDNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1408902-dtdkind
  DTDKind(): cocoascript.NSXMLDTDNodeKind;
  setDTDKind(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1407292-notationname
  notationName(): cocoascript.NSString;
  setNotationName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1415631-publicid
  publicID(): cocoascript.NSString;
  setPublicID(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1410930-systemid
  systemID(): cocoascript.NSString;
  setSystemID(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1416018-init
  init():cocoascript.NSXMLDTDNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1408553-initwithkind
  initWithKind_options(kind: cocoascript.NSXMLNodeKind, options: cocoascript.NSXMLNodeOptions):cocoascript.NSXMLDTDNode;
  // doc://com.apple.documentation/documentation/foundation/nsxmldtdnode/1409467-external
  external(): cocoascript.BOOL;
  setExternal(): void;
  // 
  alloc():cocoascript.NSXMLDTDNode;
  // 
  init():cocoascript.NSXMLDTDNode;
}
}
declare const NSXMLDTDNode: cocoascript.NSXMLDTDNode;

