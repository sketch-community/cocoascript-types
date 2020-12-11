declare namespace cocoascript {
  /**
   * An interface that implements an index-maintenance app extension.
   * doc://com.apple.documentation/documentation/corespotlight/csindexextensionrequesthandler
   */
  interface CSIndexExtensionRequestHandler extends NSObject {
    //
    alloc():cocoascript.CSIndexExtensionRequestHandler;
    //
    init():cocoascript.CSIndexExtensionRequestHandler;
  }
}

declare const CSIndexExtensionRequestHandler: cocoascript.CSIndexExtensionRequestHandler;
