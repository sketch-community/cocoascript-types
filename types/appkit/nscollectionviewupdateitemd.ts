declare namespace cocoascript {
  /**
   * A description of a single change to make to an item in a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewupdateitem
   */
  interface NSCollectionViewUpdateItem extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewupdateitem/1534798-indexpathbeforeupdate
    indexPathBeforeUpdate(): cocoascript.NSIndexPath;
    setIndexPathBeforeUpdate(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewupdateitem/1530431-indexpathafterupdate
    indexPathAfterUpdate(): cocoascript.NSIndexPath;
    setIndexPathAfterUpdate(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewupdateitem/1534857-updateaction
    updateAction(): cocoascript.NSCollectionUpdateAction;
    setUpdateAction(): void;
    //
    alloc():cocoascript.NSCollectionViewUpdateItem;
    //
    init():cocoascript.NSCollectionViewUpdateItem;
  }
}

declare const NSCollectionViewUpdateItem: cocoascript.NSCollectionViewUpdateItem;
