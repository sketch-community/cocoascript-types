declare namespace cocoascript {
/**
 * Contains the system and public IDs for an external entity reference.
 * doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid
 */
interface CFXMLExternalID {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid/1443292-publicid
  publicID(): cocoascript.CFStringRef;
  setPublicID(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlexternalid/1443334-systemid
  systemID(): cocoascript.CFURLRef;
  setSystemID(): void;
}
}

