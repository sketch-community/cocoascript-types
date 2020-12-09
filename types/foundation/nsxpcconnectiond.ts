declare namespace cocoascript {
/**
 * A bidirectional communication channel between two processes.
 * doc://com.apple.documentation/documentation/foundation/nsxpcconnection
 */
interface NSXPCConnection extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1416298-initwithlistenerendpoint
  initWithListenerEndpoint(endpoint: cocoascript.NSXPCListenerEndpoint):cocoascript.NSXPCConnection;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1418074-initwithmachservicename
  initWithMachServiceName_options(name: cocoascript.NSString, options: cocoascript.NSXPCConnectionOptions):cocoascript.NSXPCConnection;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1416370-initwithservicename
  initWithServiceName(serviceName: cocoascript.NSString):cocoascript.NSXPCConnection;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1410393-auditsessionidentifier
  auditSessionIdentifier(): any;
  setAuditSessionIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407793-effectivegroupidentifier
  effectiveGroupIdentifier(): any;
  setEffectiveGroupIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408346-effectiveuseridentifier
  effectiveUserIdentifier(): any;
  setEffectiveUserIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411757-endpoint
  endpoint(): cocoascript.NSXPCListenerEndpoint;
  setEndpoint(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408106-exportedinterface
  exportedInterface(): cocoascript.NSXPCInterface;
  setExportedInterface(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1412016-exportedobject
  exportedObject(): cocoascript.id;
  setExportedObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407915-interruptionhandler
  interruptionHandler(): void;
  setInterruptionHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1414358-invalidationhandler
  invalidationHandler(): void;
  setInvalidationHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411428-processidentifier
  processIdentifier(): any;
  setProcessIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411472-remoteobjectinterface
  remoteObjectInterface(): cocoascript.NSXPCInterface;
  setRemoteObjectInterface(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1411031-remoteobjectproxy
  remoteObjectProxy(): cocoascript.id;
  setRemoteObjectProxy(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1413751-servicename
  serviceName(): cocoascript.NSString;
  setServiceName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1412618-invalidate
  invalidate():void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1407905-remoteobjectproxywitherrorhandle
  remoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCConnection;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1408677-resume
  resume():void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/3172583-schedulesendbarrierblock
  scheduleSendBarrierBlock(block: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/1410778-suspend
  suspend():void;
  // doc://com.apple.documentation/documentation/foundation/nsxpcconnection/2879410-synchronousremoteobjectproxywith
  synchronousRemoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCConnection;
  // 
  alloc():cocoascript.NSXPCConnection;
  // 
  init():cocoascript.NSXPCConnection;
}
}
declare const NSXPCConnection: cocoascript.NSXPCConnection;

