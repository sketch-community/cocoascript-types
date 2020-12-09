declare namespace cocoascript {
/**
 * A layout object that manages the layout-related attributes for a given item in a collection view. 
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes
 */
interface UICollectionViewLayoutAttributes extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617776-indexpath
  indexPath(): cocoascript.NSIndexPath;
  setIndexPath(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617738-representedelementcategory
  representedElementCategory(): cocoascript.UICollectionElementCategory;
  setRepresentedElementCategory(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617806-representedelementkind
  representedElementKind(): cocoascript.NSString;
  setRepresentedElementKind(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617753-frame
  frame(): cocoascript.CGRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617782-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617735-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617733-size
  size(): cocoascript.CGSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617764-transform3d
  transform3D(): cocoascript.CATransform3D;
  setTransform3D(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617779-transform
  transform(): cocoascript.CGAffineTransform;
  setTransform(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617743-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617768-zindex
  zIndex(): cocoascript.NSInteger;
  setZIndex(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayoutattributes/1617799-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // 
  alloc():cocoascript.UICollectionViewLayoutAttributes;
  // 
  init():cocoascript.UICollectionViewLayoutAttributes;
}
}
declare const UICollectionViewLayoutAttributes: cocoascript.UICollectionViewLayoutAttributes;

