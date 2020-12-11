declare namespace cocoascript {
  /**
   * A description of an entity in Core Data.
   * doc://com.apple.documentation/documentation/coredata/nsentitydescription
   */
  interface NSEntityDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425101-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425121-managedobjectmodel
    managedObjectModel(): cocoascript.NSManagedObjectModel;
    setManagedObjectModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425131-managedobjectclassname
    managedObjectClassName(): cocoascript.NSString;
    setManagedObjectClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425135-renamingidentifier
    renamingIdentifier(): cocoascript.NSString;
    setRenamingIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425097-abstract
    abstract(): cocoascript.BOOL;
    setAbstract(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425117-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/2892364-corespotlightdisplaynameexpressi
    coreSpotlightDisplayNameExpression(): cocoascript.NSExpression;
    setCoreSpotlightDisplayNameExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425123-subentitiesbyname
    subentitiesByName(): cocoascript.NSEntityDescription;
    setSubentitiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425104-subentities
    subentities(): cocoascript.NSEntityDescription;
    setSubentities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425129-superentity
    superentity(): cocoascript.NSEntityDescription;
    setSuperentity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425113-iskindofentity
    isKindOfEntity(entity: cocoascript.NSEntityDescription):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425137-propertiesbyname
    propertiesByName(): cocoascript.NSPropertyDescription;
    setPropertiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425125-properties
    properties(): cocoascript.NSPropertyDescription;
    setProperties(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425099-attributesbyname
    attributesByName(): cocoascript.NSAttributeDescription;
    setAttributesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425106-relationshipsbyname
    relationshipsByName(): cocoascript.NSRelationshipDescription;
    setRelationshipsByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425127-relationshipswithdestinationenti
    relationshipsWithDestinationEntity(entity: cocoascript.NSEntityDescription):cocoascript.NSRelationshipDescription;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425133-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425119-versionhashmodifier
    versionHashModifier(): cocoascript.NSString;
    setVersionHashModifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/2887059-indexes
    indexes(): cocoascript.NSFetchIndexDescription;
    setIndexes(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425115-compoundindexes
    compoundIndexes(): cocoascript.id;
    setCompoundIndexes(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425095-uniquenessconstraints
    uniquenessConstraints(): cocoascript.id;
    setUniquenessConstraints(): void;
    //
    alloc():cocoascript.NSEntityDescription;
    //
    init():cocoascript.NSEntityDescription;
  }
}

declare const NSEntityDescription: cocoascript.NSEntityDescription;
