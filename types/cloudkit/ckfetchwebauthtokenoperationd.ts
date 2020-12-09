declare namespace cocoascript {
/**
 * An operation that fetches the web authentication token for an API token.
 * doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation
 */
interface CKFetchWebAuthTokenOperation extends CKDatabaseOperation {
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1515266-initwithapitoken
  initWithAPIToken(APIToken: cocoascript.NSString):cocoascript.CKFetchWebAuthTokenOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/2715839-init
  init():cocoascript.CKFetchWebAuthTokenOperation;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1515095-apitoken
  APIToken(): cocoascript.NSString;
  setAPIToken(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1514980-fetchwebauthtokencompletionblock
  fetchWebAuthTokenCompletionBlock(): cocoascript.NSError;
  setFetchWebAuthTokenCompletionBlock(): void;
  // 
  alloc():cocoascript.CKFetchWebAuthTokenOperation;
  // 
  init():cocoascript.CKFetchWebAuthTokenOperation;
}
}
declare const CKFetchWebAuthTokenOperation: cocoascript.CKFetchWebAuthTokenOperation;

