declare namespace cocoascript {
  /**
   * An object that contains layout-related attributes for an element in a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes
   */
  interface NSCollectionViewLayoutAttributes extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1529026-representedelementcategory
    representedElementCategory(): cocoascript.NSCollectionElementCategory;
    setRepresentedElementCategory(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1531306-indexpath
    indexPath(): cocoascript.NSIndexPath;
    setIndexPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1533826-representedelementkind
    representedElementKind(): cocoascript.NSString;
    setRepresentedElementKind(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1532636-frame
    frame(): cocoascript.NSRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1528769-size
    size(): cocoascript.NSSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1525453-alpha
    alpha(): cocoascript.CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1535336-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayoutattributes/1531553-zindex
    zIndex(): cocoascript.NSInteger;
    setZIndex(): void;
    //
    alloc():cocoascript.NSCollectionViewLayoutAttributes;
    //
    init():cocoascript.NSCollectionViewLayoutAttributes;
  }
}

declare const NSCollectionViewLayoutAttributes: cocoascript.NSCollectionViewLayoutAttributes;
