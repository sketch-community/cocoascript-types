declare namespace cocoascript {
  /**
   * The object you use to manage data and provide cells for a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource
   */
  interface UICollectionViewDiffableDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182923-initwithcollectionview
    initWithCollectionView_cellProvider(collectionView: cocoascript.UICollectionView, cellProvider: cocoascript.UICollectionViewDiffableDataSourceCellProvider):cocoascript.UICollectionViewDiffableDataSource;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182926-supplementaryviewprovider
    supplementaryViewProvider(): cocoascript.UICollectionViewDiffableDataSourceSupplementaryViewProvider;
    setSupplementaryViewProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182924-itemidentifierforindexpath
    itemIdentifierForIndexPath(indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182922-indexpathforitemidentifier
    indexPathForItemIdentifier(identifier: cocoascript.):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182925-snapshot
    snapshot():cocoascript.NSDiffableDataSourceSnapshot;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3182921-applysnapshot
    applySnapshot_animatingDifferences(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3356324-applysnapshot
    applySnapshot_animatingDifferences_completion(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3600515-snapshotforsection
    snapshotForSection(section: cocoascript.):cocoascript.NSDiffableDataSourceSectionSnapshot;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3600511-applysnapshot
    applySnapshot_toSection(snapshot: cocoascript.NSDiffableDataSourceSectionSnapshot, sectionIdentifier: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3600512-applysnapshot
    applySnapshot_toSection_completion(snapshot: cocoascript.NSDiffableDataSourceSectionSnapshot, sectionIdentifier: cocoascript.BOOL, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3600513-reorderinghandlers
    reorderingHandlers(): cocoascript.ItemIdentifierType;
    setReorderingHandlers(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasource/3600514-sectionsnapshothandlers
    sectionSnapshotHandlers(): cocoascript.ItemIdentifierType;
    setSectionSnapshotHandlers(): void;
    //
    alloc():cocoascript.UICollectionViewDiffableDataSource;
    //
    init():cocoascript.UICollectionViewDiffableDataSource;
  }
}

declare const UICollectionViewDiffableDataSource: cocoascript.UICollectionViewDiffableDataSource;
