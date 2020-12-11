declare namespace cocoascript {
  /**
   * An operation that fetches user identities.
   * doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation
   */
  interface CKDiscoverUserIdentitiesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640525-init
    init():cocoascript.CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640521-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: cocoascript.CKUserIdentityLookupInfo):cocoascript.CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640450-useridentitylookupinfos
    userIdentityLookupInfos(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640524-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640500-discoveruseridentitiescompletion
    discoverUserIdentitiesCompletionBlock(): cocoascript.NSError;
    setDiscoverUserIdentitiesCompletionBlock(): void;
    //
    alloc():cocoascript.CKDiscoverUserIdentitiesOperation;
    //
    init():cocoascript.CKDiscoverUserIdentitiesOperation;
  }
}

declare const CKDiscoverUserIdentitiesOperation: cocoascript.CKDiscoverUserIdentitiesOperation;
