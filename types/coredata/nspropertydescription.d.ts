declare namespace cocoascript {
  /**
   * A description of a property of a Core Data entity.
   * doc://com.apple.documentation/documentation/coredata/nspropertydescription
   */
  interface NSPropertyDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506745-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506669-indexed
    indexed(): cocoascript.BOOL;
    setIndexed(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506735-optional
    optional(): cocoascript.BOOL;
    setOptional(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506766-transient
    transient(): cocoascript.BOOL;
    setTransient(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506759-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506833-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506842-validationpredicates
    validationPredicates(): cocoascript.NSPredicate;
    setValidationPredicates(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506886-validationwarnings
    validationWarnings(): cocoascript.NSArray;
    setValidationWarnings(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506852-setvalidationpredicates
    setValidationPredicates_withValidationWarnings(validationPredicates: cocoascript.NSPredicate, validationWarnings: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506198-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506214-versionhashmodifier
    versionHashModifier(): cocoascript.NSString;
    setVersionHashModifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506641-renamingidentifier
    renamingIdentifier(): cocoascript.NSString;
    setRenamingIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506784-indexedbyspotlight
    indexedBySpotlight(): cocoascript.BOOL;
    setIndexedBySpotlight(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506260-storedinexternalrecord
    storedInExternalRecord(): cocoascript.BOOL;
    setStoredInExternalRecord(): void;
    //
    alloc():cocoascript.NSPropertyDescription;
    //
    init():cocoascript.NSPropertyDescription;
  }
}

declare const NSPropertyDescription: cocoascript.NSPropertyDescription;
