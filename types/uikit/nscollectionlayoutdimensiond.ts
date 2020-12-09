declare namespace cocoascript {
/**
 * An individual dimension of an item's size (width or height) in a collection view.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension
 */
interface NSCollectionLayoutDimension extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension/3199056-dimension
  dimension(): cocoascript.CGFloat;
  setDimension(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension/3199060-isabsolute
  isAbsolute(): cocoascript.BOOL;
  setIsAbsolute(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension/3199061-isestimated
  isEstimated(): cocoascript.BOOL;
  setIsEstimated(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension/3199062-isfractionalheight
  isFractionalHeight(): cocoascript.BOOL;
  setIsFractionalHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdimension/3199063-isfractionalwidth
  isFractionalWidth(): cocoascript.BOOL;
  setIsFractionalWidth(): void;
  // 
  alloc():cocoascript.NSCollectionLayoutDimension;
  // 
  init():cocoascript.NSCollectionLayoutDimension;
}
}
declare const NSCollectionLayoutDimension: cocoascript.NSCollectionLayoutDimension;

