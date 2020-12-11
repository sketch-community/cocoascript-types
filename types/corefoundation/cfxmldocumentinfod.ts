declare namespace cocoascript {
  /**
   * Contains the source URL and text encoding information for the XML document.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo
   */
  interface CFXMLDocumentInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo/1443336-encoding
    encoding(): cocoascript.CFStringEncoding;
    setEncoding(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmldocumentinfo/1443348-sourceurl
    sourceURL(): cocoascript.CFURLRef;
    setSourceURL(): void;
  }
}
