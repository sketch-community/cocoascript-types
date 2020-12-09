declare namespace cocoascript {
/**
 * A port name server that takes and returns Mach port objects.
 * doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver
 */
interface NSMachBootstrapServer extends NSPortNameServer {
  // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401715-portforname
  portForName(name: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401748-portforname
  portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401744-serviceportwithname
  servicePortWithName(name: cocoascript.NSString):cocoascript.NSPort;
  // doc://com.apple.documentation/documentation/foundation/nsmachbootstrapserver/1401725-registerport
  registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSMachBootstrapServer;
  // 
  init():cocoascript.NSMachBootstrapServer;
}
}
declare const NSMachBootstrapServer: cocoascript.NSMachBootstrapServer;

