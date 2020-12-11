declare namespace cocoascript {
  /**
   * A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout
   */
  interface NSCollectionViewDelegateFlowLayout extends NSCollectionViewDelegate {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402900-collectionview
    collectionView_layout_sizeForItemAtIndexPath(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, indexPath: cocoascript.NSIndexPath):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402874-collectionview
    collectionView_layout_insetForSectionAtIndex(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, section: cocoascript.NSInteger):cocoascript.NSEdgeInsets;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402887-collectionview
    collectionView_layout_minimumLineSpacingForSectionAtIndex(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402879-collectionview
    collectionView_layout_minimumInteritemSpacingForSectionAtIndex(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402876-collectionview
    collectionView_layout_referenceSizeForHeaderInSection(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, section: cocoascript.NSInteger):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegateflowlayout/1402883-collectionview
    collectionView_layout_referenceSizeForFooterInSection(collectionView: cocoascript.NSCollectionView, collectionViewLayout: cocoascript.NSCollectionViewLayout, section: cocoascript.NSInteger):cocoascript.NSSize;
  }
}
