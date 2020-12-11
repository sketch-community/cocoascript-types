declare namespace cocoascript {
  /**
   * A mapping instance that specifies how to map an entity from a source to a destination managed object model.
   * doc://com.apple.documentation/documentation/coredata/nsentitymapping
   */
  interface NSEntityMapping extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443187-sourceentityname
    sourceEntityName(): cocoascript.NSString;
    setSourceEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443182-sourceentityversionhash
    sourceEntityVersionHash(): cocoascript.NSData;
    setSourceEntityVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443180-sourceexpression
    sourceExpression(): cocoascript.NSExpression;
    setSourceExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443176-destinationentityname
    destinationEntityName(): cocoascript.NSString;
    setDestinationEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443169-destinationentityversionhash
    destinationEntityVersionHash(): cocoascript.NSData;
    setDestinationEntityVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443167-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443194-mappingtype
    mappingType(): cocoascript.NSEntityMappingType;
    setMappingType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443171-entitymigrationpolicyclassname
    entityMigrationPolicyClassName(): cocoascript.NSString;
    setEntityMigrationPolicyClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443193-attributemappings
    attributeMappings(): cocoascript.NSPropertyMapping;
    setAttributeMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443163-relationshipmappings
    relationshipMappings(): cocoascript.NSPropertyMapping;
    setRelationshipMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443184-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSEntityMapping;
    //
    init():cocoascript.NSEntityMapping;
  }
}

declare const NSEntityMapping: cocoascript.NSEntityMapping;
