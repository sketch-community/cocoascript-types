declare namespace cocoascript {
  /**
   * The methods adopted by the object you use to manage data and provide cells for a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource
   */
  interface UICollectionViewDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618058-collectionview
    collectionView_numberOfItemsInSection(collectionView: cocoascript.UICollectionView, section: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618023-numberofsectionsincollectionview
    numberOfSectionsInCollectionView(collectionView: cocoascript.UICollectionView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618029-collectionview
    collectionView_cellForItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewCell;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618037-collectionview
    collectionView_viewForSupplementaryElementOfKind_atIndexPath(collectionView: cocoascript.UICollectionView, kind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionReusableView;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618015-collectionview
    collectionView_canMoveItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/1618064-collectionview
    collectionView_moveItemAtIndexPath_toIndexPath(collectionView: cocoascript.UICollectionView, sourceIndexPath: cocoascript.NSIndexPath, destinationIndexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/2851455-indextitlesforcollectionview
    indexTitlesForCollectionView(collectionView: cocoascript.UICollectionView):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdatasource/2851456-collectionview
    collectionView_indexPathForIndexTitle_atIndex(collectionView: cocoascript.UICollectionView, title: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSIndexPath;
  }
}
