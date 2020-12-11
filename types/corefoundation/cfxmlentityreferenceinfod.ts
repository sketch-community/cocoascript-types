declare namespace cocoascript {
  /**
   * Contains information describing an XML entity reference.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlentityreferenceinfo
   */
  interface CFXMLEntityReferenceInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityreferenceinfo/1443252-entitytype
    entityType(): cocoascript.CFXMLEntityTypeCode;
    setEntityType(): void;
  }
}
