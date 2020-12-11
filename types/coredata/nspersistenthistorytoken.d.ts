declare namespace cocoascript {
  /**
   * A bookmark for keeping track the most recent history that you’ve processed.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistorytoken
   */
  interface NSPersistentHistoryToken extends NSObject {
    //
    alloc():cocoascript.NSPersistentHistoryToken;
    //
    init():cocoascript.NSPersistentHistoryToken;
  }
}

declare const NSPersistentHistoryToken: cocoascript.NSPersistentHistoryToken;
