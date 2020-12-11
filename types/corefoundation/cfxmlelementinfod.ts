declare namespace cocoascript {
  /**
   * Contains a list of element attributes packaged as CFDictionary key/value pairs.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo
   */
  interface CFXMLElementInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443302-attributeorder
    attributeOrder(): cocoascript.CFArrayRef;
    setAttributeOrder(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443340-attributes
    attributes(): cocoascript.CFDictionaryRef;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementinfo/1443245-isempty
    isEmpty(): cocoascript.Boolean;
    setIsEmpty(): void;
  }
}
