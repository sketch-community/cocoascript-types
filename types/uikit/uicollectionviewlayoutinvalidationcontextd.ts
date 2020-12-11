declare namespace cocoascript {
  /**
   * A context object that declares which parts of your layout need to be updated when the layout is invalidated.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext
   */
  interface UICollectionViewLayoutInvalidationContext extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617793-invalidateeverything
    invalidateEverything(): cocoascript.BOOL;
    setInvalidateEverything(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617760-invalidatedatasourcecounts
    invalidateDataSourceCounts(): cocoascript.BOOL;
    setInvalidateDataSourceCounts(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617731-contentoffsetadjustment
    contentOffsetAdjustment(): cocoascript.CGPoint;
    setContentOffsetAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617763-contentsizeadjustment
    contentSizeAdjustment(): cocoascript.CGSize;
    setContentSizeAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617795-invalidateitemsatindexpaths
    invalidateItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617747-invalidatesupplementaryelementso
    invalidateSupplementaryElementsOfKind_atIndexPaths(elementKind: cocoascript.NSString, indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617736-invalidatedecorationelementsofki
    invalidateDecorationElementsOfKind_atIndexPaths(elementKind: cocoascript.NSString, indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617723-invalidateditemindexpaths
    invalidatedItemIndexPaths(): cocoascript.NSIndexPath;
    setInvalidatedItemIndexPaths(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617777-invalidatedsupplementaryindexpat
    invalidatedSupplementaryIndexPaths(): cocoascript.NSIndexPath;
    setInvalidatedSupplementaryIndexPaths(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617805-invalidateddecorationindexpaths
    invalidatedDecorationIndexPaths(): cocoascript.NSIndexPath;
    setInvalidatedDecorationIndexPaths(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617800-previousindexpathsforinteractive
    previousIndexPathsForInteractivelyMovingItems(): cocoascript.NSIndexPath;
    setPreviousIndexPathsForInteractivelyMovingItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617780-targetindexpathsforinteractively
    targetIndexPathsForInteractivelyMovingItems(): cocoascript.NSIndexPath;
    setTargetIndexPathsForInteractivelyMovingItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutinvalidationcontext/1617808-interactivemovementtarget
    interactiveMovementTarget(): cocoascript.CGPoint;
    setInteractiveMovementTarget(): void;
    //
    alloc():cocoascript.UICollectionViewLayoutInvalidationContext;
    //
    init():cocoascript.UICollectionViewLayoutInvalidationContext;
  }
}

declare const UICollectionViewLayoutInvalidationContext: cocoascript.UICollectionViewLayoutInvalidationContext;
