declare namespace cocoascript {
  /**
   * Contains a description of the element type.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlelementtypedeclarationinfo
   */
  interface CFXMLElementTypeDeclarationInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlelementtypedeclarationinfo/1443338-contentdescription
    contentDescription(): cocoascript.CFStringRef;
    setContentDescription(): void;
  }
}
