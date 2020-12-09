declare namespace cocoascript {
/**
 * A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
 * doc://com.apple.documentation/documentation/uikit/uidropproposal
 */
interface UIDropProposal extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidropproposal/2890886-initwithdropoperation
  initWithDropOperation(operation: cocoascript.UIDropOperation):cocoascript.UIDropProposal;
  // doc://com.apple.documentation/documentation/uikit/uidropproposal/2890877-operation
  operation(): cocoascript.UIDropOperation;
  setOperation(): void;
  // doc://com.apple.documentation/documentation/uikit/uidropproposal/2890897-precise
  precise(): cocoascript.BOOL;
  setPrecise(): void;
  // doc://com.apple.documentation/documentation/uikit/uidropproposal/2890884-prefersfullsizepreview
  prefersFullSizePreview(): cocoascript.BOOL;
  setPrefersFullSizePreview(): void;
  // 
  alloc():cocoascript.UIDropProposal;
  // 
  init():cocoascript.UIDropProposal;
}
}
declare const UIDropProposal: cocoascript.UIDropProposal;

