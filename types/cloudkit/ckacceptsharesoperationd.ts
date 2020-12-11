declare namespace cocoascript {
  /**
   * An operation that accepts shared records.
   * doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation
   */
  interface CKAcceptSharesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640506-init
    init():cocoascript.CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823506-initwithsharemetadatas
    initWithShareMetadatas(shareMetadatas: cocoascript.CKShareMetadata):cocoascript.CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823508-sharemetadatas
    shareMetadatas(): cocoascript.CKShareMetadata;
    setShareMetadatas(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640426-persharecompletionblock
    perShareCompletionBlock(): cocoascript.NSError;
    setPerShareCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640442-acceptsharescompletionblock
    acceptSharesCompletionBlock(): cocoascript.NSError;
    setAcceptSharesCompletionBlock(): void;
    //
    alloc():cocoascript.CKAcceptSharesOperation;
    //
    init():cocoascript.CKAcceptSharesOperation;
  }
}

declare const CKAcceptSharesOperation: cocoascript.CKAcceptSharesOperation;
