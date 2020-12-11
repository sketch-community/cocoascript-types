declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewprefetching
   */
  interface NSCollectionViewPrefetching extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewprefetching/2879295-collectionview
    collectionView_cancelPrefetchingForItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewprefetching/2879293-collectionview
    collectionView_prefetchItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):void;
  }
}
