declare namespace cocoascript {
/**
 * An operation that fetches metadata for one or more shares.
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation
 */
interface CKFetchShareMetadataOperation extends CKOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/2715836-init
  init():cocoascript.CKFetchShareMetadataOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640495-initwithshareurls
  initWithShareURLs(shareURLs: cocoascript.NSURL):cocoascript.CKFetchShareMetadataOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640375-rootrecorddesiredkeys
  rootRecordDesiredKeys(): cocoascript.CKRecordFieldKey;
  setRootRecordDesiredKeys(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640508-shareurls
  shareURLs(): cocoascript.NSURL;
  setShareURLs(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640519-shouldfetchrootrecord
  shouldFetchRootRecord(): cocoascript.BOOL;
  setShouldFetchRootRecord(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640447-persharemetadatablock
  perShareMetadataBlock(): cocoascript.NSError;
  setPerShareMetadataBlock(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640457-fetchsharemetadatacompletionbloc
  fetchShareMetadataCompletionBlock(): cocoascript.NSError;
  setFetchShareMetadataCompletionBlock(): void;
  // 
  alloc():cocoascript.CKFetchShareMetadataOperation;
  // 
  init():cocoascript.CKFetchShareMetadataOperation;
}
}
declare const CKFetchShareMetadataOperation: cocoascript.CKFetchShareMetadataOperation;

