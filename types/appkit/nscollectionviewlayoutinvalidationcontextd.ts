declare namespace cocoascript {
/**
 * An object that identifies the portions of your layout that need to be updated. 
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext
 */
interface NSCollectionViewLayoutInvalidationContext extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1525613-invalidateeverything
  invalidateEverything(): cocoascript.BOOL;
  setInvalidateEverything(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1526189-invalidatedatasourcecounts
  invalidateDataSourceCounts(): cocoascript.BOOL;
  setInvalidateDataSourceCounts(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1533465-contentoffsetadjustment
  contentOffsetAdjustment(): cocoascript.NSPoint;
  setContentOffsetAdjustment(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1527883-contentsizeadjustment
  contentSizeAdjustment(): cocoascript.NSSize;
  setContentSizeAdjustment(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1526592-invalidateitemsatindexpaths
  invalidateItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1533990-invalidatesupplementaryelementso
  invalidateSupplementaryElementsOfKind_atIndexPaths(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1535363-invalidatedecorationelementsofki
  invalidateDecorationElementsOfKind_atIndexPaths(elementKind: cocoascript.NSCollectionViewDecorationElementKind, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1525361-invalidateditemindexpaths
  invalidatedItemIndexPaths(): cocoascript.NSIndexPath;
  setInvalidatedItemIndexPaths(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1531052-invalidatedsupplementaryindexpat
  invalidatedSupplementaryIndexPaths(): cocoascript.NSIndexPath;
  setInvalidatedSupplementaryIndexPaths(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutinvalidationcontext/1530481-invalidateddecorationindexpaths
  invalidatedDecorationIndexPaths(): cocoascript.NSIndexPath;
  setInvalidatedDecorationIndexPaths(): void;
  // 
  alloc():cocoascript.NSCollectionViewLayoutInvalidationContext;
  // 
  init():cocoascript.NSCollectionViewLayoutInvalidationContext;
}
}
declare const NSCollectionViewLayoutInvalidationContext: cocoascript.NSCollectionViewLayoutInvalidationContext;

