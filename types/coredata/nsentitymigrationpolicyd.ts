declare namespace cocoascript {
/**
 * A policy instance that customizes the migration process for an entity mapping.
 * doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy
 */
interface NSEntityMigrationPolicy extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423785-beginentitymapping
  beginEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423801-createdestinationinstancesforsou
  createDestinationInstancesForSourceInstance_entityMapping_manager_error(sInstance: cocoascript.NSManagedObject, mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423805-endinstancecreationforentitymapp
  endInstanceCreationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423783-createrelationshipsfordestinatio
  createRelationshipsForDestinationInstance_entityMapping_manager_error(dInstance: cocoascript.NSManagedObject, mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423793-endrelationshipcreationforentity
  endRelationshipCreationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423791-performcustomvalidationforentity
  performCustomValidationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423787-endentitymapping
  endEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationmanagerkey
  NSMigrationManagerKey(): cocoascript.const;
  setNSMigrationManagerKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationsourceobjectkey
  NSMigrationSourceObjectKey(): cocoascript.const;
  setNSMigrationSourceObjectKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationdestinationobjectkey
  NSMigrationDestinationObjectKey(): cocoascript.const;
  setNSMigrationDestinationObjectKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationentitymappingkey
  NSMigrationEntityMappingKey(): cocoascript.const;
  setNSMigrationEntityMappingKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationpropertymappingkey
  NSMigrationPropertyMappingKey(): cocoascript.const;
  setNSMigrationPropertyMappingKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmigrationentitypolicykey
  NSMigrationEntityPolicyKey(): cocoascript.const;
  setNSMigrationEntityPolicyKey(): void;
  // 
  alloc():cocoascript.NSEntityMigrationPolicy;
  // 
  init():cocoascript.NSEntityMigrationPolicy;
}
}
declare const NSEntityMigrationPolicy: cocoascript.NSEntityMigrationPolicy;

