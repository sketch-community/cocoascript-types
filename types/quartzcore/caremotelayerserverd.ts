declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver
 */
interface CARemoteLayerServer extends NSObject {
  // doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver/1521922-serverport
  serverPort(): cocoascript.mach_port_t;
  setServerPort(): void;
  // 
  alloc():cocoascript.CARemoteLayerServer;
  // 
  init():cocoascript.CARemoteLayerServer;
}
}
declare const CARemoteLayerServer: cocoascript.CARemoteLayerServer;

