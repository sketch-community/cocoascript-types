declare namespace cocoascript {
/**
 * An object that identifies the portions of a flow layout object that need to be updated. 
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayoutinvalidationcontext
 */
interface NSCollectionViewFlowLayoutInvalidationContext extends NSCollectionViewLayoutInvalidationContext {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayoutinvalidationcontext/1402870-invalidateflowlayoutattributes
  invalidateFlowLayoutAttributes(): cocoascript.BOOL;
  setInvalidateFlowLayoutAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayoutinvalidationcontext/1402902-invalidateflowlayoutdelegatemetr
  invalidateFlowLayoutDelegateMetrics(): cocoascript.BOOL;
  setInvalidateFlowLayoutDelegateMetrics(): void;
  // 
  alloc():cocoascript.NSCollectionViewFlowLayoutInvalidationContext;
  // 
  init():cocoascript.NSCollectionViewFlowLayoutInvalidationContext;
}
}
declare const NSCollectionViewFlowLayoutInvalidationContext: cocoascript.NSCollectionViewFlowLayoutInvalidationContext;

