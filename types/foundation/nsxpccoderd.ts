declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/foundation/nsxpccoder
 */
interface NSXPCCoder extends NSCoder {
  // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3172580-connection
  connection(): cocoascript.NSXPCConnection;
  setConnection(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3172581-userinfo
  userInfo(): cocoascript.NSObject;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3174969-decodexpcobjectoftype
  decodeXPCObjectOfType_forKey(type: cocoascript.xpc_type_t, key: cocoascript.NSString):cocoascript.xpc_object_t;
  // doc://com.apple.documentation/documentation/foundation/nsxpccoder/3174970-encodexpcobject
  encodeXPCObject_forKey(xpcObject: cocoascript.xpc_object_t, key: cocoascript.NSString):void;
  // 
  alloc():cocoascript.NSXPCCoder;
  // 
  init():cocoascript.NSXPCCoder;
}
}
declare const NSXPCCoder: cocoascript.NSXPCCoder;

