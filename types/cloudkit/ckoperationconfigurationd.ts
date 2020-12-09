declare namespace cocoascript {
/**
 * An object that describes how a CloudKit operation behaves.
 * doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration
 */
interface CKOperationConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866217-allowscellularaccess
  allowsCellularAccess(): cocoascript.BOOL;
  setAllowsCellularAccess(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866232-container
  container(): cocoascript.CKContainer;
  setContainer(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866225-longlived
  longLived(): cocoascript.BOOL;
  setLongLived(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866201-qualityofservice
  qualityOfService(): cocoascript.NSQualityOfService;
  setQualityOfService(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866210-timeoutintervalforrequest
  timeoutIntervalForRequest(): cocoascript.NSTimeInterval;
  setTimeoutIntervalForRequest(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866221-timeoutintervalforresource
  timeoutIntervalForResource(): cocoascript.NSTimeInterval;
  setTimeoutIntervalForResource(): void;
  // 
  alloc():cocoascript.CKOperationConfiguration;
  // 
  init():cocoascript.CKOperationConfiguration;
}
}
declare const CKOperationConfiguration: cocoascript.CKOperationConfiguration;

