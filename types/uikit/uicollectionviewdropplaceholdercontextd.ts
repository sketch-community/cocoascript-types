declare namespace cocoascript {
  /**
   * An object that contains information about a placeholder in the collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholdercontext
   */
  interface UICollectionViewDropPlaceholderContext extends UIDragAnimating {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholdercontext/2897447-commitinsertionwithdatasourceupd
    commitInsertionWithDataSourceUpdates(dataSourceUpdates: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholdercontext/2897490-setneedscellupdate
    setNeedsCellUpdate():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholdercontext/2897339-deleteplaceholder
    deletePlaceholder():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholdercontext/2897430-dragitem
    dragItem(): cocoascript.UIDragItem;
    setDragItem(): void;
  }
}
