declare namespace cocoascript {
/**
 * A protocol that provides advance warning of the data requirements for a collection view, allowing the triggering of asynchronous data load operations.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasourceprefetching
 */
interface UICollectionViewDataSourcePrefetching extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasourceprefetching/1771767-collectionview
  collectionView_prefetchItemsAtIndexPaths(collectionView: cocoascript.UICollectionView, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasourceprefetching/1771769-collectionview
  collectionView_cancelPrefetchingForItemsAtIndexPaths(collectionView: cocoascript.UICollectionView, indexPaths: cocoascript.NSIndexPath):void;
}
}

