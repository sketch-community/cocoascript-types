declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient
   */
  interface CARemoteLayerClient extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418377-initwithserverport
    initWithServerPort(port: cocoascript.mach_port_t):cocoascript.CARemoteLayerClient;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418375-clientid
    clientId(): number;
    setClientId(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418373-layer
    layer(): cocoascript.CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418372-invalidate
    invalidate():void;
    //
    alloc():cocoascript.CARemoteLayerClient;
    //
    init():cocoascript.CARemoteLayerClient;
  }
}

declare const CARemoteLayerClient: cocoascript.CARemoteLayerClient;
