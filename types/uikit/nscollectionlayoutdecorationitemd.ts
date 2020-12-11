declare namespace cocoascript {
  /**
   * An object used to add a background to a section of a collection view.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdecorationitem
   */
  interface NSCollectionLayoutDecorationItem extends NSCollectionLayoutItem {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdecorationitem/3213831-elementkind
    elementKind(): cocoascript.NSString;
    setElementKind(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutdecorationitem/3199053-zindex
    zIndex(): cocoascript.NSInteger;
    setZIndex(): void;
    //
    alloc():cocoascript.NSCollectionLayoutDecorationItem;
    //
    init():cocoascript.NSCollectionLayoutDecorationItem;
  }
}

declare const NSCollectionLayoutDecorationItem: cocoascript.NSCollectionLayoutDecorationItem;
