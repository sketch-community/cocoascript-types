declare namespace cocoascript {
/**
 * A server takes and returns message ports.
 * doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver
 */
interface NSMessagePortNameServer extends NSPortNameServer {
  // doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver/1401736-portforname
  portForName(name: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsmessageportnameserver/1401729-portforname
  portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
  // 
  alloc():cocoascript.NSMessagePortNameServer;
  // 
  init():cocoascript.NSMessagePortNameServer;
}
}
declare const NSMessagePortNameServer: cocoascript.NSMessagePortNameServer;

