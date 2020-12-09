declare namespace cocoascript {
/**
 * Contains a list of the attributes associated with an element.
 * doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo
 */
interface CFXMLAttributeListDeclarationInfo {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo/1443304-attributes
  attributes(): cocoascript.CFXMLAttributeDeclarationInfo;
  setAttributes(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlattributelistdeclarationinfo/1443362-numberofattributes
  numberOfAttributes(): cocoascript.CFIndex;
  setNumberOfAttributes(): void;
}
}

