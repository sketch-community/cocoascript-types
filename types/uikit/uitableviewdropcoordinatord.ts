declare namespace cocoascript {
/**
 * An interface for coordinating your custom drop-related actions with the table view.
 * doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator
 */
interface UITableViewDropCoordinator extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897439-items
  items(): cocoascript.UITableViewDropItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897496-destinationindexpath
  destinationIndexPath(): cocoascript.NSIndexPath;
  setDestinationIndexPath(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897301-dropitem
  dropItem_toRowAtIndexPath(dragItem: cocoascript.UIDragItem, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2909061-dropitem
  dropItem_intoRowAtIndexPath_rect(dragItem: cocoascript.UIDragItem, indexPath: cocoascript.NSIndexPath, rect: cocoascript.CGRect):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897290-dropitem
  dropItem_toTarget(dragItem: cocoascript.UIDragItem, target: cocoascript.UIDragPreviewTarget):cocoascript.UIDragAnimating;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2921667-dropitem
  dropItem_toPlaceholder(dragItem: cocoascript.UIDragItem, placeholder: cocoascript.UITableViewDropPlaceholder):cocoascript.UITableViewDropPlaceholderContext;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897324-session
  session(): cocoascript.UIDropSession;
  setSession(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropcoordinator/2897451-proposal
  proposal(): cocoascript.UITableViewDropProposal;
  setProposal(): void;
}
}

