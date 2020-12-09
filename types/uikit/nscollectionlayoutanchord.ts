declare namespace cocoascript {
/**
 * An object that defines how to attach a supplementary item to an item in a collection view.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutanchor
 */
interface NSCollectionLayoutAnchor extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutanchor/3199030-edges
  edges(): cocoascript.NSDirectionalRectEdge;
  setEdges(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutanchor/3199037-offset
  offset(): cocoascript.CGPoint;
  setOffset(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutanchor/3213811-isabsoluteoffset
  isAbsoluteOffset(): cocoascript.BOOL;
  setIsAbsoluteOffset(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutanchor/3213812-isfractionaloffset
  isFractionalOffset(): cocoascript.BOOL;
  setIsFractionalOffset(): void;
  // 
  alloc():cocoascript.NSCollectionLayoutAnchor;
  // 
  init():cocoascript.NSCollectionLayoutAnchor;
}
}
declare const NSCollectionLayoutAnchor: cocoascript.NSCollectionLayoutAnchor;

