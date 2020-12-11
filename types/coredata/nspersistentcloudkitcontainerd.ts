declare namespace cocoascript {
  /**
   * A container that encapsulates the Core Data stack in your app and mirrors select persistent stores to a CloudKit private database.
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer
   */
  interface NSPersistentCloudKitContainer extends NSPersistentContainer {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141668-recordformanagedobjectid
    recordForManagedObjectID(managedObjectID: cocoascript.NSManagedObjectID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141671-recordsformanagedobjectids
    recordsForManagedObjectIDs(managedObjectIDs: cocoascript.NSManagedObjectID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141669-recordidformanagedobjectid
    recordIDForManagedObjectID(managedObjectID: cocoascript.NSManagedObjectID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141670-recordidsformanagedobjectids
    recordIDsForManagedObjectIDs(managedObjectIDs: cocoascript.NSManagedObjectID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649646-candeleterecordformanagedobjectw
    canDeleteRecordForManagedObjectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649647-canmodifymanagedobjectsinstore
    canModifyManagedObjectsInStore(store: cocoascript.NSPersistentStore):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649648-canupdaterecordformanagedobjectw
    canUpdateRecordForManagedObjectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3343548-initializecloudkitschemawithopti
    initializeCloudKitSchemaWithOptions_error(options: cocoascript.NSPersistentCloudKitContainerSchemaInitializationOptions, error: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.NSPersistentCloudKitContainer;
    //
    init():cocoascript.NSPersistentCloudKitContainer;
  }
}

declare const NSPersistentCloudKitContainer: cocoascript.NSPersistentCloudKitContainer;
