declare namespace cocoascript {
  /**
   * A request to fetch or purge persistent history.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest
   */
  interface NSPersistentHistoryChangeRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/2892342-token
    token(): cocoascript.NSPersistentHistoryToken;
    setToken(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/3240593-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/2892341-resulttype
    resultType(): cocoascript.NSPersistentHistoryResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentHistoryChangeRequest;
    //
    init():cocoascript.NSPersistentHistoryChangeRequest;
  }
}

declare const NSPersistentHistoryChangeRequest: cocoascript.NSPersistentHistoryChangeRequest;
