declare namespace cocoascript {
/**
 * Your proposed solution for handling a drop in a collection view.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropproposal
 */
interface UICollectionViewDropProposal extends UIDropProposal {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropproposal/2897391-initwithdropoperation
  initWithDropOperation_intent(operation: cocoascript.UIDropOperation, intent: cocoascript.UICollectionViewDropIntent):cocoascript.UICollectionViewDropProposal;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropproposal/2897338-intent
  intent(): cocoascript.UICollectionViewDropIntent;
  setIntent(): void;
  // 
  alloc():cocoascript.UICollectionViewDropProposal;
  // 
  init():cocoascript.UICollectionViewDropProposal;
}
}
declare const UICollectionViewDropProposal: cocoascript.UICollectionViewDropProposal;

