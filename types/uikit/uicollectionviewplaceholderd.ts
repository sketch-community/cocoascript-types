declare namespace cocoascript {
/**
 * A placeholder for an item dragged or dropped on a collection view.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewplaceholder
 */
interface UICollectionViewPlaceholder extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewplaceholder/2921639-initwithinsertionindexpath
  initWithInsertionIndexPath_reuseIdentifier(insertionIndexPath: cocoascript.NSIndexPath, reuseIdentifier: cocoascript.NSString):cocoascript.UICollectionViewPlaceholder;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewplaceholder/2921635-cellupdatehandler
  cellUpdateHandler(): cocoascript.UICollectionViewCell;
  setCellUpdateHandler(): void;
  // 
  alloc():cocoascript.UICollectionViewPlaceholder;
  // 
  init():cocoascript.UICollectionViewPlaceholder;
}
}
declare const UICollectionViewPlaceholder: cocoascript.UICollectionViewPlaceholder;

