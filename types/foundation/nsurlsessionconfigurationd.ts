declare namespace cocoascript {
  /**
   * A configuration object that defines behavior and policies for a URL session.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration
   */
  interface NSURLSessionConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411560-defaultsessionconfiguration
    defaultSessionConfiguration(): cocoascript.NSURLSessionConfiguration;
    setDefaultSessionConfiguration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410529-ephemeralsessionconfiguration
    ephemeralSessionConfiguration(): cocoascript.NSURLSessionConfiguration;
    setEphemeralSessionConfiguration(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3240616-init
    init():cocoascript.NSURLSessionConfiguration;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408987-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411532-httpadditionalheaders
    HTTPAdditionalHeaders(): cocoascript.NSDictionary;
    setHTTPAdditionalHeaders(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411606-networkservicetype
    networkServiceType(): cocoascript.NSURLRequestNetworkServiceType;
    setNetworkServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409406-allowscellularaccess
    allowsCellularAccess(): cocoascript.BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408259-timeoutintervalforrequest
    timeoutIntervalForRequest(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408153-timeoutintervalforresource
    timeoutIntervalForResource(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForResource(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409450-sharedcontaineridentifier
    sharedContainerIdentifier(): cocoascript.NSString;
    setSharedContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2908812-waitsforconnectivity
    waitsForConnectivity(): cocoascript.BOOL;
    setWaitsForConnectivity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1408933-httpcookieacceptpolicy
    HTTPCookieAcceptPolicy(): cocoascript.NSHTTPCookieAcceptPolicy;
    setHTTPCookieAcceptPolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411589-httpshouldsetcookies
    HTTPShouldSetCookies(): cocoascript.BOOL;
    setHTTPShouldSetCookies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411599-httpcookiestorage
    HTTPCookieStorage(): cocoascript.NSHTTPCookieStorage;
    setHTTPCookieStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3362533-tlsminimumsupportedprotocolversi
    TLSMinimumSupportedProtocolVersion(): cocoascript.tls_protocol_version_t;
    setTLSMinimumSupportedProtocolVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3362532-tlsmaximumsupportedprotocolversi
    TLSMaximumSupportedProtocolVersion(): cocoascript.tls_protocol_version_t;
    setTLSMaximumSupportedProtocolVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410947-urlcredentialstorage
    URLCredentialStorage(): cocoascript.NSURLCredentialStorage;
    setURLCredentialStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411526-tlsminimumsupportedprotocol
    TLSMinimumSupportedProtocol(): cocoascript.SSLProtocol;
    setTLSMinimumSupportedProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409076-tlsmaximumsupportedprotocol
    TLSMaximumSupportedProtocol(): cocoascript.SSLProtocol;
    setTLSMaximumSupportedProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1410148-urlcache
    URLCache(): cocoascript.NSURLCache;
    setURLCache(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411655-requestcachepolicy
    requestCachePolicy(): cocoascript.NSURLRequestCachePolicy;
    setRequestCachePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1617174-sessionsendslaunchevents
    sessionSendsLaunchEvents(): cocoascript.BOOL;
    setSessionSendsLaunchEvents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411552-discretionary
    discretionary(): cocoascript.BOOL;
    setDiscretionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1409517-shoulduseextendedbackgroundidlem
    shouldUseExtendedBackgroundIdleMode(): cocoascript.BOOL;
    setShouldUseExtendedBackgroundIdleMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411050-protocolclasses
    protocolClasses(): cocoascript.Class;
    setProtocolClasses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2875967-multipathservicetype
    multipathServiceType(): cocoascript.NSURLSessionMultipathServiceType;
    setMultipathServiceType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1407597-httpmaximumconnectionsperhost
    HTTPMaximumConnectionsPerHost(): cocoascript.NSInteger;
    setHTTPMaximumConnectionsPerHost(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411657-httpshouldusepipelining
    HTTPShouldUsePipelining(): cocoascript.BOOL;
    setHTTPShouldUsePipelining(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/1411499-connectionproxydictionary
    connectionProxyDictionary(): cocoascript.NSDictionary;
    setConnectionProxyDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/2908812-waitsforconnectivity
    waitsForConnectivity(): cocoascript.BOOL;
    setWaitsForConnectivity(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3235751-allowsconstrainednetworkaccess
    allowsConstrainedNetworkAccess(): cocoascript.BOOL;
    setAllowsConstrainedNetworkAccess(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionconfiguration/3235752-allowsexpensivenetworkaccess
    allowsExpensiveNetworkAccess(): cocoascript.BOOL;
    setAllowsExpensiveNetworkAccess(): void;
    //
    alloc():cocoascript.NSURLSessionConfiguration;
    //
    init():cocoascript.NSURLSessionConfiguration;
  }
}

declare const NSURLSessionConfiguration: cocoascript.NSURLSessionConfiguration;
