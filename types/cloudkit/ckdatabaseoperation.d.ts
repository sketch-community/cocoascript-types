declare namespace cocoascript {
  /**
   * The abstract base class for operations that act upon databases in CloudKit.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabaseoperation
   */
  interface CKDatabaseOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabaseoperation/1515274-database
    database(): cocoascript.CKDatabase;
    setDatabase(): void;
    //
    alloc():cocoascript.CKDatabaseOperation;
    //
    init():cocoascript.CKDatabaseOperation;
  }
}

declare const CKDatabaseOperation: cocoascript.CKDatabaseOperation;
