declare namespace cocoascript {
/**
 * An object used to add headers or footers to a collection view.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutboundarysupplementaryitem
 */
interface NSCollectionLayoutBoundarySupplementaryItem extends NSCollectionLayoutSupplementaryItem {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/3199044-pintovisiblebounds
  pinToVisibleBounds(): cocoascript.BOOL;
  setPinToVisibleBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/3199043-offset
  offset(): cocoascript.CGPoint;
  setOffset(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/3199039-alignment
  alignment(): cocoascript.NSRectAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/3199040-extendsboundary
  extendsBoundary(): cocoascript.BOOL;
  setExtendsBoundary(): void;
  // 
  alloc():cocoascript.NSCollectionLayoutBoundarySupplementaryItem;
  // 
  init():cocoascript.NSCollectionLayoutBoundarySupplementaryItem;
}
}
declare const NSCollectionLayoutBoundarySupplementaryItem: cocoascript.NSCollectionLayoutBoundarySupplementaryItem;

