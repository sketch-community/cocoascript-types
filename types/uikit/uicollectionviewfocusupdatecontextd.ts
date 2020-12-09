declare namespace cocoascript {
/**
 * A context object that stores information specific to a focus update in a collection view.  
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewfocusupdatecontext
 */
interface UICollectionViewFocusUpdateContext extends UIFocusUpdateContext {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewfocusupdatecontext/1618077-previouslyfocusedindexpath
  previouslyFocusedIndexPath(): cocoascript.NSIndexPath;
  setPreviouslyFocusedIndexPath(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewfocusupdatecontext/1618011-nextfocusedindexpath
  nextFocusedIndexPath(): cocoascript.NSIndexPath;
  setNextFocusedIndexPath(): void;
  // 
  alloc():cocoascript.UICollectionViewFocusUpdateContext;
  // 
  init():cocoascript.UICollectionViewFocusUpdateContext;
}
}
declare const UICollectionViewFocusUpdateContext: cocoascript.UICollectionViewFocusUpdateContext;

