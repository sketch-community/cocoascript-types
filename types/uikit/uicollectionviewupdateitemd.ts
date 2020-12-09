declare namespace cocoascript {
/**
 * An object that describes a single change to make to an item in a collection view.  
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewupdateitem
 */
interface UICollectionViewUpdateItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewupdateitem/1617772-indexpathbeforeupdate
  indexPathBeforeUpdate(): cocoascript.NSIndexPath;
  setIndexPathBeforeUpdate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewupdateitem/1617765-indexpathafterupdate
  indexPathAfterUpdate(): cocoascript.NSIndexPath;
  setIndexPathAfterUpdate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewupdateitem/1617748-updateaction
  updateAction(): cocoascript.UICollectionUpdateAction;
  setUpdateAction(): void;
  // 
  alloc():cocoascript.UICollectionViewUpdateItem;
  // 
  init():cocoascript.UICollectionViewUpdateItem;
}
}
declare const UICollectionViewUpdateItem: cocoascript.UICollectionViewUpdateItem;

