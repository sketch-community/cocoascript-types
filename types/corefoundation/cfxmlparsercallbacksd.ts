declare namespace cocoascript {
  /**
   * Contains version information and function pointers to callbacks needed when parsing XML.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks
   */
  interface CFXMLParserCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541618-addchild
    addChild(): cocoascript.CFXMLParserAddChildCallBack;
    setAddChild(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541742-createxmlstructure
    createXMLStructure(): cocoascript.CFXMLParserCreateXMLStructureCallBack;
    setCreateXMLStructure(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1543438-endxmlstructure
    endXMLStructure(): cocoascript.CFXMLParserEndXMLStructureCallBack;
    setEndXMLStructure(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1542159-handleerror
    handleError(): cocoascript.CFXMLParserHandleErrorCallBack;
    setHandleError(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1541449-resolveexternalentity
    resolveExternalEntity(): cocoascript.CFXMLParserResolveExternalEntityCallBack;
    setResolveExternalEntity(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercallbacks/1542828-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
