declare namespace cocoascript {
  /**
   * A description object used to create and load a persistent store.
   * doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription
   */
  interface NSPersistentStoreDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640563-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSPersistentStoreDescription;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640616-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640634-configuration
    configuration(): cocoascript.NSString;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640587-timeout
    timeout(): cocoascript.NSTimeInterval;
    setTimeout(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640609-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640626-readonly
    readOnly(): cocoascript.BOOL;
    setReadOnly(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640599-shouldaddstoreasynchronously
    shouldAddStoreAsynchronously(): cocoascript.BOOL;
    setShouldAddStoreAsynchronously(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640623-shouldinfermappingmodelautomatic
    shouldInferMappingModelAutomatically(): cocoascript.BOOL;
    setShouldInferMappingModelAutomatically(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640566-shouldmigratestoreautomatically
    shouldMigrateStoreAutomatically(): cocoascript.BOOL;
    setShouldMigrateStoreAutomatically(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640574-setoption
    setOption_forKey(option: cocoascript.NSObject, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640598-setvalue
    setValue_forPragmaNamed(value: cocoascript.NSObject, name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640571-options
    options(): cocoascript.NSObject;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640614-sqlitepragmas
    sqlitePragmas(): cocoascript.NSObject;
    setSqlitePragmas(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/3141672-cloudkitcontaineroptions
    cloudKitContainerOptions(): cocoascript.NSPersistentCloudKitContainerOptions;
    setCloudKitContainerOptions(): void;
    //
    alloc():cocoascript.NSPersistentStoreDescription;
    //
    init():cocoascript.NSPersistentStoreDescription;
  }
}

declare const NSPersistentStoreDescription: cocoascript.NSPersistentStoreDescription;
