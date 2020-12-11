declare namespace cocoascript {
  /**
   * A network service that broadcasts its availability using multicast DNS.
   * doc://com.apple.documentation/documentation/foundation/nsnetservice
   */
  interface NSNetService extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417615-initwithdomain
    initWithDomain_type_name(domain: cocoascript.NSString, type: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSNetService;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413364-initwithdomain
    initWithDomain_type_name_port(domain: cocoascript.NSString, type: cocoascript.NSString, name: cocoascript.NSString, port: number):cocoascript.NSNetService;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1408528-addresses
    addresses(): cocoascript.NSData;
    setAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414495-domain
    domain(): cocoascript.NSString;
    setDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414086-includespeertopeer
    includesPeerToPeer(): cocoascript.BOOL;
    setIncludesPeerToPeer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1418325-getinputstream
    getInputStream_outputStream(inputStream: cocoascript._Nullable, outputStream: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1409022-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416595-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417698-txtrecorddata
    TXTRecordData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1410648-settxtrecorddata
    setTXTRecordData(recordData: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1410296-delegate
    delegate(): cocoascript.NSNetServiceDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1417221-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414621-removefromrunloop
    removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416480-publish
    publish():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1414390-publishwithoptions
    publishWithOptions(options: cocoascript.NSNetServiceOptions):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1506204-resolve
    resolve():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1416564-resolvewithtimeout
    resolveWithTimeout(timeout: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1409816-port
    port(): cocoascript.NSInteger;
    setPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1411486-startmonitoring
    startMonitoring():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1408827-stop
    stop():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413861-stopmonitoring
    stopMonitoring():void;
    // doc://com.apple.documentation/documentation/foundation/nsnetservice/1413300-hostname
    hostName(): cocoascript.NSString;
    setHostName(): void;
    //
    alloc():cocoascript.NSNetService;
    //
    init():cocoascript.NSNetService;
  }
}

declare const NSNetService: cocoascript.NSNetService;
