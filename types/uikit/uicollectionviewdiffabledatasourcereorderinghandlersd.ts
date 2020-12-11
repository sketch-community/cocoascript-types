declare namespace cocoascript {
  /**
   * Handlers for reordering items.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers
   */
  interface UICollectionViewDiffableDataSourceReorderingHandlers extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/3600517-canreorderitemhandler
    canReorderItemHandler(): cocoascript.ItemType;
    setCanReorderItemHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/3600519-willreorderhandler
    willReorderHandler(): cocoascript.ItemType;
    setWillReorderHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/3600518-didreorderhandler
    didReorderHandler(): cocoascript.ItemType;
    setDidReorderHandler(): void;
    //
    alloc():cocoascript.UICollectionViewDiffableDataSourceReorderingHandlers;
    //
    init():cocoascript.UICollectionViewDiffableDataSourceReorderingHandlers;
  }
}

declare const UICollectionViewDiffableDataSourceReorderingHandlers: cocoascript.UICollectionViewDiffableDataSourceReorderingHandlers;
