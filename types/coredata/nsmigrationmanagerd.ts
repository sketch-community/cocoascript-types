declare namespace cocoascript {
  /**
   * A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
   * doc://com.apple.documentation/documentation/coredata/nsmigrationmanager
   */
  interface NSMigrationManager extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417583-initwithsourcemodel
    initWithSourceModel_destinationModel(sourceModel: cocoascript.NSManagedObjectModel, destinationModel: cocoascript.NSManagedObjectModel):cocoascript.NSMigrationManager;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417584-migratestorefromurl
    migrateStoreFromURL_type_options_withMappingModel_toDestinationURL_destinationType_destinationOptions_error(sourceURL: cocoascript.NSURL, sStoreType: cocoascript.NSString, sOptions: cocoascript.NSDictionary, mappings: cocoascript.NSMappingModel, dURL: cocoascript.NSURL, dStoreType: cocoascript.NSString, dOptions: cocoascript.NSDictionary, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417590-reset
    reset():void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417608-cancelmigrationwitherror
    cancelMigrationWithError(error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417602-migrationprogress
    migrationProgress(): number;
    setMigrationProgress(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417582-currententitymapping
    currentEntityMapping(): cocoascript.NSEntityMapping;
    setCurrentEntityMapping(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417604-associatesourceinstance
    associateSourceInstance_withDestinationInstance_forEntityMapping(sourceInstance: cocoascript.NSManagedObject, destinationInstance: cocoascript.NSManagedObject, entityMapping: cocoascript.NSEntityMapping):void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417594-destinationinstancesforentitymap
    destinationInstancesForEntityMappingNamed_sourceInstances(mappingName: cocoascript.NSString, sourceInstances: cocoascript.NSManagedObject):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417580-sourceinstancesforentitymappingn
    sourceInstancesForEntityMappingNamed_destinationInstances(mappingName: cocoascript.NSString, destinationInstances: cocoascript.NSManagedObject):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417600-mappingmodel
    mappingModel(): cocoascript.NSMappingModel;
    setMappingModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417592-sourcemodel
    sourceModel(): cocoascript.NSManagedObjectModel;
    setSourceModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417610-destinationmodel
    destinationModel(): cocoascript.NSManagedObjectModel;
    setDestinationModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417596-sourceentityforentitymapping
    sourceEntityForEntityMapping(mEntity: cocoascript.NSEntityMapping):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417598-destinationentityforentitymappin
    destinationEntityForEntityMapping(mEntity: cocoascript.NSEntityMapping):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417576-sourcecontext
    sourceContext(): cocoascript.NSManagedObjectContext;
    setSourceContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417578-destinationcontext
    destinationContext(): cocoascript.NSManagedObjectContext;
    setDestinationContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417588-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417606-usesstorespecificmigrationmanage
    usesStoreSpecificMigrationManager(): cocoascript.BOOL;
    setUsesStoreSpecificMigrationManager(): void;
    //
    alloc():cocoascript.NSMigrationManager;
    //
    init():cocoascript.NSMigrationManager;
  }
}

declare const NSMigrationManager: cocoascript.NSMigrationManager;
