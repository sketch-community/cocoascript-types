declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventrequest
   */
  interface NSPersistentCloudKitContainerEventRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618819-resulttype
    resultType(): cocoascript.NSPersistentCloudKitContainerEventResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerEventRequest;
    //
    init():cocoascript.NSPersistentCloudKitContainerEventRequest;
  }
}

declare const NSPersistentCloudKitContainerEventRequest: cocoascript.NSPersistentCloudKitContainerEventRequest;
