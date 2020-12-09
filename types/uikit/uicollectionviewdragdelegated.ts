declare namespace cocoascript {
/**
 * The interface for initiating drags from a collection view.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate
 */
interface UICollectionViewDragDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2897389-collectionview
  collectionView_itemsForBeginningDragSession_atIndexPath(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2897367-collectionview
  collectionView_itemsForAddingToDragSession_atIndexPath_point(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession, indexPath: cocoascript.NSIndexPath, point: cocoascript.CGPoint):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2897440-collectionview
  collectionView_dragSessionWillBegin(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2897477-collectionview
  collectionView_dragSessionDidEnd(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2897459-collectionview
  collectionView_dragPreviewParametersForItemAtIndexPath(collectionView: cocoascript.UICollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragPreviewParameters;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2919964-collectionview
  collectionView_dragSessionAllowsMoveOperation(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdragdelegate/2919963-collectionview
  collectionView_dragSessionIsRestrictedToDraggingApplication(collectionView: cocoascript.UICollectionView, session: cocoascript.UIDragSession):cocoascript.BOOL;
}
}

