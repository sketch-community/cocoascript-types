declare namespace cocoascript {
  /**
   * A server or an area on a server, commonly referred to as a realm, that requires authentication.
   * doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace
   */
  interface NSURLProtectionSpace extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1414165-initwithhost
    initWithHost_port_protocol_realm_authenticationMethod(host: cocoascript.NSString, port: cocoascript.NSInteger, protocol: cocoascript.NSString, realm: cocoascript.NSString, authenticationMethod: cocoascript.NSString):cocoascript.NSURLProtectionSpace;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1417998-initwithproxyhost
    initWithProxyHost_port_type_realm_authenticationMethod(host: cocoascript.NSString, port: cocoascript.NSInteger, type: cocoascript.NSString, realm: cocoascript.NSString, authenticationMethod: cocoascript.NSString):cocoascript.NSURLProtectionSpace;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1415028-authenticationmethod
    authenticationMethod(): cocoascript.NSString;
    setAuthenticationMethod(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1417061-distinguishednames
    distinguishedNames(): cocoascript.NSData;
    setDistinguishedNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1418205-host
    host(): cocoascript.NSString;
    setHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1561656-isproxy
    isProxy(): cocoascript.BOOL;
    setIsProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1408716-port
    port(): cocoascript.NSInteger;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1411191-protocol
    protocol(): cocoascript.NSString;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1411924-proxytype
    proxyType(): cocoascript.NSString;
    setProxyType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1416007-realm
    realm(): cocoascript.NSString;
    setRealm(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1415176-receivescredentialsecurely
    receivesCredentialSecurely(): cocoascript.BOOL;
    setReceivesCredentialSecurely(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlprotectionspace/1409926-servertrust
    serverTrust(): cocoascript.SecTrustRef;
    setServerTrust(): void;
    //
    alloc():cocoascript.NSURLProtectionSpace;
    //
    init():cocoascript.NSURLProtectionSpace;
  }
}

declare const NSURLProtectionSpace: cocoascript.NSURLProtectionSpace;
