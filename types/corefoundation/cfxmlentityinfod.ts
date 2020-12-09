declare namespace cocoascript {
/**
 * Contains information describing an XML entity.
 * doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo
 */
interface CFXMLEntityInfo {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443274-entityid
  entityID(): cocoascript.CFXMLExternalID;
  setEntityID(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443298-entitytype
  entityType(): cocoascript.CFXMLEntityTypeCode;
  setEntityType(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443239-notationname
  notationName(): cocoascript.CFStringRef;
  setNotationName(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlentityinfo/1443320-replacementtext
  replacementText(): cocoascript.CFStringRef;
  setReplacementText(): void;
}
}

