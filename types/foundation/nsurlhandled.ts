declare namespace cocoascript {
  /**
   * An object that accesses and manages resource data indicated by a URL.
   * doc://com.apple.documentation/documentation/foundation/nsurlhandle
   */
  interface NSURLHandle extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589236-initwithurl
    initWithURL_cached(anURL: cocoascript.NSURL, willCache: cocoascript.BOOL):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589220-addclient
    addClient(client: cocoascript.NSURLHandleClient):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589230-removeclient
    removeClient(client: cocoascript.NSURLHandleClient):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589214-propertyforkey
    propertyForKey(propertyKey: cocoascript.NSString):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589204-propertyforkeyifavailable
    propertyForKeyIfAvailable(propertyKey: cocoascript.NSString):cocoascript.NSURLHandle;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589241-writeproperty
    writeProperty_forKey(propertyValue: cocoascript.NSURLHandle, propertyKey: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589224-availableresourcedata
    availableResourceData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589225-backgroundloaddidfailwithreason
    backgroundLoadDidFailWithReason(reason: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589229-beginloadinbackground
    beginLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589240-cancelloadinbackground
    cancelLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589234-didloadbytes
    didLoadBytes_loadComplete(newBytes: cocoascript.NSData, yorn: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589238-endloadinbackground
    endLoadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589239-expectedresourcedatasize
    expectedResourceDataSize():number;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589205-failurereason
    failureReason():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589233-flushcacheddata
    flushCachedData():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589221-loadinbackground
    loadInBackground():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589222-loadinforeground
    loadInForeground():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589209-resourcedata
    resourceData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589243-status
    status():cocoascript.NSURLHandleStatus;
    // doc://com.apple.documentation/documentation/foundation/nsurlhandle/1589210-writedata
    writeData(data: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsftppropertyactivetransfermodekey
    NSFTPPropertyActiveTransferModeKey(): cocoascript.NSString;
    setNSFTPPropertyActiveTransferModeKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsftppropertyftpproxy
    NSFTPPropertyFTPProxy(): cocoascript.NSString;
    setNSFTPPropertyFTPProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsftppropertyfileoffsetkey
    NSFTPPropertyFileOffsetKey(): cocoascript.NSString;
    setNSFTPPropertyFileOffsetKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsftppropertyuserloginkey
    NSFTPPropertyUserLoginKey(): cocoascript.NSString;
    setNSFTPPropertyUserLoginKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsftppropertyuserpasswordkey
    NSFTPPropertyUserPasswordKey(): cocoascript.NSString;
    setNSFTPPropertyUserPasswordKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertyerrorpagedatakey
    NSHTTPPropertyErrorPageDataKey(): cocoascript.NSString;
    setNSHTTPPropertyErrorPageDataKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertyhttpproxy
    NSHTTPPropertyHTTPProxy(): cocoascript.NSString;
    setNSHTTPPropertyHTTPProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertyredirectionheaderskey
    NSHTTPPropertyRedirectionHeadersKey(): cocoascript.NSString;
    setNSHTTPPropertyRedirectionHeadersKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertyserverhttpversionkey
    NSHTTPPropertyServerHTTPVersionKey(): cocoascript.NSString;
    setNSHTTPPropertyServerHTTPVersionKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertystatuscodekey
    NSHTTPPropertyStatusCodeKey(): cocoascript.NSString;
    setNSHTTPPropertyStatusCodeKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nshttppropertystatusreasonkey
    NSHTTPPropertyStatusReasonKey(): cocoascript.NSString;
    setNSHTTPPropertyStatusReasonKey(): void;
    //
    alloc():cocoascript.NSURLHandle;
    //
    init():cocoascript.NSURLHandle;
  }
}

declare const NSURLHandle: cocoascript.NSURLHandle;
