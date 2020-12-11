declare namespace cocoascript {
  /**
   * The data associated with an item being dropped into the collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropitem
   */
  interface UICollectionViewDropItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropitem/2897456-dragitem
    dragItem(): cocoascript.UIDragItem;
    setDragItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropitem/2897437-previewsize
    previewSize(): cocoascript.CGSize;
    setPreviewSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropitem/2897392-sourceindexpath
    sourceIndexPath(): cocoascript.NSIndexPath;
    setSourceIndexPath(): void;
  }
}
