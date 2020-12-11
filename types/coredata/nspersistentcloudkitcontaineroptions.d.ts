declare namespace cocoascript {
  /**
   * An object that customizes how a store description aligns with a CloudKit database.
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions
   */
  interface NSPersistentCloudKitContainerOptions extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3141675-initwithcontaineridentifier
    initWithContainerIdentifier(containerIdentifier: cocoascript.NSString):cocoascript.NSPersistentCloudKitContainerOptions;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3141674-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3580372-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerOptions;
    //
    init():cocoascript.NSPersistentCloudKitContainerOptions;
  }
}

declare const NSPersistentCloudKitContainerOptions: cocoascript.NSPersistentCloudKitContainerOptions;
