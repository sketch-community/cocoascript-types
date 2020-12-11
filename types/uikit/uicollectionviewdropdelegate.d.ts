declare namespace cocoascript {
  /**
   * The interface for handling drops in a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate
   */
  interface UICollectionViewDropDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897386-collectionview
    collectionView_canHandleDropSession(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDropSession):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897304-collectionview
    collectionView_performDropWithCoordinator(collectionView: cocoascript.UICollectionView, coordinator: cocoascript.UICollectionViewDropCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897375-collectionview
    collectionView_dropSessionDidUpdate_withDestinationIndexPath(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDropSession, destinationIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewDropProposal;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897329-collectionview
    collectionView_dropSessionDidEnter(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDropSession):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897416-collectionview
    collectionView_dropSessionDidExit(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDropSession):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2897291-collectionview
    collectionView_dropSessionDidEnd(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDropSession):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropdelegate/2921636-collectionview
    collectionView_dropPreviewParametersForItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragPreviewParameters;
  }
}
