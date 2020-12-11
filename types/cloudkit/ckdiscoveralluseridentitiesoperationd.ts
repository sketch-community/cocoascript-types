declare namespace cocoascript {
  /**
   * An operation that fetches all discoverable user identities in the device’s Contacts.
   * doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation
   */
  interface CKDiscoverAllUserIdentitiesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640435-init
    init():cocoascript.CKDiscoverAllUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640416-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): cocoascript.CKUserIdentity;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640497-discoveralluseridentitiescomplet
    discoverAllUserIdentitiesCompletionBlock(): cocoascript.NSError;
    setDiscoverAllUserIdentitiesCompletionBlock(): void;
    //
    alloc():cocoascript.CKDiscoverAllUserIdentitiesOperation;
    //
    init():cocoascript.CKDiscoverAllUserIdentitiesOperation;
  }
}

declare const CKDiscoverAllUserIdentitiesOperation: cocoascript.CKDiscoverAllUserIdentitiesOperation;
