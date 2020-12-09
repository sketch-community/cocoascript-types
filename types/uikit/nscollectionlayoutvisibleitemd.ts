declare namespace cocoascript {
/**
 * An item that's currently visible within the bounds of a section.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem
 */
interface NSCollectionLayoutVisibleItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199122-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199124-representedelementkind
  representedElementKind(): cocoascript.NSString;
  setRepresentedElementKind(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199123-representedelementcategory
  representedElementCategory(): cocoascript.UICollectionElementCategory;
  setRepresentedElementCategory(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199120-indexpath
  indexPath(): cocoascript.NSIndexPath;
  setIndexPath(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199116-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199121-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199119-frame
  frame(): cocoascript.CGRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199117-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199118-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199125-transform
  transform(): cocoascript.CGAffineTransform;
  setTransform(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199126-transform3d
  transform3D(): cocoascript.CATransform3D;
  setTransform3D(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutvisibleitem/3199127-zindex
  zIndex(): cocoascript.NSInteger;
  setZIndex(): void;
}
}

