declare namespace cocoascript {
/**
 * A description of a relationship of a Core Data entity.
 * doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription
 */
interface NSRelationshipDescription extends NSPropertyDescription {
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506652-destinationentity
  destinationEntity(): cocoascript.NSEntityDescription;
  setDestinationEntity(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506596-inverserelationship
  inverseRelationship(): cocoascript.NSRelationshipDescription;
  setInverseRelationship(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506870-deleterule
  deleteRule(): cocoascript.NSDeleteRule;
  setDeleteRule(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506780-maxcount
  maxCount(): cocoascript.NSUInteger;
  setMaxCount(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506599-mincount
  minCount(): cocoascript.NSUInteger;
  setMinCount(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506560-tomany
  toMany(): cocoascript.BOOL;
  setToMany(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506382-ordered
  ordered(): cocoascript.BOOL;
  setOrdered(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506791-versionhash
  versionHash(): cocoascript.NSData;
  setVersionHash(): void;
  // 
  alloc():cocoascript.NSRelationshipDescription;
  // 
  init():cocoascript.NSRelationshipDescription;
}
}
declare const NSRelationshipDescription: cocoascript.NSRelationshipDescription;

