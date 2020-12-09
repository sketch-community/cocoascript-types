declare namespace cocoascript {
/**
 * A port that represents a BSD socket.
 * doc://com.apple.documentation/documentation/foundation/nssocketport
 */
interface NSSocketPort extends NSPort {
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399549-init
  init():cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399488-initwithtcpport
  initWithTCPPort(port: cocoascript.short):cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399497-initwithprotocolfamily
  initWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: cocoascript.NSData):cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399484-initwithprotocolfamily
  initWithProtocolFamily_socketType_protocol_socket(family: number, type: number, protocol: number, sock: cocoascript.NSSocketNativeHandle):cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399474-initremotewithtcpport
  initRemoteWithTCPPort_host(port: cocoascript.short, hostName: cocoascript.NSString):cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399535-initremotewithprotocolfamily
  initRemoteWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: cocoascript.NSData):cocoascript.NSSocketPort;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399480-address
  address(): cocoascript.NSData;
  setAddress(): void;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399557-protocol
  protocol(): number;
  setProtocol(): void;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399543-protocolfamily
  protocolFamily(): number;
  setProtocolFamily(): void;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399492-socket
  socket(): cocoascript.NSSocketNativeHandle;
  setSocket(): void;
  // doc://com.apple.documentation/documentation/foundation/nssocketport/1399565-sockettype
  socketType(): number;
  setSocketType(): void;
  // 
  alloc():cocoascript.NSSocketPort;
  // 
  init():cocoascript.NSSocketPort;
}
}
declare const NSSocketPort: cocoascript.NSSocketPort;

