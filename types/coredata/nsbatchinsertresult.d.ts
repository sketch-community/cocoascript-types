declare namespace cocoascript {
  /**
   * The result that Core Data returns when executing a batch-insertion request.
   * doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult
   */
  interface NSBatchInsertResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult/3333246-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult/3333247-resulttype
    resultType(): cocoascript.NSBatchInsertRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchInsertResult;
    //
    init():cocoascript.NSBatchInsertResult;
  }
}

declare const NSBatchInsertResult: cocoascript.NSBatchInsertResult;
