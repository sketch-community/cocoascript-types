declare namespace cocoascript {
/**
 * An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
 * doc://com.apple.documentation/documentation/foundation/nsconnection
 */
interface NSConnection extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478094-initwithreceiveport
  initWithReceivePort_sendPort(receivePort: cocoascript.NSPort, sendPort: cocoascript.NSPort):cocoascript.NSConnection;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478022-runinnewthread
  runInNewThread():void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478083-enablemultiplethreads
  enableMultipleThreads():void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478100-multiplethreadsenabled
  multipleThreadsEnabled(): cocoascript.BOOL;
  setMultipleThreadsEnabled(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478041-addrunloop
  addRunLoop(runloop: cocoascript.NSRunLoop):void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478032-removerunloop
  removeRunLoop(runloop: cocoascript.NSRunLoop):void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478102-registername
  registerName(name: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478067-registername
  registerName_withNameServer(name: cocoascript.NSString, server: cocoascript.NSPortNameServer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478012-rootobject
  rootObject(): cocoascript.id;
  setRootObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478065-rootproxy
  rootProxy(): cocoascript.NSDistantObject;
  setRootProxy(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478047-remoteobjects
  remoteObjects(): cocoascript.NSArray;
  setRemoteObjects(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478043-localobjects
  localObjects(): cocoascript.NSArray;
  setLocalObjects(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478010-requesttimeout
  requestTimeout(): cocoascript.NSTimeInterval;
  setRequestTimeout(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478053-replytimeout
  replyTimeout(): cocoascript.NSTimeInterval;
  setReplyTimeout(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478038-independentconversationqueueing
  independentConversationQueueing(): cocoascript.BOOL;
  setIndependentConversationQueueing(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478114-addrequestmode
  addRequestMode(rmode: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478055-removerequestmode
  removeRequestMode(rmode: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478091-requestmodes
  requestModes(): cocoascript.NSString;
  setRequestModes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478036-invalidate
  invalidate():void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478063-valid
  valid(): cocoascript.BOOL;
  setValid(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478096-receiveport
  receivePort(): cocoascript.NSPort;
  setReceivePort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478071-sendport
  sendPort(): cocoascript.NSPort;
  setSendPort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478104-dispatchwithcomponents
  dispatchWithComponents(components: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478112-statistics
  statistics(): cocoascript.NSNumber;
  setStatistics(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnection/1478077-delegate
  delegate(): cocoascript.NSConnectionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondiddienotification
  NSConnectionDidDieNotification(): cocoascript.const;
  setNSConnectionDidDieNotification(): void;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondidinitializenotification
  NSConnectionDidInitializeNotification(): cocoascript.const;
  setNSConnectionDidInitializeNotification(): void;
  // 
  alloc():cocoascript.NSConnection;
  // 
  init():cocoascript.NSConnection;
}
}
declare const NSConnection: cocoascript.NSConnection;

