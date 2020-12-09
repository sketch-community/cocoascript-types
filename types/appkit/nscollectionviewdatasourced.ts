declare namespace cocoascript {
/**
 * A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewdatasource
 */
interface NSCollectionViewDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdatasource/1525901-numberofsectionsincollectionview
  numberOfSectionsInCollectionView(collectionView: cocoascript.NSCollectionView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdatasource/1525594-collectionview
  collectionView_numberOfItemsInSection(collectionView: cocoascript.NSCollectionView, section: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdatasource/1524271-collectionview
  collectionView_itemForRepresentedObjectAtIndexPath(collectionView: cocoascript.NSCollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdatasource/1528286-collectionview
  collectionView_viewForSupplementaryElementOfKind_atIndexPath(collectionView: cocoascript.NSCollectionView, kind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):cocoascript.NSView;
}
}

