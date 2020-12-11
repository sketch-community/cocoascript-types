declare namespace cocoascript {
  /**
   * The result returned when executing a batch update request.
   * doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult
   */
  interface NSBatchUpdateResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult/1404946-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult/1404900-resulttype
    resultType(): cocoascript.NSBatchUpdateRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchUpdateResult;
    //
    init():cocoascript.NSBatchUpdateResult;
  }
}

declare const NSBatchUpdateResult: cocoascript.NSBatchUpdateResult;
