declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult
   */
  interface NSPersistentCloudKitContainerEventResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult/3618821-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult/3618822-resulttype
    resultType(): cocoascript.NSPersistentCloudKitContainerEventResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerEventResult;
    //
    init():cocoascript.NSPersistentCloudKitContainerEventResult;
  }
}

declare const NSPersistentCloudKitContainerEventResult: cocoascript.NSPersistentCloudKitContainerEventResult;
