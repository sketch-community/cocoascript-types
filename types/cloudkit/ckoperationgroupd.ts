declare namespace cocoascript {
/**
 * An object for grouping CloudKit operations to align with user interactions.
 * doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup
 */
interface CKOperationGroup extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866236-init
  init():cocoascript.CKOperationGroup;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866202-initwithcoder
  initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKOperationGroup;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866240-defaultconfiguration
  defaultConfiguration(): cocoascript.CKOperationConfiguration;
  setDefaultConfiguration(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866229-expectedreceivesize
  expectedReceiveSize(): cocoascript.CKOperationGroupTransferSize;
  setExpectedReceiveSize(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866235-expectedsendsize
  expectedSendSize(): cocoascript.CKOperationGroupTransferSize;
  setExpectedSendSize(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866233-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866238-operationgroupid
  operationGroupID(): cocoascript.NSString;
  setOperationGroupID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866220-quantity
  quantity(): cocoascript.NSUInteger;
  setQuantity(): void;
  // 
  alloc():cocoascript.CKOperationGroup;
  // 
  init():cocoascript.CKOperationGroup;
}
}
declare const CKOperationGroup: cocoascript.CKOperationGroup;

