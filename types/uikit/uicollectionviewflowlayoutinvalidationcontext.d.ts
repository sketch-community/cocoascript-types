declare namespace cocoascript {
  /**
   * A set of properties for determining whether to recompute the size of items or their position in the layout.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext
   */
  interface UICollectionViewFlowLayoutInvalidationContext extends UICollectionViewLayoutInvalidationContext {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/1617721-invalidateflowlayoutdelegatemetr
    invalidateFlowLayoutDelegateMetrics(): cocoascript.BOOL;
    setInvalidateFlowLayoutDelegateMetrics(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/1617707-invalidateflowlayoutattributes
    invalidateFlowLayoutAttributes(): cocoascript.BOOL;
    setInvalidateFlowLayoutAttributes(): void;
    //
    alloc():cocoascript.UICollectionViewFlowLayoutInvalidationContext;
    //
    init():cocoascript.UICollectionViewFlowLayoutInvalidationContext;
  }
}

declare const UICollectionViewFlowLayoutInvalidationContext: cocoascript.UICollectionViewFlowLayoutInvalidationContext;
