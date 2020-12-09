declare namespace cocoascript {
/**
 * An interface for coordinating your custom drop-related actions with the collection view.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator
 */
interface UICollectionViewDropCoordinator extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897482-items
  items(): cocoascript.UICollectionViewDropItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897284-destinationindexpath
  destinationIndexPath(): cocoascript.NSIndexPath;
  setDestinationIndexPath(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897310-dropitem
  dropItem_toItemAtIndexPath(dragItem: cocoascript.UIDragItem, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2909040-dropitem
  dropItem_intoItemAtIndexPath_rect(dragItem: cocoascript.UIDragItem, indexPath: cocoascript.NSIndexPath, rect: cocoascript.CGRect):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897364-dropitem
  dropItem_toTarget(dragItem: cocoascript.UIDragItem, target: cocoascript.UIDragPreviewTarget):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2921634-dropitem
  dropItem_toPlaceholder(dragItem: cocoascript.UIDragItem, placeholder: cocoascript.UICollectionViewDropPlaceholder):cocoascript.UICollectionViewDropPlaceholderContext;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897462-session
  session(): cocoascript.UIDropSession;
  setSession(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropcoordinator/2897465-proposal
  proposal(): cocoascript.UICollectionViewDropProposal;
  setProposal(): void;
}
}

