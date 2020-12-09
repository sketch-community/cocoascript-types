declare namespace cocoascript {
/**
 * Contains version information and function pointers to callbacks used when handling a program-defined context.
 * doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext
 */
interface CFXMLParserContext {
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543179-copydescription
  copyDescription(): cocoascript.CFXMLParserCopyDescriptionCallBack;
  setCopyDescription(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543285-release
  release(): cocoascript.CFXMLParserReleaseCallBack;
  setRelease(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1542873-retain
  retain(): cocoascript.CFXMLParserRetainCallBack;
  setRetain(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfxmlparsercontext/1543253-version
  version(): cocoascript.CFIndex;
  setVersion(): void;
}
}

