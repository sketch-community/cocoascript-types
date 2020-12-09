declare namespace cocoascript {
/**
 * The abstract base class for all operations that execute in a database.
 * doc://com.apple.documentation/documentation/cloudkit/ckoperation
 */
interface CKOperation extends NSOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452370-init
  init():cocoascript.CKOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452362-operationid
  operationID(): cocoascript.CKOperationID;
  setOperationID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866213-configuration
  configuration(): cocoascript.CKOperationConfiguration;
  setConfiguration(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866228-group
  group(): cocoascript.CKOperationGroup;
  setGroup(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452366-longlivedoperationwaspersistedbl
  longLivedOperationWasPersistedBlock(): void;
  setLongLivedOperationWasPersistedBlock(): void;
  // 
  alloc():cocoascript.CKOperation;
  // 
  init():cocoascript.CKOperation;
}
}
declare const CKOperation: cocoascript.CKOperation;

