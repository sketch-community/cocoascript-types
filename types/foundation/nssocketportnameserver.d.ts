declare namespace cocoascript {
  /**
   * A port name server that takes and returns socket ports.
   * doc://com.apple.documentation/documentation/foundation/nssocketportnameserver
   */
  interface NSSocketPortNameServer extends NSPortNameServer {
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401750-portforname
    portForName(name: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401727-portforname
    portForName_host(name: cocoascript.NSString, host: cocoascript.NSString):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401717-portforname
    portForName_host_nameServerPortNumber(name: cocoascript.NSString, host: cocoascript.NSString, portNumber: number):cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401730-registerport
    registerPort_name(port: cocoascript.NSPort, name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401713-registerport
    registerPort_name_nameServerPortNumber(port: cocoascript.NSPort, name: cocoascript.NSString, portNumber: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401754-removeportforname
    removePortForName(name: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nssocketportnameserver/1401755-defaultnameserverportnumber
    defaultNameServerPortNumber(): number;
    setDefaultNameServerPortNumber(): void;
    //
    alloc():cocoascript.NSSocketPortNameServer;
    //
    init():cocoascript.NSSocketPortNameServer;
  }
}

declare const NSSocketPortNameServer: cocoascript.NSSocketPortNameServer;
