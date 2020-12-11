declare namespace cocoascript {
  /**
   * Contains information about an element attribute definition.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo
   */
  interface CFXMLAttributeDeclarationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443258-attributename
    attributeName(): cocoascript.CFStringRef;
    setAttributeName(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443241-defaultstring
    defaultString(): cocoascript.CFStringRef;
    setDefaultString(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributedeclarationinfo/1443260-typestring
    typeString(): cocoascript.CFStringRef;
    setTypeString(): void;
  }
}
