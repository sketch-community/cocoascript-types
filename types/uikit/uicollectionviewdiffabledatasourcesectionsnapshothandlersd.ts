declare namespace cocoascript {
  /**
   * Handlers for expanding and collapsing items.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers
   */
  interface UICollectionViewDiffableDataSourceSectionSnapshotHandlers extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/3600521-shouldcollapseitemhandler
    shouldCollapseItemHandler(): cocoascript.ItemType;
    setShouldCollapseItemHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/3600522-shouldexpanditemhandler
    shouldExpandItemHandler(): cocoascript.ItemType;
    setShouldExpandItemHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/3600524-willcollapseitemhandler
    willCollapseItemHandler(): cocoascript.ItemType;
    setWillCollapseItemHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/3600525-willexpanditemhandler
    willExpandItemHandler(): cocoascript.ItemType;
    setWillExpandItemHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/3600523-snapshotforexpandingparentitemha
    snapshotForExpandingParentItemHandler(): cocoascript.ItemType;
    setSnapshotForExpandingParentItemHandler(): void;
    //
    alloc():cocoascript.UICollectionViewDiffableDataSourceSectionSnapshotHandlers;
    //
    init():cocoascript.UICollectionViewDiffableDataSourceSectionSnapshotHandlers;
  }
}

declare const UICollectionViewDiffableDataSourceSectionSnapshotHandlers: cocoascript.UICollectionViewDiffableDataSourceSectionSnapshotHandlers;
