declare namespace cocoascript {
/**
 * An object used to add an extra visual decoration, such as a badge or a frame, to an item in a collection view.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsupplementaryitem
 */
interface NSCollectionLayoutSupplementaryItem extends NSCollectionLayoutItem {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsupplementaryitem/3199113-itemanchor
  itemAnchor(): cocoascript.NSCollectionLayoutAnchor;
  setItemAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsupplementaryitem/3199109-containeranchor
  containerAnchor(): cocoascript.NSCollectionLayoutAnchor;
  setContainerAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsupplementaryitem/3199110-elementkind
  elementKind(): cocoascript.NSString;
  setElementKind(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsupplementaryitem/3199114-zindex
  zIndex(): cocoascript.NSInteger;
  setZIndex(): void;
  // 
  alloc():cocoascript.NSCollectionLayoutSupplementaryItem;
  // 
  init():cocoascript.NSCollectionLayoutSupplementaryItem;
}
}
declare const NSCollectionLayoutSupplementaryItem: cocoascript.NSCollectionLayoutSupplementaryItem;

