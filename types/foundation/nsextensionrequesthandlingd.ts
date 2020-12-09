declare namespace cocoascript {
/**
 * The interface an app extension uses to respond to a request from a host app.
 * doc://com.apple.documentation/documentation/foundation/nsextensionrequesthandling
 */
interface NSExtensionRequestHandling extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsextensionrequesthandling/1413395-beginrequestwithextensioncontext
  beginRequestWithExtensionContext(context: cocoascript.NSExtensionContext):void;
}
}

