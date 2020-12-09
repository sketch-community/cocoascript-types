declare namespace cocoascript {
/**
 * The data associated with an item being dropped into the table view.
 * doc://com.apple.documentation/documentation/uikit/uitableviewdropitem
 */
interface UITableViewDropItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropitem/2897402-dragitem
  dragItem(): cocoascript.UIDragItem;
  setDragItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropitem/2897464-previewsize
  previewSize(): cocoascript.CGSize;
  setPreviewSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropitem/2897479-sourceindexpath
  sourceIndexPath(): cocoascript.NSIndexPath;
  setSourceIndexPath(): void;
}
}

