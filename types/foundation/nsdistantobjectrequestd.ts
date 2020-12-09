declare namespace cocoascript {
/**
 * An object used by the distributed objects system to help handle invocations between different processes.
 * doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest
 */
interface NSDistantObjectRequest extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478020-replywithexception
  replyWithException(exception: cocoascript.NSException):void;
  // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478073-connection
  connection(): cocoascript.NSConnection;
  setConnection(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478098-conversation
  conversation(): cocoascript.id;
  setConversation(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdistantobjectrequest/1478018-invocation
  invocation(): cocoascript.NSInvocation;
  setInvocation(): void;
  // 
  alloc():cocoascript.NSDistantObjectRequest;
  // 
  init():cocoascript.NSDistantObjectRequest;
}
}
declare const NSDistantObjectRequest: cocoascript.NSDistantObjectRequest;

