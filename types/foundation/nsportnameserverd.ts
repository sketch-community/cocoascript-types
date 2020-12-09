declare namespace cocoascript {
/**
 * An object-oriented interface to the port registration service used by the distributed objects system.
 * doc://com.apple.documentation/documentation/foundation/nsportnameserver
 */
interface NSPortNameServer extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401738-portforname
  portForName(name: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401711-portforname
  portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401732-registerport
  registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsportnameserver/1401734-removeportforname
  removePortForName(name: cocoascript.NSString):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSPortNameServer;
  // 
  init():cocoascript.NSPortNameServer;
}
}
declare const NSPortNameServer: cocoascript.NSPortNameServer;

