declare namespace cocoascript {
  /**
   * The methods that let you coordinate with a flow layout object to implement a grid-based layout.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout
   */
  interface UICollectionViewDelegateFlowLayout extends UICollectionViewDelegate {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617708-collectionview
    collectionView_layout_sizeForItemAtIndexPath(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, indexPath: cocoascript.NSIndexPath):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617718-collectionview
    collectionView_layout_insetForSectionAtIndex(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, section: cocoascript.NSInteger):cocoascript.UIEdgeInsets;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617705-collectionview
    collectionView_layout_minimumLineSpacingForSectionAtIndex(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617696-collectionview
    collectionView_layout_minimumInteritemSpacingForSectionAtIndex(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617702-collectionview
    collectionView_layout_referenceSizeForHeaderInSection(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdelegateflowlayout/1617713-collectionview
    collectionView_layout_referenceSizeForFooterInSection(collectionView: cocoascript.UICollectionView, collectionViewLayout: cocoascript.UICollectionViewLayout, section: cocoascript.NSInteger):cocoascript.CGSize;
  }
}
