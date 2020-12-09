declare namespace cocoascript {
/**
 * The object you use to manage data and provide items for a collection view.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource
 */
interface NSCollectionViewDiffableDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281818-initwithcollectionview
  initWithCollectionView_itemProvider(collectionView: cocoascript.NSCollectionView, itemProvider: cocoascript.NSCollectionViewDiffableDataSourceItemProvider):cocoascript.NSCollectionViewDiffableDataSource;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281821-supplementaryviewprovider
  supplementaryViewProvider(): cocoascript.NSCollectionViewDiffableDataSourceSupplementaryViewProvider;
  setSupplementaryViewProvider(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281819-itemidentifierforindexpath
  itemIdentifierForIndexPath(indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281817-indexpathforitemidentifier
  indexPathForItemIdentifier(identifier: cocoascript.):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281820-snapshot
  snapshot():cocoascript.NSDiffableDataSourceSnapshot;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdiffabledatasource/3281816-applysnapshot
  applySnapshot_animatingDifferences(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSCollectionViewDiffableDataSource;
  // 
  init():cocoascript.NSCollectionViewDiffableDataSource;
}
}
declare const NSCollectionViewDiffableDataSource: cocoascript.NSCollectionViewDiffableDataSource;

