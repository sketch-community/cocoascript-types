declare namespace cocoascript {
  /**
   * The abstract base class for results returned from a persistent store coordinator.
   * doc://com.apple.documentation/documentation/coredata/nspersistentstoreresult
   */
  interface NSPersistentStoreResult extends NSObject {
    //
    alloc():cocoascript.NSPersistentStoreResult;
    //
    init():cocoascript.NSPersistentStoreResult;
  }
}

declare const NSPersistentStoreResult: cocoascript.NSPersistentStoreResult;
