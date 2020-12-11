declare namespace cocoascript {
  /**
   * The result of a request to fetch persistent history.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult
   */
  interface NSPersistentHistoryResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult/2892350-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult/2892356-resulttype
    resultType(): cocoascript.NSPersistentHistoryResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentHistoryResult;
    //
    init():cocoascript.NSPersistentHistoryResult;
  }
}

declare const NSPersistentHistoryResult: cocoascript.NSPersistentHistoryResult;
